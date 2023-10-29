//-------------------------
// JavaScript
//-------------------------
// bouton1 = document.getElementById("button1");
// bouton2 = document.getElementById("button2");
// bouton3 = document.getElementById("button3");
// boutonClear = document.getElementById("clear");
// presentation1 = document.getElementById("presentationHaaland");
// presentation2 = document.getElementById("presentationDebruyne");
// presentation3 = document.getElementById("presentationSalah");

// bouton1.addEventListener("click", () => {
//   presentation1.style.height = "600px";
//   presentation2.style.height = "600px";
//   presentation3.style.height = "600px";
// });

// bouton2.addEventListener("click", () => {
//   presentation2.style.height = "600px";
// });

// bouton3.addEventListener("click", () => {
//   presentation1.style.height = "600px";
//   presentation2.style.height = "600px";
//   presentation3.style.height = "600px";
// });

// boutonClear.addEventListener("click", () => {
//   presentation1.style.height = "0";
//   presentation2.style.height = "0";
//   presentation3.style.height = "0";
// });

// Refaire le programme avec un toggle et classList

//-------------------------
// JQuery
//-------------------------

bouton1 = $("#button1");
bouton2 = $("#button2");
bouton3 = $("#button3");
boutonClear = $("#clear");
presentation1 = $("#presentationHaaland");
presentation2 = $("#presentationDebruyne");
presentation3 = $("#presentationSalah");

bouton1.click(() => {
  presentation1.height("600px");
  presentation2.height("600px");
  presentation3.height("600px");
});

bouton2.click(() => {
  presentation2.height("600px");
});

bouton3.click(() => {
  presentation1.height("600px");
  presentation2.height("600px");
  presentation3.height("600px");
});

boutonClear.click(() => {
  presentation1.height("0");
  presentation2.height("0");
  presentation3.height("0");
});
