"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var refs = {
    openModalBtn: _toConsumableArray(document.querySelectorAll('[data-modal-open]')),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  };
  refs.openModalBtn.forEach(function (e) {
    e.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  } // Закрытие модального окна по клику на esc


  window.addEventListener('keydown', function (e) {
    if (!refs.modal.classList.contains('is-hidden')) {
      if (e.keyCode === 27) {
        refs.modal.classList.toggle('is-hidden');
      }
    }

    return;
  }); // Закрытие модального окна по клику на backdrop

  window.addEventListener('click', function (e) {
    if (!refs.modal.classList.contains('is-hidden')) {
      if (e.target.classList.contains('backdrop')) {
        refs.modal.classList.toggle('is-hidden');
      }
    }

    return;
  });
})();

(function () {
  var refs = {
    openTermsBtn: _toConsumableArray(document.querySelectorAll('[data-terms]')),
    closeTermsBtn: _toConsumableArray(document.querySelectorAll('[data-terms-close]')),
    termsModal: _toConsumableArray(document.querySelectorAll('[data-termsModal]'))
  };
  refs.openTermsBtn.forEach(function (e) {
    e.addEventListener("click", function () {
      e.preventDefault;
      toggleModal(e.dataset.terms);
    });
  });

  function toggleModal(currentModal) {
    refs.termsModal.forEach(function (e) {
      if (e.dataset.termsmodal === "".concat(currentModal)) {
        e.classList.toggle('is-terms-hidden');
      }
    });
  }

  refs.closeTermsBtn.forEach(function (e) {
    e.addEventListener('click', function () {
      e.closest('.backdrop').classList.toggle('is-terms-hidden');
    });
  }); // // Закрытие модального окна по клику на esc
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