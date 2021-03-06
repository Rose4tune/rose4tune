var $html = $("html");
var $body = $('body');
var $main = $('main');

var $sections = $('section');
var totalPage = $sections.length;

// Responsible //
var mobile = window.matchMedia('(max-width: 321px)');
var tablet = window.matchMedia('(max-width: 769px)');
var labtop = window.matchMedia('(max-width: 1025px)');

// HEADER //
var $menuBar = document.getElementById("menuBar");
var $hamburger = document.getElementById('hamburger');
var $gnbMenu = document.getElementById('gnb_menu');
var $logo = document.getElementById("logo");


// window.addEventListener('onload', function () {
//   scroll();
//   photoScroll();
//   skillNextArrow();
//   window.scrollTo(0, 0);
// });

// window.addEventListener('scroll', function () {
//   scroll();
//   headerScroll();
//   photoScroll();
//   skillNextArrow();
//   pageUp();
// });

// window.addEventListener('resize', function () {
//   scroll();
// });


window.onscroll = function () {
  scroll();
  headerScroll();
  photoScroll();
  skillNextArrow();
  pageUp();
};

window.onload = function() {
  // gnbMove();
  scroll();
  photoScroll();
  skillNextArrow();
  window.scrollTo(0, 0);
}


function headerScroll(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //스크롤 시 헤더 숨기기
    $menuBar.classList.add('disable');
    $logo.classList.add('logo_icon');

  } else if(labtop.matches){
    $logo.classList.add('logo_icon');
  } else {
    //스크롤 시 헤더 보이기
    $logo.classList.remove('logo_icon');

    if ($hamburger.classList.contains('active') == true) {
      $menuBar.classList.add('disable');
    } else if(labtop.matches){
        $menuBar.classList.add('disable');
    } else{
      $menuBar.classList.remove('disable');
    };
  };
}

if(labtop.matches){
  $menuBar.classList.add('disable');
  $logo.classList.add('logo_icon');
}

// HAMBURGER MENU
for (let i = 0; i < 3; i++) {
  // hamburger 라인 넣기
  let $span = document.createElement('span');
  $span.classList.add('line');
  $hamburger.append($span);
};

var $gnbLayer = document.getElementById('gnb_layer');

$hamburger.onclick = function () { 
  if ($hamburger.classList.contains('active') == true) {
    //gnb 메뉴 숨기기
    $hamburger.classList.remove('active');
    $gnbMenu.classList.add('disable');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $menuBar.classList.add('disable');
    } else if(labtop.matches){
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.remove('disable');
    };
    if (labtop.matches) {
      $gnbLayer.style.display = 'none';
    }
  } else {
    //gnb 메뉴 보이기
    $hamburger.classList.add('active');
    $gnbMenu.classList.remove('disable');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $menuBar.classList.add('disable');
    } else {
      $menuBar.classList.add('disable');
    };
    if (labtop.matches) {
      $gnbLayer.style.display = 'block';
    }
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

  // $html.animate({scrollTop: length}, 800, "swing");
  
  if (labtop.matches) {
    $html.animate({ scrollTop: length }, 800, "swing");
  } else {
    $main.animate({ "top": mainTop += -(mainTop + length) }, 800, "swing");
  }
  return false;
});


if (labtop.matches) {
  $html.removeClass('onscroll');
  $body.removeClass('onscroll');
} else {
  $html.addClass('onscroll');
  $body.addClass('onscroll');
}


  // 화면 스크롤 시 gnb 메뉴 옮기기
// function gnbMove(){
//   $(window).on('mousewheel', function(e) {
//     var $pages = $("#gnb_menu li");
//     var $pageOn = $("#gnb_menu li.on");
//     var pageOnIdx = $pageOn.index();

//     console.log('pageIndex : ' + pageOnIdx);

//     if ($("body").find("main:animated").length >= 1) return false;

//     //마우스 휠 위로
//     if(e.originalEvent.wheelDelta >= 0) {
//       if(pageOnIdx >= 0){
//         $pageOn.prev().addClass('on').siblings('.on').removeClass('on');
//       }
      
//       var pageHeight = 0;
//       for(var i = 1; i < (pageOnIdx); i++) {
//         pageHeight += $('.s' + i).height();
//       }

//       if(pageOnIdx > 0){
//         console.log('here pageHeight : ' + pageHeight);
//         $html.animate({scrollTop: pageHeight}, 800, "swing");
//       }

//     } else {
//       var nextPage = parseInt(pageOnIdx + 1); // 다음 페이지 번호
//       var lastPageNum = $pages.length; // 마지막 페이지 번호
      
//       if(pageOnIdx <= lastPageNum - 1){
//         $pageOn.next().addClass('on').siblings('.on').removeClass('on');
//       }

//       if(nextPage < lastPageNum) {
//         var pageHeight = 0;
//         for(var i = 1; i < (nextPage + 1); i++) {
//           pageHeight += $('.s' + i).height();
//         }
//         $html.animate({scrollTop: pageHeight}, 800, "swing");
//       }
//     }
//   });
// }


