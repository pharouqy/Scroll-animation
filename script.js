const boxes = document.querySelectorAll(".box");

console.log(window.innerHeight);

window.addEventListener("scroll", (e) => {
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().top <= window.innerHeight) {
      box.classList.add("showing");
    } else {
      box.classList.remove("showing");
    }
  });
});
