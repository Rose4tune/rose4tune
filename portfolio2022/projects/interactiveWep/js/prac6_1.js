let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function() {
  imageAll = document.getElementsByClassName("parallaxImg");
  totalNum = imageAll.length;

  window.addEventListener('scroll', scrollFunc);
}

function scrollFunc(e) {
  scrollTop = this.scrollY;

  for (let i = 0; i < totalNum; i++) {
    console.log(imageAll[i])
    imageAll[i].style.transform = `perspective(400px) translateZ(${scrollTop/(5*(totalNum-i))}px)`;
  }
}
