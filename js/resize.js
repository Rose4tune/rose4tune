var resizeId = "";

window.addEventListener('resize', function(){
  clearTimeout(resizeId);
  resizeId = this.setTimeout(resizing, 250);
});

function resizing(){
  // console.log('resizing window : ' + window.innerWidth);
  // location.reload();
  // scrollTo(0,0);
}
