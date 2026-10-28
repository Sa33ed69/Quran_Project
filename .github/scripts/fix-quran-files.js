
const fs = require("fs");
const path = require("path");

const root = process.cwd();
let updated = 0;

for (const file of fs.readdirSync(root)) {
  if (!file.endsWith(".js")) continue;
  if (file.toLowerCase() === "qurancontent.js") continue;

  const fullPath = path.join(root, file);
  if (!fs.statSync(fullPath).isFile()) continue;

  const original = fs.readFileSync(fullPath, "utf8");

  // رقم السورة الموجود في رابط الـ API الحالي
  const match = original.match(
    /chapters\/(\d+)\.json/
  );

  if (!match) {
    console.log(`Skipped: ${file} - no chapter number found`);
    continue;
  }

  const surahNumber = Number(match[1]);

  const modified = original.replace(
    /chapters\/\d+\.json/g,
    `chapters/${surahNumber}.json`
  );

  if (modified !== original) {
    fs.writeFileSync(fullPath, modified, "utf8");
    console.log(`Updated: ${file} -> Surah ${surahNumber}`);
    updated++;
  }
}

console.log(`Finished. Updated ${updated} files.`);
