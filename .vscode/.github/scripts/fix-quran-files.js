
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const oldApi = "raw.githubusercontent.com/risan/quran-json";

let updated = 0;
let skipped = 0;

for (const file of fs.readdirSync(root)) {
  if (!file.endsWith(".js")) continue;
  if (file.toLowerCase() === "qurancontent.js") continue;

  const fullPath = path.join(root, file);

  if (!fs.statSync(fullPath).isFile()) continue;

  const original = fs.readFileSync(fullPath, "utf8");

  // Only modify files that still use the old API
  if (!original.includes(oldApi)) continue;

  const surahMatch = original.match(
    /data\s*\[\s*["'](\d{1,3})["']\s*\]/
  );

  if (!surahMatch) {
    console.log(`Skipped (surah number not found): ${file}`);
    skipped++;
    continue;
  }

  const surahNumber = Number(surahMatch[1]);

  if (surahNumber < 1 || surahNumber > 114) {
    console.log(`Skipped (invalid surah number): ${file}`);
    skipped++;
    continue;
  }

  let modified = original;

  // Replace old API URL
  modified = modified.replace(
    /https:\/\/raw\.githubusercontent\.com\/risan\/quran-json\/[^"']+/g,
    `https://quran-json.risanb.com/text/uthmani/chapters/${surahNumber}.json`
  );

  // Read the new API response structure
  modified = modified.replace(
    /(const|let|var)\s+(\w+)\s*=\s*data\s*\[\s*["']\d{1,3}["']\s*\]\s*;/,
    "$1 $2 = data.verses;"
  );

  // New API uses "id" for the verse number
  modified = modified.replace(/\.verse\b/g, ".id");

  if (modified === original) {
    console.log(`Skipped (pattern not matched): ${file}`);
    skipped++;
    continue;
  }

  fs.writeFileSync(fullPath, modified, "utf8");
  console.log(`Updated: ${file} -> surah ${surahNumber}`);
  updated++;
}

console.log(`\nFinished. Updated: ${updated}, skipped: ${skipped}`);
