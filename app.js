// vars
const slideBtns = [...document.querySelectorAll(".slide-button")];

const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");

const prevQuote = document.querySelector(".prev-quote");
const nextQuote = document.querySelector(".next-quote");

const namesContainer = [...document.querySelectorAll(".single-person-info")];

const slide = (btn) => {
  if (btn.classList.contains("prev-btn")) {
    prevImg.classList.add("active");
    nextImg.classList.remove("active");

    prevQuote.classList.add("active");
    nextQuote.classList.remove("active");

    namesContainer[0].classList.add("active-names");
    namesContainer[1].classList.remove("active-names");
  } else if (btn.classList.contains("next-btn")) {
    prevImg.classList.remove("active");
    nextImg.classList.add("active");

    prevQuote.classList.remove("active");
    nextQuote.classList.add("active");

    namesContainer[0].classList.remove("active-names");
    namesContainer[1].classList.add("active-names");
  }
};

/** listeners */
slideBtns.forEach((b) => {
  b.addEventListener("click", () => slide(b));
});
