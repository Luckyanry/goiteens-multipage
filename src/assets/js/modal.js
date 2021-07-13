(() => {
    const refs = {
      openModalBtn: [...document.querySelectorAll('[data-modal-open]')],
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.forEach(e => {
      e.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }

    // Закрытие модального окна по клику на esc
    window.addEventListener('keydown', (e) => {
      if (!refs.modal.classList.contains('is-hidden')) {
        if(e.keyCode === 27) {
          refs.modal.classList.toggle('is-hidden');
        }
      }
      return;
    });

    // Закрытие модального окна по клику на backdrop
    window.addEventListener('click', (e) => {
      if (!refs.modal.classList.contains('is-hidden')) {
        if(e.target.classList.contains('backdrop')) {
          refs.modal.classList.toggle('is-hidden');
        }
      }
      return;
    });

  })();

(() => {
  const refs = {
    openTermsBtn: [...document.querySelectorAll('[data-terms]')],
    closeTermsBtn: [...document.querySelectorAll('[data-terms-close]')],
    termsModal: [...document.querySelectorAll('[data-termsmodal]')],
  };

  refs.openTermsBtn.forEach(e => {
    e.addEventListener("click", () => {
      e.preventDefault;
      toggleModal(e.dataset.terms);
    });
  });

  function toggleModal(currentModal) {
    refs.termsModal.forEach(e => {
      if(e.dataset.termsmodal === `${currentModal}`) {
        e.classList.toggle('is-terms-hidden');
      }
    });
  }

  refs.closeTermsBtn.forEach(e => {
    e.addEventListener('click', () => {
      e.closest('.backdrop').classList.toggle('is-terms-hidden');
    });
  });

  // // Закрытие модального окна по клику на esc
  // window.addEventListener('keydown', (e) => {
  //   if (!refs.modal.classList.contains('is-hidden')) {
  //     if(e.keyCode === 27) {
  //       refs.modal.classList.toggle('is-hidden');
  //     }
  //   }
  //   return;
  // });

  // // Закрытие модального окна по клику на backdrop
  // window.addEventListener('click', (e) => {
  //   if (!refs.modal.classList.contains('is-hidden')) {
  //     if(e.target.classList.contains('backdrop')) {
  //       refs.modal.classList.toggle('is-hidden');
  //     }
  //   }
  //   return;
  // });
})();
