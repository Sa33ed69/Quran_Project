async function fetchSurahAudio() {
  const audioPlayer = document.getElementById("quran-audio");

  for (let surahId = 1; surahId <= 114; surahId++) {
    const response = await fetch(
      `https://api.quran.com/api/v4/chapter_recitations/60`
    );

    const data = await response.json();
    if (data.audio_files && data.audio_files.length > 0) {
      const audioUrl = data.audio_files[0]?.audio_url;
      const audioUrl2 = data.audio_files[1]?.audio_url;
      const audioUrl3 = data.audio_files[2]?.audio_url;
      const audioUrl4 = data.audio_files[3]?.audio_url;
      const audioUrl5 = data.audio_files[4]?.audio_url;
      const audioUrl6 = data.audio_files[5]?.audio_url;
      const audioUrl7 = data.audio_files[6]?.audio_url;
      const audioUrl8 = data.audio_files[7]?.audio_url;
      const audioUrl9 = data.audio_files[8]?.audio_url;
      const audioUrl10 = data.audio_files[9]?.audio_url;
      const audioUrl11 = data.audio_files[10]?.audio_url;
      const audioUrl12 = data.audio_files[11]?.audio_url;
      const audioUrl13 = data.audio_files[12]?.audio_url;
      const audioUrl14 = data.audio_files[13]?.audio_url;
      const audioUrl15 = data.audio_files[14]?.audio_url;
      const audioUrl16 = data.audio_files[15]?.audio_url;
      const audioUrl17 = data.audio_files[16]?.audio_url;
      const audioUrl18 = data.audio_files[17]?.audio_url;
      const audioUrl19 = data.audio_files[18]?.audio_url;
      const audioUrl20 = data.audio_files[19]?.audio_url;
      const audioUrl21 = data.audio_files[20]?.audio_url;
      const audioUrl22 = data.audio_files[21]?.audio_url;
      const audioUrl23 = data.audio_files[22]?.audio_url;
      const audioUrl24 = data.audio_files[23]?.audio_url;
      const audioUrl25 = data.audio_files[24]?.audio_url;
      const audioUrl26 = data.audio_files[25]?.audio_url;
      const audioUrl27 = data.audio_files[26]?.audio_url;
      const audioUrl28 = data.audio_files[27]?.audio_url;
      const audioUrl29 = data.audio_files[28]?.audio_url;
      const audioUrl30 = data.audio_files[29]?.audio_url;
      const audioUrl31 = data.audio_files[30]?.audio_url;
      const audioUrl32 = data.audio_files[31]?.audio_url;
      const audioUrl33 = data.audio_files[32]?.audio_url;
      const audioUrl34 = data.audio_files[33]?.audio_url;
      const audioUrl35 = data.audio_files[34]?.audio_url;
      const audioUrl36 = data.audio_files[35]?.audio_url;
      const audioUrl37 = data.audio_files[36]?.audio_url;
      const audioUrl38 = data.audio_files[37]?.audio_url;
      const audioUrl39 = data.audio_files[38]?.audio_url;
      const audioUrl40 = data.audio_files[39]?.audio_url;
      const audioUrl41 = data.audio_files[40]?.audio_url;
      const audioUrl42 = data.audio_files[41]?.audio_url;
      const audioUrl43 = data.audio_files[42]?.audio_url;
      const audioUrl44 = data.audio_files[43]?.audio_url;
      const audioUrl45 = data.audio_files[44]?.audio_url;
      const audioUrl46 = data.audio_files[45]?.audio_url;
      const audioUrl47 = data.audio_files[46]?.audio_url;
      const audioUrl48 = data.audio_files[47]?.audio_url;
      const audioUrl49 = data.audio_files[48]?.audio_url;
      const audioUrl50 = data.audio_files[49]?.audio_url;
      const audioUrl51 = data.audio_files[50]?.audio_url;
      const audioUrl52 = data.audio_files[51]?.audio_url;
      const audioUrl53 = data.audio_files[52]?.audio_url;
      const audioUrl54 = data.audio_files[53]?.audio_url;
      const audioUrl55 = data.audio_files[54]?.audio_url;
      const audioUrl56 = data.audio_files[55]?.audio_url;
      const audioUrl57 = data.audio_files[56]?.audio_url;
      const audioUrl58 = data.audio_files[57]?.audio_url;
      const audioUrl59 = data.audio_files[58]?.audio_url;
      const audioUrl60 = data.audio_files[59]?.audio_url;
      const audioUrl61 = data.audio_files[60]?.audio_url;
      const audioUrl62 = data.audio_files[61]?.audio_url;
      const audioUrl63 = data.audio_files[62]?.audio_url;
      const audioUrl64 = data.audio_files[63]?.audio_url;
      const audioUrl65 = data.audio_files[64]?.audio_url;
      const audioUrl66 = data.audio_files[65]?.audio_url;
      const audioUrl67 = data.audio_files[66]?.audio_url;
      const audioUrl68 = data.audio_files[67]?.audio_url;
      const audioUrl69 = data.audio_files[68]?.audio_url;
      const audioUrl70 = data.audio_files[69]?.audio_url;
      const audioUrl71 = data.audio_files[70]?.audio_url;
      const audioUrl72 = data.audio_files[71]?.audio_url;
      const audioUrl73 = data.audio_files[72]?.audio_url;
      const audioUrl74 = data.audio_files[73]?.audio_url;
      const audioUrl75 = data.audio_files[74]?.audio_url;
      const audioUrl76 = data.audio_files[75]?.audio_url;
      const audioUrl77 = data.audio_files[76]?.audio_url;
      const audioUrl78 = data.audio_files[77]?.audio_url;
      const audioUrl79 = data.audio_files[78]?.audio_url;
      const audioUrl80 = data.audio_files[79]?.audio_url;
      const audioUrl81 = data.audio_files[80]?.audio_url;
      const audioUrl82 = data.audio_files[81]?.audio_url;
      const audioUrl83 = data.audio_files[82]?.audio_url;
      const audioUrl84 = data.audio_files[83]?.audio_url;
      const audioUrl85 = data.audio_files[84]?.audio_url;
      const audioUrl86 = data.audio_files[85]?.audio_url;
      const audioUrl87 = data.audio_files[86]?.audio_url;
      const audioUrl88 = data.audio_files[87]?.audio_url;
      const audioUrl89 = data.audio_files[88]?.audio_url;
      const audioUrl90 = data.audio_files[89]?.audio_url;
      const audioUrl91 = data.audio_files[90]?.audio_url;
      const audioUrl92 = data.audio_files[91]?.audio_url;
      const audioUrl93 = data.audio_files[92]?.audio_url;
      const audioUrl94 = data.audio_files[93]?.audio_url;
      const audioUrl95 = data.audio_files[94]?.audio_url;
      const audioUrl96 = data.audio_files[95]?.audio_url;
      const audioUrl97 = data.audio_files[96]?.audio_url;
      const audioUrl98 = data.audio_files[97]?.audio_url;
      const audioUrl99 = data.audio_files[98]?.audio_url;
      const audioUrl100 = data.audio_files[99]?.audio_url;
      const audioUrl101 = data.audio_files[100]?.audio_url;
      const audioUrl102 = data.audio_files[101]?.audio_url;
      const audioUrl103 = data.audio_files[102]?.audio_url;
      const audioUrl104 = data.audio_files[103]?.audio_url;
      const audioUrl105 = data.audio_files[104]?.audio_url;
      const audioUrl106 = data.audio_files[105]?.audio_url;
      const audioUrl107 = data.audio_files[106]?.audio_url;
      const audioUrl108 = data.audio_files[107]?.audio_url;
      const audioUrl109 = data.audio_files[108]?.audio_url;
      const audioUrl110 = data.audio_files[109]?.audio_url;
      const audioUrl111 = data.audio_files[110]?.audio_url;
      const audioUrl112 = data.audio_files[111]?.audio_url;
      const audioUrl113 = data.audio_files[112]?.audio_url;
      const audioUrl114 = data.audio_files[113]?.audio_url;

      const button = document.querySelector(`#btn1:nth-child(${surahId})`);
      const button2 = document.querySelector(`#btn2:nth-child(${surahId})`);
      const button3 = document.querySelector(`#btn3:nth-child(${surahId})`);
      const button4 = document.querySelector(`#btn4:nth-child(${surahId})`);
      const button5 = document.querySelector(`#btn5:nth-child(${surahId})`);
      const button6 = document.querySelector(`#btn6:nth-child(${surahId})`);
      const button7 = document.querySelector(`#btn7:nth-child(${surahId})`);
      const button8 = document.querySelector(`#btn8:nth-child(${surahId})`);
      const button9 = document.querySelector(`#btn9:nth-child(${surahId})`);
      const button10 = document.querySelector(`#btn10:nth-child(${surahId})`);
      const button11 = document.querySelector(`#btn11:nth-child(${surahId})`);
      const button12 = document.querySelector(`#btn12:nth-child(${surahId})`);
      const button13 = document.querySelector(`#btn13:nth-child(${surahId})`);
      const button14 = document.querySelector(`#btn14:nth-child(${surahId})`);
      const button15 = document.querySelector(`#btn15:nth-child(${surahId})`);
      const button16 = document.querySelector(`#btn16:nth-child(${surahId})`);
      const button17 = document.querySelector(`#btn17:nth-child(${surahId})`);
      const button18 = document.querySelector(`#btn18:nth-child(${surahId})`);
      const button19 = document.querySelector(`#btn19:nth-child(${surahId})`);
      const button20 = document.querySelector(`#btn20:nth-child(${surahId})`);
      const button21 = document.querySelector(`#btn21:nth-child(${surahId})`);
      const button22 = document.querySelector(`#btn22:nth-child(${surahId})`);
      const button23 = document.querySelector(`#btn23:nth-child(${surahId})`);
      const button24 = document.querySelector(`#btn24:nth-child(${surahId})`);
      const button25 = document.querySelector(`#btn25:nth-child(${surahId})`);
      const button26 = document.querySelector(`#btn26:nth-child(${surahId})`);
      const button27 = document.querySelector(`#btn27:nth-child(${surahId})`);
      const button28 = document.querySelector(`#btn28:nth-child(${surahId})`);
      const button29 = document.querySelector(`#btn29:nth-child(${surahId})`);
      const button30 = document.querySelector(`#btn30:nth-child(${surahId})`);
      const button31 = document.querySelector(`#btn31:nth-child(${surahId})`);
      const button32 = document.querySelector(`#btn32:nth-child(${surahId})`);
      const button33 = document.querySelector(`#btn33:nth-child(${surahId})`);
      const button34 = document.querySelector(`#btn34:nth-child(${surahId})`);
      const button35 = document.querySelector(`#btn35:nth-child(${surahId})`);
      const button36 = document.querySelector(`#btn36:nth-child(${surahId})`);
      const button37 = document.querySelector(`#btn37:nth-child(${surahId})`);
      const button38 = document.querySelector(`#btn38:nth-child(${surahId})`);
      const button39 = document.querySelector(`#btn39:nth-child(${surahId})`);
      const button40 = document.querySelector(`#btn40:nth-child(${surahId})`);
      const button41 = document.querySelector(`#btn41:nth-child(${surahId})`);
      const button42 = document.querySelector(`#btn42:nth-child(${surahId})`);
      const button43 = document.querySelector(`#btn43:nth-child(${surahId})`);
      const button44 = document.querySelector(`#btn44:nth-child(${surahId})`);
      const button45 = document.querySelector(`#btn45:nth-child(${surahId})`);
      const button46 = document.querySelector(`#btn46:nth-child(${surahId})`);
      const button47 = document.querySelector(`#btn47:nth-child(${surahId})`);
      const button48 = document.querySelector(`#btn48:nth-child(${surahId})`);
      const button49 = document.querySelector(`#btn49:nth-child(${surahId})`);
      const button50 = document.querySelector(`#btn50:nth-child(${surahId})`);
      const button51 = document.querySelector(`#btn51:nth-child(${surahId})`);
      const button52 = document.querySelector(`#btn52:nth-child(${surahId})`);
      const button53 = document.querySelector(`#btn53:nth-child(${surahId})`);
      const button54 = document.querySelector(`#btn54:nth-child(${surahId})`);
      const button55 = document.querySelector(`#btn55:nth-child(${surahId})`);
      const button56 = document.querySelector(`#btn56:nth-child(${surahId})`);
      const button57 = document.querySelector(`#btn57:nth-child(${surahId})`);
      const button58 = document.querySelector(`#btn58:nth-child(${surahId})`);
      const button59 = document.querySelector(`#btn59:nth-child(${surahId})`);
      const button60 = document.querySelector(`#btn60:nth-child(${surahId})`);
      const button61 = document.querySelector(`#btn61:nth-child(${surahId})`);
      const button62 = document.querySelector(`#btn62:nth-child(${surahId})`);
      const button63 = document.querySelector(`#btn63:nth-child(${surahId})`);
      const button64 = document.querySelector(`#btn64:nth-child(${surahId})`);
      const button65 = document.querySelector(`#btn65:nth-child(${surahId})`);
      const button66 = document.querySelector(`#btn66:nth-child(${surahId})`);
      const button67 = document.querySelector(`#btn67:nth-child(${surahId})`);
      const button68 = document.querySelector(`#btn68:nth-child(${surahId})`);
      const button69 = document.querySelector(`#btn69:nth-child(${surahId})`);
      const button70 = document.querySelector(`#btn70:nth-child(${surahId})`);
      const button71 = document.querySelector(`#btn71:nth-child(${surahId})`);
      const button72 = document.querySelector(`#btn72:nth-child(${surahId})`);
      const button73 = document.querySelector(`#btn73:nth-child(${surahId})`);
      const button74 = document.querySelector(`#btn74:nth-child(${surahId})`);
      const button75 = document.querySelector(`#btn75:nth-child(${surahId})`);
      const button76 = document.querySelector(`#btn76:nth-child(${surahId})`);
      const button77 = document.querySelector(`#btn77:nth-child(${surahId})`);
      const button78 = document.querySelector(`#btn78:nth-child(${surahId})`);
      const button79 = document.querySelector(`#btn79:nth-child(${surahId})`);
      const button80 = document.querySelector(`#btn80:nth-child(${surahId})`);
      const button81 = document.querySelector(`#btn81:nth-child(${surahId})`);
      const button82 = document.querySelector(`#btn82:nth-child(${surahId})`);
      const button83 = document.querySelector(`#btn83:nth-child(${surahId})`);
      const button84 = document.querySelector(`#btn84:nth-child(${surahId})`);
      const button85 = document.querySelector(`#btn85:nth-child(${surahId})`);
      const button86 = document.querySelector(`#btn86:nth-child(${surahId})`);
      const button87 = document.querySelector(`#btn87:nth-child(${surahId})`);
      const button88 = document.querySelector(`#btn88:nth-child(${surahId})`);
      const button89 = document.querySelector(`#btn89:nth-child(${surahId})`);
      const button90 = document.querySelector(`#btn90:nth-child(${surahId})`);
      const button91 = document.querySelector(`#btn91:nth-child(${surahId})`);
      const button92 = document.querySelector(`#btn92:nth-child(${surahId})`);
      const button93 = document.querySelector(`#btn93:nth-child(${surahId})`);
      const button94 = document.querySelector(`#btn94:nth-child(${surahId})`);
      const button95 = document.querySelector(`#btn95:nth-child(${surahId})`);
      const button96 = document.querySelector(`#btn96:nth-child(${surahId})`);
      const button97 = document.querySelector(`#btn97:nth-child(${surahId})`);
      const button98 = document.querySelector(`#btn98:nth-child(${surahId})`);
      const button99 = document.querySelector(`#btn99:nth-child(${surahId})`);
      const button100 = document.querySelector(`#btn100:nth-child(${surahId})`);
      const button101 = document.querySelector(`#btn101:nth-child(${surahId})`);
      const button102 = document.querySelector(`#btn102:nth-child(${surahId})`);
      const button103 = document.querySelector(`#btn103:nth-child(${surahId})`);
      const button104 = document.querySelector(`#btn104:nth-child(${surahId})`);
      const button105 = document.querySelector(`#btn105:nth-child(${surahId})`);
      const button106 = document.querySelector(`#btn106:nth-child(${surahId})`);
      const button107 = document.querySelector(`#btn107:nth-child(${surahId})`);
      const button108 = document.querySelector(`#btn108:nth-child(${surahId})`);
      const button109 = document.querySelector(`#btn109:nth-child(${surahId})`);
      const button110 = document.querySelector(`#btn110:nth-child(${surahId})`);
      const button111 = document.querySelector(`#btn111:nth-child(${surahId})`);
      const button112 = document.querySelector(`#btn112:nth-child(${surahId})`);
      const button113 = document.querySelector(`#btn113:nth-child(${surahId})`);
      const button114 = document.querySelector(`#btn114:nth-child(${surahId})`);

      const surahNameElement = document.getElementById("h1");
      const surahNameElement2 = document.getElementById("h2");
      const surahNameElement3 = document.getElementById("h3");
      const surahNameElement4 = document.getElementById("h4");
      const surahNameElement5 = document.getElementById("h5");
      const surahNameElement6 = document.getElementById("h6");
      const surahNameElement7 = document.getElementById("h7");
      const surahNameElement8 = document.getElementById("h8");
      const surahNameElement9 = document.getElementById("h9");
      const surahNameElement10 = document.getElementById("h10");
      const surahNameElement11 = document.getElementById("h11");
      const surahNameElement12 = document.getElementById("h12");
      const surahNameElement13 = document.getElementById("h13");
      const surahNameElement14 = document.getElementById("h14");
      const surahNameElement15 = document.getElementById("h15");
      const surahNameElement16 = document.getElementById("h16");
      const surahNameElement17 = document.getElementById("h17");
      const surahNameElement18 = document.getElementById("h18");
      const surahNameElement19 = document.getElementById("h19");
      const surahNameElement20 = document.getElementById("h20");
      const surahNameElement21 = document.getElementById("h21");
      const surahNameElement22 = document.getElementById("h22");
      const surahNameElement23 = document.getElementById("h23");
      const surahNameElement24 = document.getElementById("h24");
      const surahNameElement25 = document.getElementById("h25");
      const surahNameElement26 = document.getElementById("h26");
      const surahNameElement27 = document.getElementById("h27");
      const surahNameElement28 = document.getElementById("h28");
      const surahNameElement29 = document.getElementById("h29");
      const surahNameElement30 = document.getElementById("h30");
      const surahNameElement31 = document.getElementById("h31");
      const surahNameElement32 = document.getElementById("h32");
      const surahNameElement33 = document.getElementById("h33");
      const surahNameElement34 = document.getElementById("h34");
      const surahNameElement35 = document.getElementById("h35");
      const surahNameElement36 = document.getElementById("h36");
      const surahNameElement37 = document.getElementById("h37");
      const surahNameElement38 = document.getElementById("h38");
      const surahNameElement39 = document.getElementById("h39");
      const surahNameElement40 = document.getElementById("h40");
      const surahNameElement41 = document.getElementById("h41");
      const surahNameElement42 = document.getElementById("h42");
      const surahNameElement43 = document.getElementById("h43");
      const surahNameElement44 = document.getElementById("h44");
      const surahNameElement45 = document.getElementById("h45");
      const surahNameElement46 = document.getElementById("h46");
      const surahNameElement47 = document.getElementById("h47");
      const surahNameElement48 = document.getElementById("h48");
      const surahNameElement49 = document.getElementById("h49");
      const surahNameElement50 = document.getElementById("h50");
      const surahNameElement51 = document.getElementById("h51");
      const surahNameElement52 = document.getElementById("h52");
      const surahNameElement53 = document.getElementById("h53");
      const surahNameElement54 = document.getElementById("h54");
      const surahNameElement55 = document.getElementById("h55");
      const surahNameElement56 = document.getElementById("h56");
      const surahNameElement57 = document.getElementById("h57");
      const surahNameElement58 = document.getElementById("h58");
      const surahNameElement59 = document.getElementById("h59");
      const surahNameElement60 = document.getElementById("h60");
      const surahNameElement61 = document.getElementById("h61");
      const surahNameElement62 = document.getElementById("h62");
      const surahNameElement63 = document.getElementById("h63");
      const surahNameElement64 = document.getElementById("h64");
      const surahNameElement65 = document.getElementById("h65");
      const surahNameElement66 = document.getElementById("h66");
      const surahNameElement67 = document.getElementById("h67");
      const surahNameElement68 = document.getElementById("h68");
      const surahNameElement69 = document.getElementById("h69");
      const surahNameElement70 = document.getElementById("h70");
      const surahNameElement71 = document.getElementById("h71");
      const surahNameElement72 = document.getElementById("h72");
      const surahNameElement73 = document.getElementById("h73");
      const surahNameElement74 = document.getElementById("h74");
      const surahNameElement75 = document.getElementById("h75");
      const surahNameElement76 = document.getElementById("h76");
      const surahNameElement77 = document.getElementById("h77");
      const surahNameElement78 = document.getElementById("h78");
      const surahNameElement79 = document.getElementById("h79");
      const surahNameElement80 = document.getElementById("h80");
      const surahNameElement81 = document.getElementById("h81");
      const surahNameElement82 = document.getElementById("h82");
      const surahNameElement83 = document.getElementById("h83");
      const surahNameElement84 = document.getElementById("h84");
      const surahNameElement85 = document.getElementById("h85");
      const surahNameElement86 = document.getElementById("h86");
      const surahNameElement87 = document.getElementById("h87");
      const surahNameElement88 = document.getElementById("h88");
      const surahNameElement89 = document.getElementById("h89");
      const surahNameElement90 = document.getElementById("h90");
      const surahNameElement91 = document.getElementById("h91");
      const surahNameElement92 = document.getElementById("h92");
      const surahNameElement93 = document.getElementById("h93");
      const surahNameElement94 = document.getElementById("h94");
      const surahNameElement95 = document.getElementById("h95");
      const surahNameElement96 = document.getElementById("h96");
      const surahNameElement97 = document.getElementById("h97");
      const surahNameElement98 = document.getElementById("h98");
      const surahNameElement99 = document.getElementById("h99");
      const surahNameElement100 = document.getElementById("h100");
      const surahNameElement101 = document.getElementById("h101");
      const surahNameElement102 = document.getElementById("h102");
      const surahNameElement103 = document.getElementById("h103");
      const surahNameElement104 = document.getElementById("h104");
      const surahNameElement105 = document.getElementById("h105");
      const surahNameElement106 = document.getElementById("h106");
      const surahNameElement107 = document.getElementById("h107");
      const surahNameElement108 = document.getElementById("h108");
      const surahNameElement109 = document.getElementById("h109");
      const surahNameElement110 = document.getElementById("h110");
      const surahNameElement111 = document.getElementById("h111");
      const surahNameElement112 = document.getElementById("h112");
      const surahNameElement113 = document.getElementById("h113");
      const surahNameElement114 = document.getElementById("h114");

      const suranName = document.getElementById("surah-name");
      // Add event listeners to the buttons safely
      if (button && audioUrl) {
        button.addEventListener("click", function () {
          audioPlayer.src = audioUrl;
          audioPlayer.play();
          suranName.innerText = surahNameElement.innerText;
        });
      }

      if (button2 && audioUrl2) {
        button2.addEventListener("click", function () {
          audioPlayer.src = audioUrl2;
          audioPlayer.play();
          suranName.innerText = surahNameElement2.innerText;
        });
      }

      if (button3 && audioUrl3) {
        button3.addEventListener("click", function () {
          audioPlayer.src = audioUrl3;
          audioPlayer.play();
          suranName.innerText = surahNameElement3.innerText;
        });
      }

      if (button4 && audioUrl4) {
        button4.addEventListener("click", function () {
          audioPlayer.src = audioUrl4;
          audioPlayer.play();
          suranName.innerText = surahNameElement4.innerText;
        });
      }
      if (button5 && audioUrl5) {
        button5.addEventListener("click", function () {
          audioPlayer.src = audioUrl5;
          audioPlayer.play();
          suranName.innerText = surahNameElement5.innerText;
        });
      }
      if (button6 && audioUrl6) {
        button6.addEventListener("click", function () {
          audioPlayer.src = audioUrl6;
          audioPlayer.play();
          suranName.innerText = surahNameElement6.innerText;
        });
      }
      if (button7 && audioUrl7) {
        button7.addEventListener("click", function () {
          audioPlayer.src = audioUrl7;
          audioPlayer.play();
          suranName.innerText = surahNameElement7.innerText;
        });
      }
      if (button8 && audioUrl8) {
        button8.addEventListener("click", function () {
          audioPlayer.src = audioUrl8;
          audioPlayer.play();
          suranName.innerText = surahNameElement8.innerText;
        });
      }
      if (button9 && audioUrl9) {
        button9.addEventListener("click", function () {
          audioPlayer.src = audioUrl9;
          audioPlayer.play();
          suranName.innerText = surahNameElement9.innerText;
        });
      }
      if (button10 && audioUrl10) {
        button10.addEventListener("click", function () {
          audioPlayer.src = audioUrl10;
          audioPlayer.play();
          suranName.innerText = surahNameElement10.innerText;
        });
      }
      if (button11 && audioUrl11) {
        button11.addEventListener("click", function () {
          audioPlayer.src = audioUrl11;
          audioPlayer.play();
          suranName.innerText = surahNameElement11.innerText;
        });
      }
      if (button12 && audioUrl12) {
        button12.addEventListener("click", function () {
          audioPlayer.src = audioUrl12;
          audioPlayer.play();
          suranName.innerText = surahNameElement12.innerText;
        });
      }
      if (button13 && audioUrl13) {
        button13.addEventListener("click", function () {
          audioPlayer.src = audioUrl13;
          audioPlayer.play();
          suranName.innerText = surahNameElement13.innerText;
        });
      }
      if (button14 && audioUrl14) {
        button14.addEventListener("click", function () {
          audioPlayer.src = audioUrl14;
          audioPlayer.play();
          suranName.innerText = surahNameElement14.innerText;
        });
      }
      if (button15 && audioUrl15) {
        button15.addEventListener("click", function () {
          audioPlayer.src = audioUrl15;
          audioPlayer.play();
          suranName.innerText = surahNameElement15.innerText;
        });
      }
      if (button16 && audioUrl16) {
        button16.addEventListener("click", function () {
          audioPlayer.src = audioUrl16;
          audioPlayer.play();
          suranName.innerText = surahNameElement16.innerText;
        });
      }
      if (button17 && audioUrl17) {
        button17.addEventListener("click", function () {
          audioPlayer.src = audioUrl17;
          audioPlayer.play();
          suranName.innerText = surahNameElement17.innerText;
        });
      }
      if (button18 && audioUrl18) {
        button18.addEventListener("click", function () {
          audioPlayer.src = audioUrl18;
          audioPlayer.play();
          suranName.innerText = surahNameElement18.innerText;
        });
      }
      if (button19 && audioUrl19) {
        button19.addEventListener("click", function () {
          audioPlayer.src = audioUrl19;
          audioPlayer.play();
          suranName.innerText = surahNameElement19.innerText;
        });
      }
      if (button20 && audioUrl20) {
        button20.addEventListener("click", function () {
          audioPlayer.src = audioUrl20;
          audioPlayer.play();
          suranName.innerText = surahNameElement20.innerText;
        });
      }
      if (button21 && audioUrl21) {
        button21.addEventListener("click", function () {
          audioPlayer.src = audioUrl21;
          audioPlayer.play();
          suranName.innerText = surahNameElement21.innerText;
        });
      }
      if (button22 && audioUrl22) {
        button22.addEventListener("click", function () {
          audioPlayer.src = audioUrl22;
          audioPlayer.play();
          suranName.innerText = surahNameElement22.innerText;
        });
      }
      if (button23 && audioUrl23) {
        button23.addEventListener("click", function () {
          audioPlayer.src = audioUrl23;
          audioPlayer.play();
          suranName.innerText = surahNameElement23.innerText;
        });
      }
      if (button24 && audioUrl24) {
        button24.addEventListener("click", function () {
          audioPlayer.src = audioUrl24;
          audioPlayer.play();
          suranName.innerText = surahNameElement24.innerText;
        });
      }
      if (button25 && audioUrl25) {
        button25.addEventListener("click", function () {
          audioPlayer.src = audioUrl25;
          audioPlayer.play();
          suranName.innerText = surahNameElement25.innerText;
        });
      }
      if (button26 && audioUrl26) {
        button26.addEventListener("click", function () {
          audioPlayer.src = audioUrl26;
          audioPlayer.play();
          suranName.innerText = surahNameElement26.innerText;
        });
      }
      if (button27 && audioUrl27) {
        button27.addEventListener("click", function () {
          audioPlayer.src = audioUrl27;
          audioPlayer.play();
          suranName.innerText = surahNameElement27.innerText;
        });
      }
      if (button28 && audioUrl28) {
        button28.addEventListener("click", function () {
          audioPlayer.src = audioUrl28;
          audioPlayer.play();
          suranName.innerText = surahNameElement28.innerText;
        });
      }
      if (button29 && audioUrl29) {
        button29.addEventListener("click", function () {
          audioPlayer.src = audioUrl29;
          audioPlayer.play();
          suranName.innerText = surahNameElement29.innerText;
        });
      }
      if (button30 && audioUrl30) {
        button30.addEventListener("click", function () {
          audioPlayer.src = audioUrl30;
          audioPlayer.play();
          suranName.innerText = surahNameElement30.innerText;
        });
      }
      if (button31 && audioUrl31) {
        button31.addEventListener("click", function () {
          audioPlayer.src = audioUrl31;
          audioPlayer.play();
          suranName.innerText = surahNameElement31.innerText;
        });
      }
      if (button32 && audioUrl32) {
        button32.addEventListener("click", function () {
          audioPlayer.src = audioUrl32;
          audioPlayer.play();
          suranName.innerText = surahNameElement32.innerText;
        });
      }
      if (button33 && audioUrl33) {
        button33.addEventListener("click", function () {
          audioPlayer.src = audioUrl33;
          audioPlayer.play();
          suranName.innerText = surahNameElement33.innerText;
        });
      }
      if (button34 && audioUrl34) {
        button34.addEventListener("click", function () {
          audioPlayer.src = audioUrl34;
          audioPlayer.play();
          suranName.innerText = surahNameElement34.innerText;
        });
      }
      if (button35 && audioUrl35) {
        button35.addEventListener("click", function () {
          audioPlayer.src = audioUrl35;
          audioPlayer.play();
          suranName.innerText = surahNameElement35.innerText;
        });
      }
      if (button36 && audioUrl36) {
        button36.addEventListener("click", function () {
          audioPlayer.src = audioUrl36;
          audioPlayer.play();
          suranName.innerText = surahNameElement36.innerText;
        });
      }
      if (button37 && audioUrl37) {
        button37.addEventListener("click", function () {
          audioPlayer.src = audioUrl37;
          audioPlayer.play();
          suranName.innerText = surahNameElement37.innerText;
        });
      }
      if (button38 && audioUrl38) {
        button38.addEventListener("click", function () {
          audioPlayer.src = audioUrl38;
          audioPlayer.play();
          suranName.innerText = surahNameElement38.innerText;
        });
      }
      if (button39 && audioUrl39) {
        button39.addEventListener("click", function () {
          audioPlayer.src = audioUrl39;
          audioPlayer.play();
          suranName.innerText = surahNameElement39.innerText;
        });
      }
      if (button40 && audioUrl40) {
        button40.addEventListener("click", function () {
          audioPlayer.src = audioUrl40;
          audioPlayer.play();
          suranName.innerText = surahNameElement40.innerText;
        });
      }
      if (button41 && audioUrl41) {
        button41.addEventListener("click", function () {
          audioPlayer.src = audioUrl41;
          audioPlayer.play();
          suranName.innerText = surahNameElement41.innerText;
        });
      }
      if (button42 && audioUrl42) {
        button42.addEventListener("click", function () {
          audioPlayer.src = audioUrl42;
          audioPlayer.play();
          suranName.innerText = surahNameElement42.innerText;
        });
      }
      if (button43 && audioUrl43) {
        button43.addEventListener("click", function () {
          audioPlayer.src = audioUrl43;
          audioPlayer.play();
          suranName.innerText = surahNameElement43.innerText;
        });
      }
      if (button44 && audioUrl44) {
        button44.addEventListener("click", function () {
          audioPlayer.src = audioUrl44;
          audioPlayer.play();
          suranName.innerText = surahNameElement44.innerText;
        });
      }
      if (button45 && audioUrl45) {
        button45.addEventListener("click", function () {
          audioPlayer.src = audioUrl45;
          audioPlayer.play();
          suranName.innerText = surahNameElement45.innerText;
        });
      }
      if (button46 && audioUrl46) {
        button46.addEventListener("click", function () {
          audioPlayer.src = audioUrl46;
          audioPlayer.play();
          suranName.innerText = surahNameElement46.innerText;
        });
      }
      if (button47 && audioUrl47) {
        button47.addEventListener("click", function () {
          audioPlayer.src = audioUrl47;
          audioPlayer.play();
          suranName.innerText = surahNameElement47.innerText;
        });
      }
      if (button48 && audioUrl48) {
        button48.addEventListener("click", function () {
          audioPlayer.src = audioUrl48;
          audioPlayer.play();
          suranName.innerText = surahNameElement48.innerText;
        });
      }
      if (button49 && audioUrl49) {
        button49.addEventListener("click", function () {
          audioPlayer.src = audioUrl49;
          audioPlayer.play();
          suranName.innerText = surahNameElement49.innerText;
        });
      }
      if (button50 && audioUrl50) {
        button50.addEventListener("click", function () {
          audioPlayer.src = audioUrl50;
          audioPlayer.play();
          suranName.innerText = surahNameElement50.innerText;
        });
      }
      if (button51 && audioUrl51) {
        button51.addEventListener("click", function () {
          audioPlayer.src = audioUrl51;
          audioPlayer.play();
          suranName.innerText = surahNameElement51.innerText;
        });
      }
      if (button52 && audioUrl52) {
        button52.addEventListener("click", function () {
          audioPlayer.src = audioUrl52;
          audioPlayer.play();
          suranName.innerText = surahNameElement52.innerText;
        });
      }
      if (button53 && audioUrl53) {
        button53.addEventListener("click", function () {
          audioPlayer.src = audioUrl53;
          audioPlayer.play();
          suranName.innerText = surahNameElement53.innerText;
        });
      }
      if (button54 && audioUrl54) {
        button54.addEventListener("click", function () {
          audioPlayer.src = audioUrl54;
          audioPlayer.play();
          suranName.innerText = surahNameElement54.innerText;
        });
      }
      if (button55 && audioUrl55) {
        button55.addEventListener("click", function () {
          audioPlayer.src = audioUrl55;
          audioPlayer.play();
          suranName.innerText = surahNameElement55.innerText;
        });
      }
      if (button56 && audioUrl56) {
        button56.addEventListener("click", function () {
          audioPlayer.src = audioUrl56;
          audioPlayer.play();
          suranName.innerText = surahNameElement56.innerText;
        });
      }

      if (button57 && audioUrl57) {
        button57.addEventListener("click", function () {
          audioPlayer.src = audioUrl57;
          audioPlayer.play();
          suranName.innerText = surahNameElement57.innerText;
        });
      }
      if (button58 && audioUrl58) {
        button58.addEventListener("click", function () {
          audioPlayer.src = audioUrl58;
          audioPlayer.play();
          suranName.innerText = surahNameElement58.innerText;
        });
      }
      if (button59 && audioUrl59) {
        button59.addEventListener("click", function () {
          audioPlayer.src = audioUrl59;
          audioPlayer.play();
          suranName.innerText = surahNameElement59.innerText;
        });
      }
      if (button60 && audioUrl60) {
        button60.addEventListener("click", function () {
          audioPlayer.src = audioUrl60;
          audioPlayer.play();
          suranName.innerText = surahNameElement60.innerText;
        });
      }
      if (button61 && audioUrl61) {
        button61.addEventListener("click", function () {
          audioPlayer.src = audioUrl61;
          audioPlayer.play();
          suranName.innerText = surahNameElement61.innerText;
        });
      }
      if (button62 && audioUrl62) {
        button62.addEventListener("click", function () {
          audioPlayer.src = audioUrl62;
          audioPlayer.play();
          suranName.innerText = surahNameElement62.innerText;
        });
      }
      if (button63 && audioUrl63) {
        button63.addEventListener("click", function () {
          audioPlayer.src = audioUrl63;
          audioPlayer.play();
          suranName.innerText = surahNameElement63.innerText;
        });
      }
      if (button64 && audioUrl64) {
        button64.addEventListener("click", function () {
          audioPlayer.src = audioUrl64;
          audioPlayer.play();
          suranName.innerText = surahNameElement64.innerText;
        });
      }
      if (button65 && audioUrl65) {
        button65.addEventListener("click", function () {
          audioPlayer.src = audioUrl65;
          audioPlayer.play();
          suranName.innerText = surahNameElement65.innerText;
        });
      }
      if (button66 && audioUrl66) {
        button66.addEventListener("click", function () {
          audioPlayer.src = audioUrl66;
          audioPlayer.play();
          suranName.innerText = surahNameElement66.innerText;
        });
      }
      if (button67 && audioUrl67) {
        button67.addEventListener("click", function () {
          audioPlayer.src = audioUrl67;
          audioPlayer.play();
          suranName.innerText = surahNameElement67.innerText;
        });
      }
      if (button68 && audioUrl68) {
        button68.addEventListener("click", function () {
          audioPlayer.src = audioUrl68;
          audioPlayer.play();
          suranName.innerText = surahNameElement68.innerText;
        });
      }
      if (button69 && audioUrl69) {
        button69.addEventListener("click", function () {
          audioPlayer.src = audioUrl69;
          audioPlayer.play();
          suranName.innerText = surahNameElement69.innerText;
        });
      }
      if (button70 && audioUrl70) {
        button70.addEventListener("click", function () {
          audioPlayer.src = audioUrl70;
          audioPlayer.play();
          suranName.innerText = surahNameElement70.innerText;
        });
      }
      if (button71 && audioUrl71) {
        button71.addEventListener("click", function () {
          audioPlayer.src = audioUrl71;
          audioPlayer.play();
          suranName.innerText = surahNameElement71.innerText;
        });
      }
      if (button72 && audioUrl72) {
        button72.addEventListener("click", function () {
          audioPlayer.src = audioUrl72;
          audioPlayer.play();
          suranName.innerText = surahNameElement72.innerText;
        });
      }
      if (button73 && audioUrl73) {
        button73.addEventListener("click", function () {
          audioPlayer.src = audioUrl73;
          audioPlayer.play();
          suranName.innerText = surahNameElement73.innerText;
        });
      }
      if (button74 && audioUrl74) {
        button74.addEventListener("click", function () {
          audioPlayer.src = audioUrl74;
          audioPlayer.play();
          suranName.innerText = surahNameElement74.innerText;
        });
      }
      if (button75 && audioUrl75) {
        button75.addEventListener("click", function () {
          audioPlayer.src = audioUrl75;
          audioPlayer.play();
          suranName.innerText = surahNameElement75.innerText;
        });
      }
      if (button76 && audioUrl76) {
        button76.addEventListener("click", function () {
          audioPlayer.src = audioUrl76;
          audioPlayer.play();
          suranName.innerText = surahNameElement76.innerText;
        });
      }
      if (button77 && audioUrl77) {
        button77.addEventListener("click", function () {
          audioPlayer.src = audioUrl77;
          audioPlayer.play();
          suranName.innerText = surahNameElement77.innerText;
        });
      }
      if (button78 && audioUrl78) {
        button78.addEventListener("click", function () {
          audioPlayer.src = audioUrl78;
          audioPlayer.play();
          suranName.innerText = surahNameElement78.innerText;
        });
      }
      if (button79 && audioUrl79) {
        button79.addEventListener("click", function () {
          audioPlayer.src = audioUrl79;
          audioPlayer.play();
          suranName.innerText = surahNameElement79.innerText;
        });
      }
      if (button80 && audioUrl80) {
        button80.addEventListener("click", function () {
          audioPlayer.src = audioUrl80;
          audioPlayer.play();
          suranName.innerText = surahNameElement80.innerText;
        });
      }
      if (button81 && audioUrl81) {
        button81.addEventListener("click", function () {
          audioPlayer.src = audioUrl81;
          audioPlayer.play();
          suranName.innerText = surahNameElement81.innerText;
        });
      }
      if (button82 && audioUrl82) {
        button82.addEventListener("click", function () {
          audioPlayer.src = audioUrl82;
          audioPlayer.play();
          suranName.innerText = surahNameElement82.innerText;
        });
      }
      if (button83 && audioUrl83) {
        button83.addEventListener("click", function () {
          audioPlayer.src = audioUrl83;
          audioPlayer.play();
          suranName.innerText = surahNameElement83.innerText;
        });
      }
      if (button84 && audioUrl84) {
        button84.addEventListener("click", function () {
          audioPlayer.src = audioUrl84;
          audioPlayer.play();
          suranName.innerText = surahNameElement84.innerText;
        });
      }
      if (button85 && audioUrl85) {
        button85.addEventListener("click", function () {
          audioPlayer.src = audioUrl85;
          audioPlayer.play();
          suranName.innerText = surahNameElement85.innerText;
        });
      }
      if (button86 && audioUrl86) {
        button86.addEventListener("click", function () {
          audioPlayer.src = audioUrl86;
          audioPlayer.play();
          suranName.innerText = surahNameElement86.innerText;
        });
      }
      if (button87 && audioUrl87) {
        button87.addEventListener("click", function () {
          audioPlayer.src = audioUrl87;
          audioPlayer.play();
          suranName.innerText = surahNameElement87.innerText;
        });
      }
      if (button88 && audioUrl88) {
        button88.addEventListener("click", function () {
          audioPlayer.src = audioUrl88;
          audioPlayer.play();
          suranName.innerText = surahNameElement88.innerText;
        });
      }
      if (button89 && audioUrl89) {
        button89.addEventListener("click", function () {
          audioPlayer.src = audioUrl89;
          audioPlayer.play();
          suranName.innerText = surahNameElement89.innerText;
        });
      }
      if (button90 && audioUrl90) {
        button90.addEventListener("click", function () {
          audioPlayer.src = audioUrl90;
          audioPlayer.play();
          suranName.innerText = surahNameElement90.innerText;
        });
      }
      if (button91 && audioUrl91) {
        button91.addEventListener("click", function () {
          audioPlayer.src = audioUrl91;
          audioPlayer.play();
          suranName.innerText = surahNameElement91.innerText;
        });
      }
      if (button92 && audioUrl92) {
        button92.addEventListener("click", function () {
          audioPlayer.src = audioUrl92;
          audioPlayer.play();
          suranName.innerText = surahNameElement92.innerText;
        });
      }
      if (button93 && audioUrl93) {
        button93.addEventListener("click", function () {
          audioPlayer.src = audioUrl93;
          audioPlayer.play();
          suranName.innerText = surahNameElement93.innerText;
        });
      }
      if (button94 && audioUrl94) {
        button94.addEventListener("click", function () {
          audioPlayer.src = audioUrl94;
          audioPlayer.play();
          suranName.innerText = surahNameElement94.innerText;
        });
      }
      if (button95 && audioUrl95) {
        button95.addEventListener("click", function () {
          audioPlayer.src = audioUrl95;
          audioPlayer.play();
          suranName.innerText = surahNameElement95.innerText;
        });
      }
      if (button96 && audioUrl96) {
        button96.addEventListener("click", function () {
          audioPlayer.src = audioUrl96;
          audioPlayer.play();
          suranName.innerText = surahNameElement96.innerText;
        });
      }
      if (button97 && audioUrl97) {
        button97.addEventListener("click", function () {
          audioPlayer.src = audioUrl97;
          audioPlayer.play();
          suranName.innerText = surahNameElement97.innerText;
        });
      }
      if (button98 && audioUrl98) {
        button98.addEventListener("click", function () {
          audioPlayer.src = audioUrl98;
          audioPlayer.play();
          suranName.innerText = surahNameElement98.innerText;
        });
      }
      if (button99 && audioUrl99) {
        button99.addEventListener("click", function () {
          audioPlayer.src = audioUrl99;
          audioPlayer.play();
          suranName.innerText = surahNameElement99.innerText;
        });
      }
      if (button100 && audioUrl100) {
        button100.addEventListener("click", function () {
          audioPlayer.src = audioUrl100;
          audioPlayer.play();
          suranName.innerText = surahNameElement100.innerText;
        });
      }
      if (button101 && audioUrl101) {
        button101.addEventListener("click", function () {
          audioPlayer.src = audioUrl101;
          audioPlayer.play();
          suranName.innerText = surahNameElement101.innerText;
        });
      }
      if (button102 && audioUrl102) {
        button102.addEventListener("click", function () {
          audioPlayer.src = audioUrl102;
          audioPlayer.play();
          suranName.innerText = surahNameElement102.innerText;
        });
      }
      if (button103 && audioUrl103) {
        button103.addEventListener("click", function () {
          audioPlayer.src = audioUrl103;
          audioPlayer.play();
          suranName.innerText = surahNameElement103.innerText;
        });
      }
      if (button104 && audioUrl104) {
        button104.addEventListener("click", function () {
          audioPlayer.src = audioUrl104;
          audioPlayer.play();
          suranName.innerText = surahNameElement104.innerText;
        });
      }
      if (button105 && audioUrl105) {
        button105.addEventListener("click", function () {
          audioPlayer.src = audioUrl105;
          audioPlayer.play();
          suranName.innerText = surahNameElement105.innerText;
        });
      }
      if (button106 && audioUrl106) {
        button106.addEventListener("click", function () {
          audioPlayer.src = audioUrl106;
          audioPlayer.play();
          suranName.innerText = surahNameElement105.innerText;
        });
      }
      if (button107 && audioUrl107) {
        button107.addEventListener("click", function () {
          audioPlayer.src = audioUrl107;
          audioPlayer.play();
          suranName.innerText = surahNameElement107.innerText;
        });
      }
      if (button108 && audioUrl108) {
        button108.addEventListener("click", function () {
          audioPlayer.src = audioUrl108;
          audioPlayer.play();
          suranName.innerText = surahNameElement108.innerText;
        });
      }
      if (button109 && audioUrl109) {
        button109.addEventListener("click", function () {
          audioPlayer.src = audioUrl109;
          audioPlayer.play();
          suranName.innerText = surahNameElement109.innerText;
        });
      }

      if (button110 && audioUrl110) {
        button110.addEventListener("click", function () {
          audioPlayer.src = audioUrl110;
          audioPlayer.play();
          suranName.innerText = surahNameElement110.innerText;
        });
      }
      if (button111 && audioUrl111) {
        button111.addEventListener("click", function () {
          audioPlayer.src = audioUrl111;
          audioPlayer.play();
          suranName.innerText = surahNameElement111.innerText;
        });
      }
      if (button112 && audioUrl112) {
        button112.addEventListener("click", function () {
          audioPlayer.src = audioUrl112;
          audioPlayer.play();
          suranName.innerText = surahNameElement112.innerText;
        });
      }
      if (button113 && audioUrl113) {
        button113.addEventListener("click", function () {
          audioPlayer.src = audioUrl113;
          audioPlayer.play();
          suranName.innerText = surahNameElement113.innerText;
        });
      }
      if (button114 && audioUrl114) {
        button114.addEventListener("click", function () {
          audioPlayer.src = audioUrl114;
          audioPlayer.play();
          suranName.innerText = surahNameElement114.innerText;
        });
      }
    }
  }
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

fetchSurahAudio();
