var $html = $("html");
var $sections = $("section");
var totalPage = $sections.length;
// console.log('totalPage : ' + totalPage);

// 페이지 기본 스크롤 이벤트 중지
window.addEventListener("scroll touchmove mousewheel", function(e){
  e.preventDefault();
},{passive:false});

// 페이지 상단이동 버튼
$('#pageUp').on('click', function() {
  $html.animate({scrollTop:0}, 1000);
});


// 각 section 별 상대좌표를 통한 절대좌표 구하기
var absoluteTopArr = [];
var scrolledTopLength = window.pageYOffset;
for (let i = 0; i < totalPage; i++) {
  const relativeTop = $sections[i].getBoundingClientRect().top;
  const absoluteTop = scrolledTopLength + relativeTop;
  absoluteTopArr.push(absoluteTop);
}
console.log('absoluteTopArr :' + absoluteTopArr);


// index 구하기
var index = [];
for (let i = 0; i < $sections.length; i++) {
  const idx = $sections[i];
  index.push(idx[i] = i)
}
// console.log($sections);
// console.log('index : ' + index);




// 반응형 화면 크기 구하기
window.onresize = function(){
  var clientWidth = document.documentElement.clientWidth; //화면 가로
  var clientHeight = document.documentElement.clientHeight; //화면 세로

  absoluteTopArr = [];
  for (var i = 0; i < totalPage; i++) {
    const relativeTop = $sections[i].getBoundingClientRect().top;
    const absoluteTop = scrolledTopLength + relativeTop;
    absoluteTopArr.push(absoluteTop);
  }
  console.log('absoluteTopArr :' + absoluteTopArr);
}


// 스크롤 된 화면 top bottom 구하기
window.onscroll = function() {  
  var yTop = window.pageYOffset; // 화면 Y측의 상단값
  var yBottom = yTop + window.innerHeight; // 화면 Y측의 하단값
  var scrollLine = (yBottom - 50);
  

  // for(var i = 0; i < absoluteTopArr.length; i++) {
  //   if(yTop > absoluteTopArr[i] && yTop <= absoluteTopArr[i + 1] && yTop - absoluteTopArr[i + 1] < 0){
  //     $html.animate({scrollTop: absoluteTopArr[i + 1]}, 1000);
  //     yTop = window.pageYOffset;
  //     break
  //   } else if(yTop > absoluteTopArr[i] && yTop <= absoluteTopArr[i + 1] && yTop - absoluteTopArr[i + 1] > 0){
  //     if (absoluteTopArr[i - 1] == undefined) {
  //         $html.animate({scrollTop: 0}, 1000);
  //       } else {
  //         $html.animate({scrollTop: absoluteTopArr[i]}, 1000);
  //       }
  //       yTop = window.pageYOffset;
  //       break
  //   }
  // }





  // console.log('wh :' + wh);
  // console.log('yTop :' + yTop);
  // console.log('yBottom :' + yBottom);
  // console.log('scrollLine :' + scrollLine);
  

}
// for(var i = 0; i < absoluteTopArr.length; i++) {
//   if(scrollLine > absoluteTopArr[i] && scrollLine <= absoluteTopArr[i + 1] && wh - yTop < 0) {
//     $html.animate({scrollTop:absoluteTopArr[i + 1]}, 1000);
//     wh = window.pageYOffset;
//     break
//   } else if(scrollLine > absoluteTopArr[i] && scrollLine <= absoluteTopArr[i + 1] && wh - yTop > 0) {
//     if (absoluteTopArr[i - 1] == undefined){
//       $html.animate({scrollTop:0}, 1000);
//     } else{
//       $html.animate({scrollTop:absoluteTopArr[i]}, 1000);
//     }
//     wh = window.pageYOffset;
//     break
//   }
// }


// var q = document.getElementsByTagName('section');
// var ls = window.pageYOffset;
// var arr = [];
// for (var i = 0; i < q.length; i++) {
//   arr.push(q[i].offsetTop);
//   console.log(i + "page top : " + q[i].offsetTop);
// }

// window.addEventListener('resize', function () {
//   arr = [];
//   for (var i = 0; i < q.length; i++) {
//     arr.push(q[i].offsetTop)
//   }
// })

// document.addEventListener('scroll', function () {
//   var cs = window.pageYOffset;
//   for (var i = 0; i < arr.length; i++) {
//     if (cs > arr[i] && cs <= arr[i + 1] && ls - cs < 0) {
//       window.scroll({ top: arr[i + 1]})
//       ls = window.pageYOffset;
//       break
//     } else if (cs > arr[i] && cs <= arr[i + 1] && ls - cs > 0) {
//       if (arr[i - 1] == undefined) {
//         window.scroll({ top: 0 })
//       } else {
//         window.scroll({ top: arr[i] })
//       }
//       ls = window.pageYOffset;
//       break
//     }
//   }
// });