"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var menuBtnRef = document.querySelector("[data-menu-button]");
  var mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", function () {
    var expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();

(function () {
  if (document.querySelector('.courses__img-link')) {
    $('.courses__img-link').magnificPopup({
      type: 'image'
    });
  }
})();

(function () {
  if (document.querySelector('.testimonials__slider')) {
    $('.testimonials__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      fade: true,
      cssEase: 'linear',
      speed: 1000,
      responsive: [{
        breakpoint: 767,
        settings: {
          asNavFor: '.testimonials__nav-slider'
        }
      }]
    });
    $('.testimonials__nav-slider').slick({
      infinite: true,
      arrows: false,
      mobileFirst: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.testimonials__slider'
        }
      }]
    });
  }
})();

(function () {
  if (document.querySelector('.teacher__slider')) {
    $('.teacher__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      centerMode: true,
      centerPadding: "90px",
      asNavFor: '.teacher__slider-content',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
    $('.teacher__slider-content').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      mobileFirst: true,
      swipe: false
    });
    $('.teacher__slider_desktop').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      }]
    });
    $('.speakers__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      centerMode: true,
      centerPadding: "90px",
      asNavFor: '.speakers__slider-content',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
    $('.speakers__slider-content').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      mobileFirst: true,
      swipe: false
    });
    $('.speakers__slider_desktop').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      }]
    });
  }
})();

(function () {
  if (document.querySelector('.testimonials__students-slider')) {
    var _ref;

    $('.testimonials__students-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      fade: true,
      cssEase: 'linear',
      speed: 1000,
      responsive: [(_ref = {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          fade: false
        }
      }, _defineProperty(_ref, "breakpoint", 1199), _defineProperty(_ref, "settings", {
        slidesToShow: 4,
        fade: false
      }), _ref)]
    });
  }
})();

(function () {
  if (document.querySelector('.testimonials__parents-slider')) {
    var _ref2;

    $('.testimonials__parents-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      fade: true,
      cssEase: 'linear',
      speed: 1000,
      responsive: [(_ref2 = {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          fade: false
        }
      }, _defineProperty(_ref2, "breakpoint", 1199), _defineProperty(_ref2, "settings", {
        slidesToShow: 4,
        fade: false
      }), _ref2)]
    });
  }
})();
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