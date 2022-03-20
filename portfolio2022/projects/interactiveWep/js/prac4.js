let scrollTop, bar;
let cloudWrap, cloudWrap2;

window.onload = function(){
  bar = document.getElementById('bar');
  cloudWrap = document.getElementsByClassName('cloudWrap')[0];
  cloudWrap2 = document.getElementsByClassName('cloudWrap')[1];
}

window.addEventListener("scroll", function(e){
  scrollTop = this.scrollY; //= this.document.documentElement.scrollTop;

  let per = Math.ceil(scrollTop / (this.document.body.scrollHeight - this.outerHeight) * 100);
  bar.style.height = per + "%";

  cloudWrap.style.transform = `translate(0, ${-scrollTop/2}px)`;
  cloudWrap2.style.transform = `translate(0, ${-scrollTop/1.4}px)`;
}, false)