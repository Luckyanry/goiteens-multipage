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