const music = document.getElementById("birthdayMusic");

function openQR() {
  document.getElementById("qrPopup").style.display = "flex";

  // Browsers usually allow music after the user taps something.
  music.volume = 0.35;
  music.play().catch(() => {
    console.log("Music will play after user interaction.");
  });
}

function closeQR() {
  document.getElementById("qrPopup").style.display = "none";
}
