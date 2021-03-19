"use strict";

$(document).ready(function () {
  var utm_source = getUrlParameter("utm_source");
  var utm_medium = getUrlParameter("utm_medium");
  var utm_term = getUrlParameter("utm_term");
  var utm_campaign = getUrlParameter("utm_campaign");
  var utm_content = getUrlParameter("utm_content");
  $("input[name=utm_source]").val(utm_source);
  $("input[name=utm_medium]").val(utm_medium);
  $("input[name=utm_term]").val(utm_term);
  $("input[name=utm_campaign]").val(utm_campaign);
  $("input[name=utm_content]").val(utm_content); // $('input[type="tel"]').mask("+38(999)999-99-99");
  //$('input[type="tel"]').inputmask("+380(99)999-99-99"); //маска

  $("form").on("submit", function (e) {
    console.log("click");
    e.preventDefault();

    if ($(this).find('input[name="email"]' || $(this).find('input[name="phone"]').val())) {
      $(".submit").prop("disabled", true);
      var $form = $(this);
      $.ajax({
        type: "POST",
        url: "crm/registration.php",
        dataType: "json",
        data: $form.serialize(),
        success: function success(response) {
          if (response.status == "success") {
            //window.location.href = "ok";
            console.log("ok");
          }
        }
      });
      $(this).html("<h2 style=\"font-size:18px; font-family: HelveticaB;margin-bottom: 2rem;text-align: center;text-transform:uppercase;\">\u0414\u044F\u043A\u0443\u0454\u043C\u043E!</h2><p style=\"font-size: 1rem;text-align:center;font-family:HelveticaR;line-height: 1.2;\">\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0430. \u041D\u0430\u0448\u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u0438 \u0437\u0432'\u044F\u0436\u0443\u0442\u044C\u0441\u044F <br> \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C!</p>");
    }
  });
}); // script to get utm

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}