var mainTop = parseInt($main.css("top"));
var secHeight = $sections.height();
var totalPage = $sections.length;
var $pages = $("#gnb_menu li");

var d = false;

function downPage() {
  const $pageOn = $("#gnb_menu li.on");
  const pageOnIdx = $pageOn.index();

  if (labtop.matches) {
    const winY = window.pageYOffset;
    for (let i = 0; i < arr.length; i++) {
      const bottomLine = parseInt(arr[i+1]) - 10;
      if(winY >= bottomLine){
        const thispage = $pages[i+1];
        $pages.removeClass('on');
        thispage.classList.add('on');
      }
    }
  } else {
    if (pageOnIdx <= totalPage - 1) {
      $pageOn.next().addClass('on').siblings('.on').removeClass('on');
    }
    d = true;
    $main.stop().animate({
      "top": mainTop += -secHeight
    }, 800, function () {
      d = false;
    });
  }
}

function upPage() {
  const $pageOn = $("#gnb_menu li.on");
  const pageOnIdx = $pageOn.index();

  if (labtop.matches) {
    const winY = window.pageYOffset;
    for (let i = 0; i < arr.length; i++) {
      const bottomLine = parseInt(arr[i+1]) - 10;
      if(winY >= arr[i] && winY < bottomLine){
        const thispage = $pages[i];
        $pages.removeClass('on');
        thispage.classList.add('on');
      }
    }
  } else {
    if (pageOnIdx >= 0) {
      $pageOn.prev().addClass('on').siblings('.on').removeClass('on');
    }
    d = true;
    $main.stop().animate({
      "top": mainTop += secHeight
    }, 800, function () {
      d = false;
    });
  }
}

// 크롬, 익스, 사파리, 오페라 mousewheel / 파이어폭스 DOMMouseScroll
$(function () {
  $("html, body").on('mousewheel DOMMouseScroll', function (e) {
    var E = e.originalEvent;

    delta = 0;
    // DOMMouseScroll 처리
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    };

    // Mousewheel 처리
    if (E.wheelDelta < 0 && mainTop > (totalPage - 1) * -secHeight && !d) {
      downPage();
    };
    if (E.wheelDelta > 0 && !d) {
      upPage();
    };
  });
});

// 뱡향키 제어
window.onkeyup = function (e) {
  const code = e.keyCode;
  const lastSecHeight = (totalPage - 2) * -secHeight;
  // down
  if (mainTop >= lastSecHeight && !d) {
    if (code == 40 || code == 32 || code == 13 || code == 34) {
      downPage();
    }
  }
  // up
  if (mainTop < 0 && !d) {
    if (code == 33 || code == 38) {
      upPage();
    }
  }
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
  $("#gnb_menu > li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
})



// SNS //
var sns = ''; // sns button 생성하기
sns += `<a class="myblog" href="https://velog.io/@rose4tune" target="_blank"></a>`;
sns += `<a class="mygit" href="https://github.com/Rose4tune" target="_blank"></a>`;
$('.sns').append(sns);




// 페이지 상단이동 버튼
$('#pageUp').on('click', function() {
  $html.animate({scrollTop:0}, 1000);
  $("#gnb_menu > li:first-child").addClass("on").siblings("li").removeClass("on");
});

function pageUp (){
  if(window.pageYOffset < arr[1]){
    console.log('arr 1 :' + arr[1]);
    $('#pageUp').addClass('disable');
  } else {
    $('#pageUp').removeClass('disable');
  }
}



// 프로필 사진 이동
function photoScroll(){
  var $photo = document.getElementById('photo');
  if (window.innerWidth < 481) {
    $photo.style.position = 'inherit';
    $photo.style.top = 0;
    $photo.style.width = 100 + '%';
    $photo.style.height = 50 + 'vh';
  } else if (window.innerWidth < 1025) {
    $photo.style.position = 'inherit';
    $photo.style.top = 0;
    $photo.style.width = 65 + '%';
    $photo.style.height = 50 + 'vh';
  } else if(window.pageYOffset < arr[1]/4){
    $photo.style.top = -96 + 'vh';
    $photo.style.width = 80 + '%';
    $photo.style.height = 70 + 'vh';
  } else if(window.pageYOffset > arr[0]) {
    $photo.style.top = 0 + 'px';
    $photo.style.width = 60 + '%';
    $photo.style.height = 50 + 'vh';
  }
};

