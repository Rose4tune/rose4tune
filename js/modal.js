const modal = document.getElementsByClassName("modal")[0]
function modalOn() {
  modal.style.display = "flex";
  $('.modal').on('scroll touchmove mousewheel', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
};
function isModalOn() {
  return modal.style.display === "flex";
};
function modalOff() {
  modal.style.display = "none";
  $('.modal').off('scroll touchmove mousewheel');
};
const btnModal = document.getElementsByClassName("btn-modal")[0]
btnModal.addEventListener("click", e => {
  modalOn();
});
const closeBtn = modal.querySelector(".btn_close")
closeBtn.addEventListener("click", e => {
  modalOff();
});
modal.addEventListener("click", e => {
  const evTarget = e.target
  if (evTarget.classList.contains("modal-overlay")) {
    modalOff()
  };
});
window.addEventListener("keyup", e => {
  if (isModalOn() && e.key === "Escape") {
    modalOff()
  };
});