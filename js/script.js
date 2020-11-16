
document.getElementById("annotation-head").hidden = true;
const hotspotHead = () => {
  let caption = document.getElementById("annotation-head");
  let hotspot = document.getElementById("head");
  if(caption.style.display === "none") {
    caption.style.display = "block";
    hotspot.style.backgroundColor = "blue";
  } else {
    caption.style.display = "none";
    hotspot.style.backgroundColor = "red";
  }
}

document.getElementById("annotation-flame").hidden = true;
const hotspotFlame = () => {
  let caption = document.getElementById("annotation-flame");
  let hotspot = document.getElementById("flame");
  if(caption.style.display === "none") {
    caption.style.display = "block";
    hotspot.style.backgroundColor = "blue";
  } else {
    caption.style.display = "none";
    hotspot.style.backgroundColor = "red";
  }
}

let button = document.getElementById("statue");
document.getElementById("annotation-statue").hidden = true;
const hotspotStatue = () => {
  let caption = document.getElementById("annotation-statue");
  let hotspot = document.getElementById("statue");
  if(caption.style.display === "none") {
    caption.style.display = "block";
    hotspot.style.backgroundColor = "blue";
  } else {
    caption.style.display = "none";
    hotspot.style.backgroundColor = "red";
  }
}

// When the user clicks on <span> (x), close the modal
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//   modal.style.display = "none";
// }

