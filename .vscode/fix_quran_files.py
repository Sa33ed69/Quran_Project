
from pathlib import Path
import re
import shutil

# The folder containing this Python script and your website files
PROJECT_DIR = Path(__file__).resolve().parent.parent
# Keep a backup of the original JavaScript files
BACKUP_DIR = PROJECT_DIR / "quran_js_backup"
BACKUP_DIR.mkdir(exist_ok=True)

OLD_URL = "raw.githubusercontent.com/risan/quran-json"

updated = []
skipped = []

for js_file in PROJECT_DIR.glob("*.js"):
    if js_file.name.lower() == "qurancontent.js":
        continue

    original = js_file.read_text(encoding="utf-8")
    
    # Only process files using the old Quran API
    if OLD_URL not in original:
        continue

    # Find the surah number from the existing code, e.g. data["80"]
    match = re.search(
        r'data\s*\[\s*["\'](\d{1,3})["\']\s*\]',
        original
    )

    if not match:
        skipped.append(js_file.name)
        continue

    surah_number = int(match.group(1))

    if not 1 <= surah_number <= 114:
        skipped.append(js_file.name)
        continue

    modified = original

    # Replace the old API URL with the new endpoint for this surah
    modified = re.sub(
        r"""https://raw\.githubusercontent\.com/risan/quran-json/[^"']*""",
        f"https://quran-json.risanb.com/text/uthmani/chapters/{surah_number}.json",
        modified
    )

    # The new API stores verses inside data.verses
    modified = re.sub(
        r'(const\s+\w+\s*=\s*)data\s*\[\s*["\']\d{1,3}["\']\s*\]\s*;',
        r'\1data.verses;',
        modified
    )

    # The new API uses "id" instead of "verse" for verse numbers
    modified = re.sub(r'\.verse\b', '.id', modified)

    # Skip files that weren't changed as expected
    if modified == original:
        skipped.append(js_file.name)
        continue

    # Save a backup before changing anything
    shutil.copy2(js_file, BACKUP_DIR / js_file.name)

    # Write the updated code
    js_file.write_text(modified, encoding="utf-8")
    updated.append((js_file.name, surah_number))

print("\nFinished!\n")

print(f"Updated files: {len(updated)}")
for filename, number in updated:
    print(f"  {filename} -> Surah {number}")

if skipped:
    print(f"\nSkipped files: {len(skipped)}")
    for filename in skipped:
        print(f"  {filename}")

print(f"\nBackups saved in: {BACKUP_DIR}")
