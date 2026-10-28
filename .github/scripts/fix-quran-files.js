
const fs = require("fs");
const path = require("path");

const root = process.cwd();

const surahs = [
  "Al-Fatihah", "Al-Baqarah", "Al-Imran", "An-Nisa",
  "Al-Maidah", "Al-Anam", "Al-Araf", "Al-Anfal",
  "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Rad",
  "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf",
  "Maryam", "Ta-Ha", "Al-Anbiya", "Al-Hajj", "Al-Muminun",
  "An-Nur", "Al-Furqan", "Ash-Shuara", "An-Naml",
  "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman",
  "As-Sajdah", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin",
  "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat",
  "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah",
  "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf",
  "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar",
  "Ar-Rahman", "Al-Waqiah", "Al-Hadid", "Al-Mujadilah",
  "Al-Hashr", "Al-Mumtahanah", "As-Saff", "Al-Jumuah",
  "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim",
  "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Maarij",
  "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir",
  "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba",
  "An-Naziat", "Abasa", "At-Takwir", "Al-Infitar",
  "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq",
  "Al-Ala", "Al-Ghashiyah", "Al-Fajr", "Al-Balad",
  "Ash-Shams", "Al-Layl", "Ad-Duha", "Ash-Sharh",
  "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah",
  "Az-Zalzalah", "Al-Adiyat", "Al-Qariah", "At-Takathur",
  "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh",
  "Al-Maun", "Al-Kawthar", "Al-Kafirun", "An-Nasr",
  "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
];

let updated = 0;

for (const file of fs.readdirSync(root)) {
  if (!file.endsWith(".js")) continue;
  if (file.toLowerCase() === "qurancontent.js") continue;

  const surahName = path.basename(file, ".js");
  const surahNumber = surahs.findIndex(
    name => name.toLowerCase() === surahName.toLowerCase()
  ) + 1;

  if (surahNumber < 1) {
    console.log(`Skipped: ${file} (name not mapped)`);
    continue;
  }

  const fullPath = path.join(root, file);
  const original = fs.readFileSync(fullPath, "utf8");

  let modified = original.replace(
    /https:\/\/raw\.githubusercontent\.com\/risan\/quran-json\/[^"']+/g,
    `https://quran-json.risanb.com/text/uthmani/chapters/${surahNumber}.json`
  );

  modified = modified.replace(
    /https:\/\/quran-json\.risanb\.com\/text\/uthmani\/chapters\/\d+\.json/g,
    `https://quran-json.risanb.com/text/uthmani/chapters/${surahNumber}.json`
  );

  modified = modified.replace(
    /data\s*\[\s*["']\d{1,3}["']\s*\]/g,
    "data.verses"
  );

  modified = modified.replace(/\.verse\b/g, ".id");

  if (modified !== original) {
    fs.writeFileSync(fullPath, modified, "utf8");
    console.log(`Updated: ${file} -> Surah ${surahNumber}`);
    updated++;
  }
}

console.log(`Finished. Updated ${updated} files.`);
