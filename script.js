let isScrollingBottom = false;
let didSetIsScrollingBottom = false;
let didStop = false;
let didDoThething = false;
let didSet = false;

const screenBottom = document.querySelector(".bottom-screen");

const scrollStopped = () => {
  setTimeout(() => {
    if (!isScrollingBottom && !didStop && !didSet) {
      console.log("***");
      didStop = true;
      didSet = true;
    }
  }, 1000);
};

// setInterval(function() {
// }, 2000);

const expandBottom = () => {
  didSet = false;
  isScrollingBottom = true;
  didStop = false;
  setTimeout(function() {
    isScrollingBottom = false;
    if (isScrollingBottom && !didStop) {
      isScrolling = false;
      didStop = true;
    }
    scrollStopped();
  }, 333);
};

screenBottom.addEventListener("scroll", expandBottom, false);
