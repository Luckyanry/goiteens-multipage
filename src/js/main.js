$(document).ready(function () {
  var utm_source = getUrlParameter('utm_source');
  var utm_medium = getUrlParameter('utm_medium');
  var utm_term = getUrlParameter('utm_term');
  var utm_campaign = getUrlParameter('utm_campaign');
  var utm_content = getUrlParameter('utm_content');
  $('input[name=utm_source]').val(utm_source);
  $('input[name=utm_medium]').val(utm_medium);
  $('input[name=utm_term]').val(utm_term);
  $('input[name=utm_campaign]').val(utm_campaign);
  $('input[name=utm_content]').val(utm_content);

  // $('input[type="tel"]').mask("+38(999)999-99-99");
  //$('input[type="tel"]').inputmask("+380(99)999-99-99"); //маска
  $('form').on('submit', function (e) {
    console.log('click');
    e.preventDefault();
    if (
      $(this).find(
        'input[name="email"]' || $(this).find('input[name="phone"]').val(),
      )
    ) {
      $('.submit').prop('disabled', true);
      var $form = $(this);

      $.ajax({
        type: 'POST',
        url: 'crm/registration.php',
        dataType: 'json',
        data: $form.serialize(),
        success: function (response) {
          if (response.status == 'success') {
            //window.location.href = "ok";
            console.log('ok');
          }
        },
      });
      $(this).html(
        `<h2 style="font-size:18px; font-family: HelveticaB;margin-bottom: 2rem;text-align: center;text-transform:uppercase;">Дякуємо!</h2><p style="font-size: 1rem;text-align:center;font-family:HelveticaR;line-height: 1.2;">Ваша заявка прийнята. Наші консультанти зв'яжуться <br> з вами найближчим часом!</p>`,
      );
    }
  });
});

// script to get utm
function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

//awards-slider

$(document).ready(function () {
  $('.awards__slider').slick({
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    infinite: false,
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
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

//projects-slider
$(document).ready(function () {
  $('.projects-slider-js').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 400,
    infinite: true,
    cssEase: 'linear',
    // centerMode: true,
    // centerPadding: "0px",
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
        }
      },
    ],
  });
});
