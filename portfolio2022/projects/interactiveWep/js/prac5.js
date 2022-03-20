let scrollTop, titleWrap, h1;
let x = 0, y = 0, mx = 0, my = 0, speed = .02;

window.onload = function(){
  titleWrap = document.getElementById('titleWrap');
  h1 = document.getElementsByTagName('h1')[0];
  cover = document.getElementsByClassName("cover")[0];
  cover.style.opacity = .3;
}
window.addEventListener("scroll", function(){
  scrollTop = this.scrollY;
  
  // titleWrap.style.backgroundPosition = `center ${50% - scrollTop/20}px`;
  h1.style.transform = `translate(0, ${-(scrollTop/10)}px)`;
  titleWrap.style.transform = `scale(${1 + scrollTop/1000})`;
  cover.style.opacity = .3 + scrollTop/7000;
});