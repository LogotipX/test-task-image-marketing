function onBlur(elementId) {
  document.getElementById(elementId).style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "visible";
}

function showPopup(elementId) {
  document.getElementById(elementId).style.top = `${scrollY}px`;
  document.getElementById(elementId).style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
