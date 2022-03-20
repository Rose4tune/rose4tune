let scrollTop, bar;

window.onload = function(){
  bar = document.getElementById('bar');
}

window.addEventListener("scroll", function(e){
  // scrollTop = this.document.documentElement.scrollTop;
  scrollTop = this.scrollY;

  let per = Math.ceil(scrollTop / (this.document.body.scrollHeight - this.outerHeight) * 100);
  // console.log(scrollTop, per)

  bar.style.width = per + "%";
}, false)