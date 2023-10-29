//-------------------------
// JavaScript
//-------------------------
// paragraphe = document.querySelector("p");
// image = document.querySelector("img");

// paragraphe.addEventListener("click", () => {
//   image.style.width = "0";
// });

//-------------------------
// JQuery
//-------------------------
const paragraphe = $("p");
const image = $("img");

paragraphe.click(() => {
  image.width("0");
});
