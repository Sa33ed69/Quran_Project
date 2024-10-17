// async function lll() {
//   const city = "Cairo";
//   const country = "Egypt";
//   const method = 8;
//   const today = new Date();
//   const date = `${today.getDate()}-${
//     today.getMonth() + 1
//   }-${today.getFullYear()}`;
//   const response = await fetch(
//     `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&method=${method}`
//   );
//   const data = await response.json();
//   const container = document.querySelector("#ff");

//   const timings = data.data.timings;
//   const div = 12;

//   document.getElementById("fajr").innerText = `Fajr: ${timings.Fajr}`;
//   document.getElementById("dhuhr").innerText = `Dhuhr: ${timings.Dhuhr}`;
//   document.getElementById("asr").innerText = `Asr: ${
//     parseFloat(timings.Asr) - div
//   }`;
//   document.getElementById("maghrib").innerText = `Maghrib: ${
//     parseFloat(timings.Maghrib) - div
//   }`;
//   document.getElementById("isha").innerText = `Isha: ${
//     parseFloat(timings.Isha) - div
//   }`;
//   document.getElementById(
//     "date"
//   ).innerText = `today is: ${data.data.date.readable}`;
//   document.getElementById(
//     "day"
//   ).innerText = `day is: ${data.data.date.hijri.weekday.ar}`;
// }
// function ll() {
//   lll();
//   setInterval(lll, 86400000);
// }
// ll();

