const quranContent = document.getElementsByClassName("content");

async function getQuranContent() {
  try {
    const response = await fetch(
      "https://quran-json.risanb.com/text/uthmani/chapters/80.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    const verses = data.verses;

    Array.from(quranContent).forEach((content) => {
      content.innerHTML = "";

      verses.forEach((verse) => {
        content.innerHTML +=
          `<span class="verse">${verse.text}</span>` +
          `<span class="verse-number"> (${verse.id})</span> `;
      });
    });
  } catch (error) {
    console.error("Error loading Quran content:", error);
  }
}

getQuranContent();
