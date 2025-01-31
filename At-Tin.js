const quranContent = document.getElementsByClassName("content");

async function getQuranContent() {
  const response = await fetch(
    "https://raw.githubusercontent.com/risan/quran-json/refs/heads/main/data/quran.json"
  );
  const data = await response.json();

  const chapter1 = data["95"];

  Array.from(quranContent).forEach((content) => {
    content.innerHTML = "";
    chapter1.forEach((n) => {
      content.innerHTML += `<span class="verse">${n.text}</span><span class="verse-number"> (${n.verse})</span> `;
    });
  });
}
getQuranContent();
