const quranContent = document.getElementsByClassName("content");

async function getQuranContent() {
  const response = await fetch(
    "https://quran-json.risanb.com/text/uthmani/chapters/69.json"
  );
  const data = await response.json();

  const chapter1 = data.verses;

  Array.from(quranContent).forEach((content) => {
    content.innerHTML = "";
    chapter1.forEach((n) => {
      content.innerHTML += `<span class="verse">${n.text}</span><span class="verse-number"> (${n.id})</span> `;
    });
  });
}
getQuranContent();
