async function getQuranContent(surahNumber) {
  const quranContent = document.getElementsByClassName("content");

  try {
    const response = await fetch(
      `https://quran-json.risanb.com/text/uthmani/chapters/${surahNumber}.json`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    Array.from(quranContent).forEach((content) => {
      content.innerHTML = data.verses
        .map(
          (verse) =>
            `<span class="verse">${verse.text}</span>` +
            `<span class="verse-number"> (${verse.id})</span> `
        )
        .join("");
    });
  } catch (error) {
    console.error("Error loading Quran content:", error);
  }
}
