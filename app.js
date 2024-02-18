var menu = document.querySelector(".java");
var full = document.querySelector(".fullscreen");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    flag = 1;
  } else {
    full.style.top = "-100%";
    flag = 0;
  }
});
