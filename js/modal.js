// const modal = document.getElementsByClassName("modal")[0];
// function modalOn() {
//   modal.style.display = "flex";
//   $("html, body").addClass("not_scroll");
//   $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
//       e.preventDefault();
//   });
// };
// function isModalOn() {
//   return modal.style.display === "flex";
// };
// function modalOff() {
//   modal.style.display = "none";
//   $("html, body").removeClass("not_scroll");
//   $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
// };

// const btnModal = document.getElementsByClassName("btn_modal");
// const btnModalCnt = btnModal.length;
// for (let i = 0; i < btnModalCnt; i++) {
//   btnModal[i].addEventListener("click", e => {
//     modalOn();
// });
// }



// const closeBtn = modal.querySelector(".btn_close");
// closeBtn.addEventListener("click", e => {
//   modalOff();
// });
// modal.addEventListener("click", e => {
//   const evTarget = e.target
//   if (evTarget.classList.contains("modal_overlay")) {
//     modalOff()
//   };
// });
// window.addEventListener("keyup", e => {
//   if (isModalOn() && e.key === "Escape") {
//     modalOff()
//   };
// });