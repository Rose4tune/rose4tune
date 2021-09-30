// HEADER //
var $sections = document.getElementsByTagName('section');
var totalPage = $sections.length;
var $menuBar = document.getElementById("menuBar");
var $hamburger = document.getElementById('hamburger');
var $gnbMenu = document.getElementById('gnb_menu');

window.onscroll = function () {
  const $logo = document.getElementById("logo");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //스크롤 시 헤더 숨기기
    $menuBar.classList.add('disable');
    $logo.classList.add('logo_icon');
  } else {
    //스크롤 시 헤더 보이기
    $logo.classList.remove('logo_icon');

    if ($hamburger.classList.contains('active') == true) {
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.remove('disable');
    };
  };
};

// HAMBURGER MENU
for (let i = 0; i < 3; i++) {
  // hamburger 라인 넣기
  let $span = document.createElement('span');
  $span.classList.add('line');
  $hamburger.append($span);
};

$hamburger.onclick = function () { 
  if ($hamburger.classList.contains('active') == true) {
    //gnb 메뉴 숨기기
    $hamburger.classList.remove('active');
    $gnbMenu.classList.add('disable');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.remove('disable');
    };
  } else {
    //gnb 메뉴 보이기
    $hamburger.classList.add('active');
    $gnbMenu.classList.remove('disable');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.add('disable');
    };
  };
};

// GNB MENU
for (let i = 0; i < totalPage; i++) {
  // section 별 gnb 메뉴 생성하기
  $('#gnb_menu').append("<li>" + $sections[i].dataset.title + "</li>");
};
$("#gnb_menu > li:first-child").addClass("on");

$('#gnb_menu > li').click(function () {
  // gnb 메뉴 클릭 시 해당 section으로 화면 scroll하기
  var gnbIndex = $(this).index() + 1;
  var length = 0;

  for (let i = 1; i < (gnbIndex); i++) {
    length += $('.s' + i).height();
  };

  if ($("body").find("main:animated").length >= 1) return false;
  $(this).addClass("on").siblings("li").removeClass("on");

  $('html').animate({ scrollTop: length }, 800, "swing");
  console.log(gnbIndex);
  console.log(length);
  return false;
});



// SNS //
// sns button 생성하기
var sns = '';
sns += `<a class="myblog" href="https://velog.io/@rose4tune" target="_black"></a>`;
sns += `<a class="mygit" href="https://github.com/Rose4tune" target="_black"></a>`;
$('.sns').append(sns);