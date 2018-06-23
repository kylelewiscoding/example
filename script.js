let isScrollingBottom = false;
let didSetIsScrollingBottom = false;
let didStop = false;
let didDoThething = false;
let didSet = false;

const screenBottom = document.querySelector(".bottom-screen");
const screenTop = document.querySelector(".top-screen");

$(screenTop).on("scrollstart", () => {
  $(screenTop).removeClass("scoll-bottom");
  $(screenTop).addClass("scroll-top");
});

$(screenTop).on("scrollstop", () => {
  setTimeout(() => {
    $(screenTop).removeClass("scroll-top");
  }, 2000);
});

$(screenBottom).on("scrollstart", function() {
  $(screenTop).removeClass("scoll-top");
  $(screenTop).addClass("scroll-bottom");
});

$(screenBottom).on("scrollstop", function() {
  setTimeout(() => {
    $(screenTop).removeClass("scroll-bottom");
  }, 2000);
});
