import $ from 'jquery';
import slick from 'slick-carousel';

$(document).ready(function () {
  $('.awards-slider-js').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    infinite: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 200,
        settings: 'unslick',
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 1279,
        settings: 'unslick',
      },
    ],
  });

  $('.students-review-slider-js').slick({
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
          prevArrow: $('.students-prev-but-js'),
          nextArrow: $('.students-next-but-js'),
        },
      },
      {
        breakpoint: 1279,
        settings: {
          arrows: true,
          focusOnSelect: true,
          centerPadding: '20%',
          prevArrow: $('.students-prev-but-js'),
          nextArrow: $('.students-next-but-js'),
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,

          prevArrow: $('.students-prev-but-js'),
          nextArrow: $('.students-next-but-js'),
        },
      },
    ],
  });

  $('.parent-review-slider-js').slick({
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
        breakpoint: 1279,
        settings: {
          arrows: true,
          focusOnSelect: true,
          prevArrow: $('.parent-prev-but-js'),
          nextArrow: $('.parent-next-but-js'),
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,

          prevArrow: $('.parent-prev-but-js'),
          nextArrow: $('.parent-next-but-js'),
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
    infinite: false,
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
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.teachers-slider-js').slick({
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.speakers-slider-js').slick({
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
