var slider = document.getElementById("myRange");

slider.oninput = function() {
  window.scrollTo(0, slider.value);
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
  slider.value = scroll;
});