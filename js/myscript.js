// $(document).ready(function () {
//   $(".hamburger").click(function () {
//     $(this).toggleClass("active");
//     $("#menuBar").toggleClass("disable");
//     $(".gnb_menu").toggleClass("disable");
//     $("#gnb").toggleClass("toRight");
//   });
// });

// SNS //
var sns = '';
sns += `<a class="myblog" href="https://velog.io/@rose4tune" target="_black"></a>`;
sns += `<a class="mygit" href="https://github.com/Rose4tune" target="_black"></a>`
$('.sns').append(sns);

// GNB MENU //
var $sections = document.getElementsByTagName('section');
var totalPage = $sections.length;
var $hamburger = document.getElementById('hamburger');
var $gnbMenu = document.getElementById('gnb_menu');

for(let i = 0; i < 3; i++){
  let $span = document.createElement('span');
  $span.classList.add('line');
  $hamburger.append($span);
}

for(let i = 0; i < totalPage; i++){
  $('#gnb_menu').append("<li>" + $sections[i].dataset.title + "</li>");
};
$("#gnb_menu > li:first-child").addClass("on");

$('#gnb_menu > li').click(function(){
  var gnbIndex = $(this).index()+1;
  var length = 0;

  for (let i = 1; i < (gnbIndex); i++){
    length += $('.s' + i).height();
  }

  if($("body").find("main:animated").length >= 1) return false;
  $(this).addClass("on").siblings("li").removeClass("on");

  $('html').animate({scrollTop:length}, 800, "swing");
  console.log(gnbIndex);
  console.log(length);
  return false;
});


// HEADER //
window.onscroll = function() {
  headerDisable()
};

var $menuBar = document.getElementById("menuBar");
function headerDisable() {
  const $logo = document.getElementById("logo");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $menuBar.classList.add('disable');
    $logo.classList.add('logo_icon');
  } else {
    $logo.classList.remove('logo_icon');

      if($hamburger.classList.contains('active') == true){
        $menuBar.classList.add('disable');
      } else {
        $menuBar.classList.remove('disable');
      }
  };
};

// HAMBURGER MENU //
$hamburger.onclick = function() {
  if($hamburger.classList.contains('active') == true){
    $hamburger.classList.remove('active');
    $gnbMenu.classList.add('disable');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.remove('disable');
    }
  } else {
    $hamburger.classList.add('active');
    $gnbMenu.classList.remove('disable');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.add('disable');
    }
  }
}
