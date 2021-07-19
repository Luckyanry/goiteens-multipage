const refs1 = {
  openTermsBtn: [...document.querySelectorAll('[data-terms]')],
  closeTermsBtn: [...document.querySelectorAll('[data-terms-close]')],
  termsModal: [...document.querySelectorAll('[data-termsmodal]')],
};

refs1.openTermsBtn.forEach(e => {
  e.addEventListener('click', () => {
    e.preventDefault;
    toggleModal1(e.dataset.terms);
  });
});

function toggleModal1(currentModal) {
  refs1.termsModal.forEach(e => {
    if (e.dataset.termsmodal === `${currentModal}`) {
      e.classList.toggle('is-hidden');
    }
  });
}

refs1.closeTermsBtn.forEach(e => {
  e.addEventListener('click', () => {
    e.closest('.backdrop').classList.toggle('is-hidden');
  });
});
