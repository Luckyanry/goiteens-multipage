(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
})();

(() => {
  $('.courses__img-link').magnificPopup({type:'image'});
})();

(() => {
  $('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          asNavFor: '.testimonials__nav-slider',
        }
      }
    ]
  });

  $('.testimonials__nav-slider').slick({
    infinite: true,
    arrows: false,
    mobileFirst: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.testimonials__slider'
        }
      }
    ]
  });
})();