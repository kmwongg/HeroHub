// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();



const playButton = document.querySelector('.play-button');
const audio = document.getElementById('homePageSong1');
let isPlaying = false;

playButton.addEventListener('click', function() {
  if (!isPlaying) {
      audio.play();
      playButton.src = '/assets/images/pause.png';  // Switch to pause icon
  } else {
      audio.pause();
      playButton.src = '/assets/images/play.png';  // Switch back to play icon
  }
  isPlaying = !isPlaying;
});


const volumeBars = document.querySelectorAll('.volume-bar');

volumeBars.forEach((bar) => {
  bar.addEventListener('click', function() {
    audio.volume = this.getAttribute('data-level') / (volumeBars.length - 1);

    // Highlight the active bars
    volumeBars.forEach((innerBar, index) => {
      if (index <= this.getAttribute('data-level')) {
        innerBar.classList.add('active');
      } else {
        innerBar.classList.remove('active');
      }
    });
  });
});
