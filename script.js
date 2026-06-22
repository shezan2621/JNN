const music = document.getElementById("birthdayMusic");

window.addEventListener("load", () => {
  const items = document.querySelectorAll(".reveal");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 1200 + 800);
  });
});

function openQR() {
  document.getElementById("qrPopup").style.display = "flex";

  if (music) {
    music.volume = 0.25;
    music.play().catch(() => {
      console.log("Music will start after user interaction.");
    });
  }
}

function closeQR() {
  document.getElementById("qrPopup").style.display = "none";
}
