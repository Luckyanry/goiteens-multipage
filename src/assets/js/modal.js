window.addEventListener('DOMContentLoaded', function () {

const refs = {
  openTermsBtn: [...document.querySelectorAll('[data-terms]')],
  closeTermsBtn: [...document.querySelectorAll('[data-terms-close]')],
  termsModal: [...document.querySelectorAll('[data-termsmodal]')],
  body: document.querySelector('body'),
};

refs.openTermsBtn.forEach(e => {
  e.addEventListener('click', () => {
    e.preventDefault;
    toggleModal(e.dataset.terms);
  });
});

function toggleModal(currentModal) {
  refs.termsModal.forEach(e => {
    if (e.dataset.termsmodal === `${currentModal}`) {
      e.classList.toggle('is-hidden');
    }
    refs.body.classList.toggle('no-scroll');
  });
}

refs.closeTermsBtn.forEach(e => {
  e.addEventListener('click', () => {
    e.closest('.backdrop').classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  });
});

});
