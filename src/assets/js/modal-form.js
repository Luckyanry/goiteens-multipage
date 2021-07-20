const refs = {
  openModalBtn: [...document.querySelectorAll('[data-modal-open]')],
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  // body: document.querySelector('body'),
};

refs.openModalBtn.forEach(e => {
  e.addEventListener('click', toggleModal);
});
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

// Закрытие модального окна по клику на esc
window.addEventListener('keydown', e => {
  if (!refs.modal.classList.contains('is-hidden')) {
    if (e.keyCode === 27) {
      refs.modal.classList.toggle('is-hidden');
      // refs.body.classList.toggle('no-scroll');
    }
  }
  return;
});

// Закрытие модального окна по клику на backdrop
window.addEventListener('click', e => {
  if (!refs.modal.classList.contains('is-hidden')) {
    if (e.target.classList.contains('backdrop')) {
      refs.modal.classList.toggle('is-hidden');
      // refs.body.classList.toggle('no-scroll');
    }
  }
  return;
});
