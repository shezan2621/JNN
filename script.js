const music = document.getElementById("birthdayMusic");

function openQR() {
  const popup = document.getElementById("qrPopup");
  popup.style.display = "flex";

  music.volume = 0.25;
  music.play().catch(() => {
    console.log("Music will start after user interaction.");
  });
}

function closeQR() {
  document.getElementById("qrPopup").style.display = "none";
}
