"use strict";

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
  $('.courses__img-link').magnificPopup({
    type: 'image'
  });
})();

(function () {
  $('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.testimonials__slider'
      }
    }]
  });
})();