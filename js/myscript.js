var $sections = document.getElementsByTagName('section');
var totalPage = $sections.length;
var $html = $("html");

// HEADER //
var $menuBar = document.getElementById("menuBar");
var $hamburger = document.getElementById('hamburger');
var $gnbMenu = document.getElementById('gnb_menu');

window.onscroll = function () {
  headerScroll();
  photoScroll();
};

window.onload = function() {
  gnbMove();
}

function headerScroll(){
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
}

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
  // section 별 gnb 메뉴 생성하기
for (let i = 0; i < totalPage; i++) {
  $('#gnb_menu').append("<li>" + $sections[i].dataset.title + "</li>");
};
$("#gnb_menu > li:first-child").addClass("on");

  // gnb 메뉴 클릭 시 해당 section으로 화면 scroll하기
$("#gnb_menu > li").click(function () {
  var gnbIndex = $(this).index() + 1;
  var length = 0;

  for (let i = 1; i < (gnbIndex); i++) {
    length += $('.s' + i).height();
  };

  if ($("body").find("main:animated").length >= 1) return false;
  $(this).addClass("on").siblings("li").removeClass("on");

  $html.animate({scrollTop: length}, 800, "swing");
  return false;
});

  // 화면 스크롤 시 gnb 메뉴 옮기기
function gnbMove(){
  $(window).on('mousewheel', function(e) {
    var $pages = $("#gnb_menu li");
    var $pageOn = $("#gnb_menu li.on");
    var pageOnIdx = $pageOn.index();

    console.log('pageIndex : ' + pageOnIdx);

    if ($("body").find("main:animated").length >= 1) return false;

    //마우스 휠 위로
    if(e.originalEvent.wheelDelta >= 0) {
      if(pageOnIdx >= 0){
        $pageOn.prev().addClass('on').siblings('.on').removeClass('on');
      }
      
      var pageHeight = 0;
      for(var i = 1; i < (pageOnIdx); i++) {
        pageHeight += $('.s' + i).height();
      }

      if(pageOnIdx > 0){
        console.log('here pageHeight : ' + pageHeight);
        $html.animate({scrollTop: pageHeight}, 800, "swing");
      }

    } else {
      var nextPage = parseInt(pageOnIdx + 1); // 다음 페이지 번호
      var lastPageNum = $pages.length; // 마지막 페이지 번호
      
      if(pageOnIdx <= lastPageNum - 1){
        $pageOn.next().addClass('on').siblings('.on').removeClass('on');
      }

      if(nextPage < lastPageNum) {
        var pageHeight = 0;
        for(var i = 1; i < (nextPage + 1); i++) {
          pageHeight += $('.s' + i).height();
        }
        $html.animate({scrollTop: pageHeight}, 800, "swing");
      }
    }
  });
}
  

var wTop = window.pageYOffset;
var arr = []; //section 절대좌표 배열
for (let i = 0; i < totalPage; i++) {
  var relativeTop = $sections[i].getBoundingClientRect().top;
  var absoluteTop = wTop + relativeTop;
  arr.push(absoluteTop);
}

$('.scroll_icon').click(function() {
  $html.animate({scrollTop: arr[1]}, 800, "swing");
})




// SNS //
var sns = ''; // sns button 생성하기
sns += `<a class="myblog" href="https://velog.io/@rose4tune" target="_blank"></a>`;
sns += `<a class="mygit" href="https://github.com/Rose4tune" target="_blank"></a>`;
$('.sns').append(sns);




// 페이지 상단이동 버튼
$('#pageUp').on('click', function() {
  $html.animate({scrollTop:0}, 1000);
});



// 프로필 사진 이동
function photoScroll(){
  var $photo = document.getElementById('photo');
  if(window.pageYOffset < arr[1]/4){
    $photo.style.top = -96 + 'vh';
    $photo.style.width = 80 + '%';
  } else if(window.pageYOffset > arr[0]) {
    $photo.style.top = 0 + 'px';
    $photo.style.width = 60 + '%';
  }
};



// about section
$(document).ready(function(){
  $('.about').slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

var slideDots = document.querySelector('.about .slick-dotted');
// var slideDotActive = document.querySelector('.about .slick-dots li.slick-active button:before');
// var slideDotIndex = slideDots.index();

console.log(slideDots);
// for (let i = 0; i <= slideDotIndex; i++){
// }