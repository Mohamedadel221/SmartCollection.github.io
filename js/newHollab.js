let showHollabClick = document.querySelectorAll(".showHollabButton");
let showHollab = document.getElementById("showHollab");
let overlay = document.getElementById("overlay");
let showHollab2 = document.getElementById("showHollab2");
let overlay2= document.getElementById("overlay");
showHollabClick.forEach((hollbs) => {
  hollbs.addEventListener("click", () => {
    showHollab.style.display = "block";
    overlay.style.display = "block";
  });
});
overlay.addEventListener("click", () => {
  showHollab.style.display = "none";
  overlay.style.display = "none";

});
overlay2.addEventListener("click", () => {
  showHollab2.style.display = "none";
  overlay2.style.display = "none";
});
let secShowTwo = document.getElementById("secShowTwo");
let secOneShow = document.getElementById("secOneShow");
function shwoSecIn() {
  secShowTwo.classList.remove("d-none");
  secOneShow.classList.add("d-none");
}
function secShows() {
  secShowTwo.classList.add("d-none");
  secOneShow.classList.remove("d-none");
}
function cancelSec() {
  secShowTwo.classList.add("d-none");
  secOneShow.classList.remove("d-none");
}
