import $ from 'jquery';
import slick from 'slick-carousel';

$('.awards-slider-js').slick({
  arrows: false,
  dots: true,
  // adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 400,
  infinite: true,
  cssEase: 'linear',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1279,
      settings: 'unslick',
    },
  ],
});

$('.review-slider-js').slick({
  mobileFirst: true,
  lazyLoad: 'ondemand',
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 400,
  infinite: true,
  cssEase: 'linear',
  centerMode: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
        arrows: true,
        focusOnSelect: true,
        centerPadding: '22%',
        appendArrows: '.review-button',
        prevArrow: $('.prev-but-js'),
        nextArrow: $('.next-but-js'),
      },
    },
    {
      breakpoint: 1279,
      settings: {
        arrows: true,
        focusOnSelect: true,
        centerPadding: '20%',
        appendArrows: '.review-button',
        prevArrow: $('.prev-but-js'),
        nextArrow: $('.next-but-js'),
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        // centerPadding: '115px 0 0',
        appendArrows: '.review-button',
        prevArrow: $('.prev-but-js'),
        nextArrow: $('.next-but-js'),
      },
    },
  ],
});

$('.projects-slider-js').slick({
  mobileFirst: true,
  dots: true,
  arrows: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 400,
  infinite: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
