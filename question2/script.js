//-------------------------
// JavaScript
//-------------------------
// const imageGauche = document.getElementById("imageGauche");
// const imageDroite = document.getElementById("imageDroite");
// const paragraphe = document.querySelector("p");

// imageDroite.addEventListener("click", () => {
//   paragraphe.style.display = "none";
// });

// imageGauche.addEventListener("click", () => {
//   paragraphe.style.display = "block";
// });

//-------------------------
// JQuery
//-------------------------

const imageGauche = $("#imageGauche");
const imageDroite = $("#imageDroite");
const paragraphe = $("p");

imageDroite.click(() => {
  paragraphe.hide();
});

imageGauche.click(() => {
  paragraphe.show();
});
