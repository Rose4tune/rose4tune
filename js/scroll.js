
    var $html = $('html');
    var $body = $('body');
    var $main = $('main');

    var labtop = window.matchMedia('(max-width: 1025px)');

    var $hamburger = document.getElementById('hamburger');
    var $sections = $('section');
    var $gnbMenu = document.getElementById('gnb_menu');
    var totalPage = $sections.length;


    window.addEventListener('onload', function () {
      scroll();
    });

    window.addEventListener('scroll', function () {
      scroll();
    });

    window.addEventListener('resize', function () {
      scroll();
    });

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
      } else {
        //gnb 메뉴 보이기
        $hamburger.classList.add('active');
        $gnbMenu.classList.remove('disable');
      };
    };

    var wTop = window.pageYOffset;
    var arr = []; //section 절대좌표 배열
    for (let i = 0; i < totalPage; i++) {
      var relativeTop = $sections[i].getBoundingClientRect().top;
      var absoluteTop = wTop + relativeTop;
      arr.push(absoluteTop);
    }

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

      $(this).addClass("on").siblings("li").removeClass("on");

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

