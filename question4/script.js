// -------------------------
// JavaScript
// -------------------------
// const image10 = document.querySelector("img#image_10");

// image10.addEventListener("mouseover", () => {
//   image10.style.content = "url(./images/diamonds_ace.gif)";
// });

// image10.addEventListener("mouseout", () => {
//   image10.style.content = "url(./images/diamonds_10.gif)";
// });

//-------------------------
// JQuery
//-------------------------

const image10 = $("img#image_10");

image10.on("mouseover", () => {
  // image10.attr("src", "./images/diamonds_ace.gif");
  image10.css("content", "url(./images/diamonds_ace.gif)");
});

image10.on("mouseout", () => {
  // image10.attr("src", "./images/diamonds_10.gif");
  image10.css("content", "url(./images/diamonds_10.gif)");
});
