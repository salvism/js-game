let cat = document.querySelector(".cat");
let dog = document.querySelector(".dog");
let h_1 = document.querySelector("h1");

let moves = 10;

window.addEventListener("load", () => {
  cat.style.position = "absolute";
  cat.style.left = 0;
  cat.style.top = 0;
});

document.body.onkeydown = function (e) {
  const rect1 = cat.getBoundingClientRect();
  const rect2 = dog.getBoundingClientRect();

  const touching = !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );

  if (touching) {
    h_1.classList.remove("d-none");
  } else {
    switch (e.key) {
      case "ArrowLeft":
        cat.style.left = parseInt(cat.style.left) - moves + "px";
        rect = cat.getBoundingClientRect();
        break;
      case "ArrowRight":
        cat.style.left = parseInt(cat.style.left) + moves + "px";
        rect = cat.getBoundingClientRect();
        break;
      case "ArrowUp":
        cat.style.top = parseInt(cat.style.top) - moves + "px";
        rect = cat.getBoundingClientRect();
        break;
      case "ArrowDown":
        cat.style.top = parseInt(cat.style.top) + moves + "px";
        rect = cat.getBoundingClientRect();
        break;
    }
  }
};
document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    location.reload();
  }
});
