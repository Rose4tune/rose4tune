$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menuBar .sns, .menuBar .mode").toggleClass("disable");
    $(".gnb-menu").toggleClass("disable");
  });
});

// SNS //
var sns = '';
sns += `<a class="myblog" href="https://velog.io/@rose4tune" target="_black"></a>`;
sns += `<a class="mygit" href="https://github.com/Rose4tune" target="_black"></a>`
$('.sns').append(sns);

// GNB MENU //
var $sections = $('section');
var totalPage = $sections.length;
var $gnbBox = $('ul.gnb-menu');
var $gnbMenu = $('ul.gnb-menu > li');
var $hamburger = $('.hamburger');

for(let i = 0; i < 3; i++){
  let $span = document.createElement('span');
  $span.classList.add('line');
  $hamburger.append($span);
}

for(let i = 0; i < totalPage; i++){
  $gnbBox.append("<li>" + $sections[i].dataset.title + "</li>");
};
$("ul.gnb-menu > li:first-child").addClass("on");

$('ul.gnb-menu > li').click(function(){
  var gnbIndex = $(this).index()+1;
  console.log(gnbIndex);
  var length = 0;
  for (let i = 1; i < (gnbIndex); i++){
    length+= $('.s' + i).height();
  }
  if($("body").find("main:animated").length >= 1) return false;
  $(this).addClass("on").siblings("li").removeClass("on");

  $('html').animate({scrollTop:length}, 800);
  console.log(-length);
  return false;
});