async function radio() {
  const audioPlayer = document.getElementById("quran-audio");
  const response = await fetch("https://data-rosy.vercel.app/radio.json");
  const data = await response.json();
  const h1 = document.getElementById("h1");
  const h2 = document.getElementById("h2");
  const h3 = document.getElementById("h3");
  const h4 = document.getElementById("h4");
  const h5 = document.getElementById("h5");
  const h6 = document.getElementById("h6");
  const h7 = document.getElementById("h7");
  const h8 = document.getElementById("h8");
  const h9 = document.getElementById("h9");
  const h10 = document.getElementById("h10");
  const h11 = document.getElementById("h11");
  const h12 = document.getElementById("h12");
  const h13 = document.getElementById("h13");
  const h14 = document.getElementById("h14");
  const h15 = document.getElementById("h15");
  const h16 = document.getElementById("h16");
  const h17 = document.getElementById("h17");
  const h18 = document.getElementById("h18");
  const h19 = document.getElementById("h19");
  const h20 = document.getElementById("h20");
  const h21 = document.getElementById("h21");
  const h22 = document.getElementById("h22");
  const h23 = document.getElementById("h23");
  const h24 = document.getElementById("h24");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");
  const btn8 = document.getElementById("btn8");
  const btn9 = document.getElementById("btn9");
  const btn10 = document.getElementById("btn10");
  const btn11 = document.getElementById("btn11");
  const btn12 = document.getElementById("btn12");
  const btn13 = document.getElementById("btn13");
  const btn14 = document.getElementById("btn14");
  const btn15 = document.getElementById("btn15");
  const btn16 = document.getElementById("btn16");
  const btn17 = document.getElementById("btn17");
  const btn18 = document.getElementById("btn18");
  const btn19 = document.getElementById("btn19");
  const btn20 = document.getElementById("btn20");
  const btn21 = document.getElementById("btn21");
  const btn22 = document.getElementById("btn22");
  const btn23 = document.getElementById("btn23");
  const btn24 = document.getElementById("btn24");
  const allData = data["radios"];
  allData.map((inner) => {
    h1.innerText = allData[0].name;
    h2.innerText = allData[1].name;
    h3.innerText = allData[2].name;
    h4.innerText = allData[3].name;
    h5.innerText = allData[4].name;
    h6.innerText = allData[5].name;
    h7.innerText = allData[6].name;
    h8.innerText = allData[7].name;
    h9.innerText = allData[8].name;
    h10.innerText = allData[9].name;
    h11.innerText = allData[10].name;
    h12.innerText = allData[11].name;
    h13.innerText = allData[12].name;
    h14.innerText = allData[13].name;
    h15.innerText = allData[14].name;
    h16.innerText = allData[15].name;
    h17.innerText = allData[16].name;
    h18.innerText = allData[17].name;
    h19.innerText = allData[18].name;
    h20.innerText = allData[19].name;
    h21.innerText = allData[20].name;
    h22.innerText = allData[21].name;
    h23.innerText = allData[22].name;
    h24.innerText = allData[23].name;
    const audioUrl = allData[0].url;
    const audioUrl2 = allData[1].url;
    const audioUrl3 = allData[2].url;
    const audioUrl4 = allData[3].url;
    const audioUrl5 = allData[4].url;
    const audioUrl6 = allData[5].url;
    const audioUrl7 = allData[6].url;
    const audioUrl8 = allData[7].url;
    const audioUrl9 = allData[8].url;
    const audioUrl10 = allData[9].url;
    const audioUrl11 = allData[10].url;
    const audioUrl12 = allData[11].url;
    const audioUrl13 = allData[12].url;
    const audioUrl14 = allData[13].url;
    const audioUrl15 = allData[14].url;
    const audioUrl16 = allData[15].url;
    const audioUrl17 = allData[16].url;
    const audioUrl18 = allData[17].url;
    const audioUrl19 = allData[18].url;
    const audioUrl20 = allData[19].url;
    const audioUrl21 = allData[20].url;
    const audioUrl22 = allData[21].url;
    const audioUrl23 = allData[22].url;
    const audioUrl24 = allData[23].url;
    const suranName = document.getElementById("surah-name");
    if (btn1 && audioUrl) {
      btn1.addEventListener("click", function () {
        audioPlayer.src = audioUrl;
        audioPlayer.play();
        suranName.innerText = h1.innerText;
      });
    }
    if (btn2 && audioUrl2) {
      btn2.addEventListener("click", function () {
        audioPlayer.src = audioUrl2;
        audioPlayer.play();
        suranName.innerText = h2.innerText;
      });
    }
    if (btn3 && audioUrl3) {
      btn3.addEventListener("click", function () {
        audioPlayer.src = audioUrl3;
        audioPlayer.play();
        suranName.innerText = h3.innerText;
      });
    }
    if (btn4 && audioUrl4) {
      btn4.addEventListener("click", function () {
        audioPlayer.src = audioUrl4;
        audioPlayer.play();
        suranName.innerText = h4.innerText;
      });
    }
    if (btn5 && audioUrl5) {
      btn5.addEventListener("click", function () {
        audioPlayer.src = audioUrl5;
        audioPlayer.play();
        suranName.innerText = h5.innerText;
      });
    }
    if (btn6 && audioUrl6) {
      btn6.addEventListener("click", function () {
        audioPlayer.src = audioUrl6;
        audioPlayer.play();
        suranName.innerText = h6.innerText;
      });
    }
    if (btn7 && audioUrl7) {
      btn7.addEventListener("click", function () {
        audioPlayer.src = audioUrl7;
        audioPlayer.play();
        suranName.innerText = h7.innerText;
      });
    }
    if (btn8 && audioUrl8) {
      btn8.addEventListener("click", function () {
        audioPlayer.src = audioUrl8;
        audioPlayer.play();
        suranName.innerText = h8.innerText;
      });
    }
    if (btn9 && audioUrl9) {
      btn9.addEventListener("click", function () {
        audioPlayer.src = audioUrl9;
        audioPlayer.play();
        suranName.innerText = h9.innerText;
      });
    }
    if (btn10 && audioUrl10) {
      btn10.addEventListener("click", function () {
        audioPlayer.src = audioUrl10;
        audioPlayer.play();
        suranName.innerText = h10.innerText;
      });
    }
    if (btn11 && audioUrl11) {
      btn11.addEventListener("click", function () {
        audioPlayer.src = audioUrl11;
        audioPlayer.play();
        suranName.innerText = h11.innerText;
      });
    }
    if (btn12 && audioUrl12) {
      btn12.addEventListener("click", function () {
        audioPlayer.src = audioUrl12;
        audioPlayer.play();
        suranName.innerText = h12.innerText;
      });
    }
    if (btn13 && audioUrl13) {
      btn13.addEventListener("click", function () {
        audioPlayer.src = audioUrl13;
        audioPlayer.play();
        suranName.innerText = h13.innerText;
      });
    }
    if (btn14 && audioUrl14) {
      btn14.addEventListener("click", function () {
        audioPlayer.src = audioUrl14;
        audioPlayer.play();
        suranName.innerText = h14.innerText;
      });
    }
    if (btn15 && audioUrl15) {
      btn15.addEventListener("click", function () {
        audioPlayer.src = audioUrl15;
        audioPlayer.play();
        suranName.innerText = h15.innerText;
      });
    }
    if (btn16 && audioUrl16) {
      btn16.addEventListener("click", function () {
        audioPlayer.src = audioUrl16;
        audioPlayer.play();
        suranName.innerText = h16.innerText;
      });
    }
    if (btn17 && audioUrl17) {
      btn17.addEventListener("click", function () {
        audioPlayer.src = audioUrl17;
        audioPlayer.play();
        suranName.innerText = h17.innerText;
      });
    }
    if (btn18 && audioUrl18) {
      btn18.addEventListener("click", function () {
        audioPlayer.src = audioUrl18;
        audioPlayer.play();
        suranName.innerText = h18.innerText;
      });
    }
    if (btn19 && audioUrl19) {
      btn19.addEventListener("click", function () {
        audioPlayer.src = audioUrl19;
        audioPlayer.play();
        suranName.innerText = h19.innerText;
      });
    }
    if (btn20 && audioUrl20) {
      btn20.addEventListener("click", function () {
        audioPlayer.src = audioUrl20;
        audioPlayer.play();
        suranName.innerText = h20.innerText;
      });
    }
    if (btn21 && audioUrl21) {
      btn21.addEventListener("click", function () {
        audioPlayer.src = audioUrl21;
        audioPlayer.play();
        suranName.innerText = h21.innerText;
      });
    }
    if (btn22 && audioUrl22) {
      btn22.addEventListener("click", function () {
        audioPlayer.src = audioUrl22;
        audioPlayer.play();
        suranName.innerText = h22.innerText;
      });
    }
    if (btn23 && audioUrl23) {
      btn23.addEventListener("click", function () {
        audioPlayer.src = audioUrl23;
        audioPlayer.play();
        suranName.innerText = h23.innerText;
      });
    }
    if (btn24 && audioUrl24) {
      btn24.addEventListener("click", function () {
        audioPlayer.src = audioUrl24;
        audioPlayer.play();
        suranName.innerText = h24.innerText;
      });
    }
  });
}
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  let query = searchInput.value.toLowerCase();

  query = query.replace(/ه/g, "ة").replace(/لأ/g, "لا").replace(/ا/g, "آ");

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    let surahName = button.querySelector("h5").textContent.toLowerCase();
    surahName = surahName
      .replace(/ه/g, "ة")
      .replace(/لأ/g, "لا")
      .replace(/ا/g, "آ");

    if (surahName.includes(query)) {
      button.parentElement.style.display = "block";
    } else {
      button.parentElement.style.display = "none";
    }
  });
});

radio();
