const modal = document.getElementsByClassName("modal")[0]
function modalOn() {
  modal.style.display = "flex";
  $("html, body").addClass("not_scroll");

};
function isModalOn() {
  return modal.style.display === "flex";
};
function modalOff() {
  modal.style.display = "none";
  $("html, body").removeClass("not_scroll");
};
const btnModal = document.getElementsByClassName("btn_modal")[0]
btnModal.addEventListener("click", e => {
  modalOn();
});
const closeBtn = modal.querySelector(".btn_close");
closeBtn.addEventListener("click", e => {
  modalOff();
});
modal.addEventListener("click", e => {
  const evTarget = e.target
  if (evTarget.classList.contains("modal_overlay")) {
    modalOff()
  };
});
window.addEventListener("keyup", e => {
  if (isModalOn() && e.key === "Escape") {
    modalOff()
  };
});