let scrollTop, prgrsBar, perBar, imageWrap;
let documentH, windowH;
let x = 0, y = 0, mx = 0, my = 0, speed = 0.03;
let parallax0, parallax1, parallax2, parallax3, parallax4, parallax5, parallax6;

window.onload = function() {
  prgrsBar = document.getElementById('progressBar');
  imageWrap = document.getElementById('imageWrap');
  parallax0 = document.getElementById('parallax_0');
  parallax1 = document.getElementById('parallax_1');
  parallax2 = document.getElementById('parallax_2');
  parallax3 = document.getElementById('parallax_3');
  parallax4 = document.getElementById('parallax_4');
  parallax5 = document.getElementById('parallax_5');
  parallax6 = document.getElementById('parallax_6');

  window.addEventListener('resize', stageResize, false);
  window.addEventListener('mousemove', mouseMove, false);
  window.addEventListener('scroll', scrollFunc, false);

  stageResize();
  loop();
}

function stageResize() {
  documentH = document.body.offsetHeight;
  windowH = window.outerHeight;
}

function scrollFunc() {
  scrollTop = this.scrollY;

  let per = Math.ceil(scrollTop / (documentH - windowH) * 100);
  prgrsBar.style.width = per + "%";

  parallax0.style.transform = `translate3d(0px, ${scrollTop*.03}px, 0px)`;
  parallax1.style.transform = `translate3d(0px, ${-scrollTop*.03}px, 0px)`;
  parallax2.style.transform = `translate3d(0px, ${-scrollTop*.12}px, 0px)`;
  parallax3.style.transform = `translate3d(0px, ${-scrollTop*.16}px, 0px)`;
}

function loop() {
  mx += (x-mx)*speed;
  my += (y-my)*speed;

  parallax4.style.transform = `translate3d(${mx/140}px, ${-scrollTop*.22}px, 0px)`;
  parallax5.style.transform = `scale(1.1) translate(${mx/50}px, ${-scrollTop*.25}px)`;
  parallax6.style.transform = `scale(1.2) translate(${-mx/20}px, ${-my/20}px)`;

  window.requestAnimationFrame(loop)
}

function mouseMove(e) {
  x = (e.clientX - window.innerWidth / 2);
  y = (e.clientY - window.innerHeight / 2);
}
