/* Name this external file gallery.js */

function upDate(previewPic) {
  // Get the div with id "image"
  let imageDiv = document.getElementById("image");

  // 1) Change background image to the source of the preview image
  imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";

  // 2) Change the text to the alt text of the preview image
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  // Get the div with id "image"
  let imageDiv = document.getElementById("image");

  // 1) Reset background image to the original
  imageDiv.style.backgroundImage = "url('')";

  // 2) Reset the text to the original message
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
