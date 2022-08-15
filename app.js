// vars
const slideBtns = [...document.querySelectorAll(".slide-button")];

const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");

const prevQuote = document.querySelector(".prev-quote");
const nextQuote = document.querySelector(".next-quote");

const namesContainer = [...document.querySelectorAll(".single-person-info")];

let isNext = true;

const slide = () => {
  if (!isNext) {
    prevImg.classList.add("active");
    nextImg.classList.remove("active");

    prevQuote.classList.add("active");
    nextQuote.classList.remove("active");

    namesContainer[0].classList.add("active-names");
    namesContainer[1].classList.remove("active-names");

    isNext = true;
  } else {
    prevImg.classList.remove("active");
    nextImg.classList.add("active");

    prevQuote.classList.remove("active");
    nextQuote.classList.add("active");

    namesContainer[0].classList.remove("active-names");
    namesContainer[1].classList.add("active-names");

    isNext = false;
  }
};

/** listeners */
slideBtns.forEach((b) => {
  b.addEventListener("click", slide);
});
document.onkeydown = (e) => {
  e = e || window.event;
  if (
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown"
  ) {
    slide();
  }
};

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  if (touchendX < touchstartX) slide;
  if (touchendX > touchstartX) slide;
}

document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
