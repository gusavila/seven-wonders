const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slide = document.querySelector(".slide");
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

next.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  slide.appendChild(items[0]);
});

prev.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  slide.prepend(items[items.length - 1]);
});

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    if (item.offsetWidth === 200 && items[2] === item) {
      slide.appendChild(items[0]);
    }
  });
});
