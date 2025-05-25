// src/utils/parallax.js
// let parallaxInitialized = false;

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;
const threshold = 5;

function handleOrientation(event) {
  if (event.type === "mousemove") {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;
  } else if (event.type === "deviceorientation") {
    xValue = event.gamma * 10;
    yValue = event.beta * 10;
  }
}

let xValue = 0,
  yValue = 0;
let targetX = 0,
  targetY = 0;
var par = 1;
var amplitude = 0;

export function resetAmplitude() {
  amplitude = 0;
}

export function initializeParallax() {
  if (typeof window === "undefined") return;
  amplitude = 0;

  // parallaxInitialized = true;
  par = 1;

  const parallax_el = document.querySelectorAll(".parallax");
  const parallax_el_full_scr = document.querySelectorAll(".parallax.full-scr");

  function moveImg() {
    if (amplitude < 100) {
      amplitude++;
    }
    // amplitude;
    if (!par) {
      return;
    }

    targetX = lerp(targetX, xValue, 0.025);
    targetY = lerp(targetY, yValue, 0.025);

    parallax_el.forEach((el) => {
      const speedx = parseFloat(el.dataset.speedx) / 7;
      const oldX = el.dataset.tx;
      const oldY = el.dataset.ty;

      el.style.transform = `translateX(calc(${oldX} + ${
        (-targetX * speedx * amplitude) / 100
      }px)) translateY(calc(${oldY} - ${
        (targetY * speedx * amplitude) / 100
      }px))`;
    });

    requestAnimationFrame(moveImg);
  }

  function defaultPosition() {
    if (par) {
      return;
    }
    targetX = lerp(targetX, 0, 0.025);
    targetY = lerp(targetY, 0, 0.025);

    parallax_el_full_scr.forEach((el) => {
      const speedx = parseFloat(el.dataset.speedx) / 7;
      const oldX = el.dataset.tx;
      const oldY = el.dataset.ty;
      var newValX = -targetX * speedx;
      var newValY = targetY * speedx;
      if (Math.abs(newValY) < threshold) {
        newValY = 0;
      }
      if (Math.abs(newValX) < threshold) {
        newValX = 0;
      }
      if (newValX === 0 && newValY === 0 && $(el).hasClass("inProgress")) {
        $(el).removeClass("inProgress");
      }
      el.style.transform = `translateX(calc(${oldX} + ${newValX}px)) translateY(calc(${oldY} - ${newValY}px))`;
    });
    if (document.querySelectorAll(".inProgress").length === 0) {
      return;
    }
    requestAnimationFrame(defaultPosition);
  }

  function triggerDefaultPosition() {
    par = 0;
    window.removeEventListener("mousemove", handleOrientation);
    window.removeEventListener("deviceorientation", handleOrientation);
    parallax_el_full_scr.forEach((el) => {
      el.classList.add("inProgress");
    });
    defaultPosition();
  }

  window.addEventListener("mousemove", handleOrientation);
  window.addEventListener("deviceorientation", handleOrientation);
  moveImg();
  window.stopParallax = triggerDefaultPosition;
}

export function stopParallax() {
  // parallaxInitialized = false;
  if (typeof window !== "undefined" && window.stopParallax) {
    window.stopParallax();
  }
}
