const urn = 1; // Replace with the specific URN you want to query
const url = `https://api.sunnah.com/v1/hadiths/${urn}`;
const apiKey = "123";

fetch(url, {
  method: "GET",
  headers: {
    "X-API-Key": apiKey,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
