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

/** SWIPING */
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      slide();
    } else {
      slide();
    }
  } else {
    if (yDiff > 0) {
      // slide();
    } else {
      // slide();
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
