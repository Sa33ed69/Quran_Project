async function azkar() {
  const response = await fetch(
    "https://raw.githubusercontent.com/rn0x/Adhkar-json/refs/heads/main/adhkar.json"
  );
  const data = await response.json();
  data.map((inner) => {
    inner.array.map((item) => {
      console.log(
        `Id: ${inner.id}, Category: ${inner.category}, Text: ${item.text}, audio ${item.audio}`
      );
      const container = document.querySelector("#ff");
      container.innerHTML += `
      <div>
        <h4>Id: ${inner.id}</h4>
        <p>Category: ${inner.category}</p>
        <p>Text: ${item.text}</p>
        <hr>
      </div>
    `;
    });
  });
}
azkar();