// about section
$(window).resize(function(){ 
  if (window.innerWidth > 1025) {
    $(document).ready(function(){
      $('.about').slick({
        dots: true,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    });
  } else { 
    $('.about').slick({
      dots: true,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true
    });
  }
}).resize();

var skillNextBtn = document.getElementById('skillNextBtn');
var viewHeight = document.documentElement.clientHeight;
var publishing = arr[3] - viewHeight;

function skillNextArrow () {
  if(window.pageYOffset <= arr[2]) {
    skillNextBtn.style.transform = 'rotate(0deg) translate(-50%, 0)';
  } else {
    skillNextBtn.style.transform = 'rotate(180deg) translate(50%, 0)';
  }
}

skillNextBtn.onclick = function(){
  if(window.pageYOffset > arr[2]) {
    $html.animate({scrollTop: arr[2]}, 800, "swing");
    skillNextBtn.style.transform = 'rotate(0deg) translate(-50%, 0)';
  } else {
    $html.animate({scrollTop: publishing}, 800, "swing");
    skillNextBtn.style.transform = 'rotate(180deg) translate(50%, 0)';
  }
}



// Create Modal/Link Button
var $btn_modal = document.getElementsByClassName('btn_modal');
var btn_modalCnt = $btn_modal.length;

var btns_hover = [];
var btns_text = [];
for(let i = 0; i < btn_modalCnt; i++) {
  const $span_line = document.createElement('span');
  const $span_text = document.createElement('span');
  
  btns_hover.push($btn_modal[i].dataset.hover);
  btns_text.push($btn_modal[i].dataset.text);

  $span_line.classList.add('btn_line');
  $span_text.classList.add('btn_text');
  $span_text.textContent = btns_text[i];
  
  
  if($btn_modal[i].dataset.btntype == 'link') {
    var $button = document.createElement('a');
    // const $btnLink = $btn_modal[i].dataset.value;
    // console.log($btn_modal[i].dataset.value);

    // $button.href = $btnLink;
    // $button.target = "_black";

  } else if($btn_modal[i].dataset.btntype == 'modal') {
    var $button = document.createElement('button');
  }
  
  $button.classList.add('open', 'button');
  $button.dataset.hover = btns_hover[i];
  $button.appendChild($span_text);
  $btn_modal[i].append($span_line, $button);
}





// Section 4 - Projects // Create Contents
var project = document.getElementsByClassName('project');
var projectCnt = project.length;

var pjTitle = [];
var imgSrc = [];
for(let i = 0; i < projectCnt; i++) {
  pjTitle.push(project[i].dataset.project);

  const $img = document.createElement('img');
  $img.src = '/images/main/project' + [i+1] + '.jpg';
  $img.alt = pjTitle[i];

  const $span = document.createElement('span');
  $span.textContent = pjTitle[i];

  const $div = document.createElement('div');
  $div.classList.add('image');
  $div.dataset.project = pjTitle[i];
  $div.append($img, $span);
  project[i].appendChild($div);
}

$("#projects img, #projects .image span").click(function (){
  const contentBox = $(this).parents('li.project');
  const allBoxes = contentBox.siblings('li');
  const boxCnt = allBoxes.length + 1;
  console.log('boxCnt :' + boxCnt);

  if(contentBox.hasClass('view') == true) {
    contentBox.removeClass('view').css('width', 100/boxCnt+'vw');
    allBoxes.removeClass('view').css('width', 100/boxCnt+'vw');
    $('.s4 h2').css('display', 'block');
    $('.s4 .image span').css({
      'top':'50%',
      'left':'50%',
      'transform':'translate(-50%, 50%)'
    });
  } else {
    allBoxes.removeClass('view').css('width','6vw');
    contentBox.addClass('view').css('width', 100-(6*(boxCnt-1))+'vw');
    $('.s4 h2').css('display', 'none');
    $('.s4 .image span').css({
      'top':'18vh',
      'left':'0',
      'white-space':'nowrap',
      'transform':'rotate(90deg) translate(0, 0)'
    });
    if (labtop.matches) {
      $('.s4 h2').css('display', 'block');
      $('.s4 .image span').css({
        'top':'50%',
        'left':'50%',
        'transform':'translate(-50%, 0)'
      });
    }
  }
});
if (labtop.matches) {
  $('.pjClose').click(function (){
    const contentBox = $(this).parents('li.project');
    const allBoxes = contentBox.siblings('li');
    contentBox.removeClass('view');
    allBoxes.removeClass('view').css('width','auto');
    $('.s4 h2').css('display', 'block');
    $('.s4 .image span').css({
      'top':'50%',
      'left':'50%',
      'transform':'translate(-50%, 0)'
    });
  });
}

// 탭메뉴 만들기
var $pjTabBox = document.getElementsByClassName('pjTabBox');
var pjTabBoxCnt = $pjTabBox.length;
// var pjTabTitle = ['summary', 'plan', 'wireframe', 'design', 'informaion architetuer'];
var pjTabTitle = ['summary', 'design'];
var pjTabCnt = pjTabTitle.length;

for(let i = 0; i < pjTabBoxCnt; i++) {
  var pjTabs = [];
  for(let j = 0; j < pjTabCnt; j++) {
    const pjTab = document.createElement('li');
    pjTab.classList.add('button');
    pjTab.textContent = pjTabTitle[j];
    pjTabs.push(pjTab);
    $pjTabBox[i].append(pjTabs[j]);
  }
}

// 탭 메뉴 작동시키기
$('.pjTabBox li:first-child').addClass('on');
$('.tabContent li:first-child').addClass('on');

$('.pjTabBox li').click(function(){
  const pjTabIdx = $(this).index();
  const pjContents = $(this).parents('ul').siblings('.tabContent').find('li');
  $(this).addClass("on").siblings("li").removeClass("on");
  pjContents.removeClass('on');
  pjContents[pjTabIdx].classList.add('on');
});

