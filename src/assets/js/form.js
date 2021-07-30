import $ from 'jquery';
import Cookies from 'js-cookie';
import Inputmask from 'inputmask';
import crm from '../../crm/submit.js';

// Params
const params = {
  needsRedirectLeeloo: false,
  loadingMessage: 'Подождите несколько секунд... почти получили Вашу заявку',
  successMessage: 'Получили заявку',
  errorMessage: 'Ошибка, что-то пошло не так! Попробуйте позже.',
};

// Refs
const form = document.querySelector('#register_form');
const name = document.querySelector('#register_form_input_name');
const phone = document.querySelector('#register_form_input_tel');
const email = document.querySelector('#register_form_input_email');

// Validation vars
let nameValid = false;
let telValid = false;
let emailValid = false;

// Get UTM marks
const source = getUrlParameter('utm_source');
const medium = getUrlParameter('utm_medium');
const term = getUrlParameter('utm_term');
const campaign = getUrlParameter('utm_campaign');
const content = getUrlParameter('utm_content');

// Set the cookies
if (source && (Cookies.get('utm_source') == null || Cookies.get('utm_source') == '')) {
  Cookies.set('utm_source', source);
}
if (medium && (Cookies.get('utm_medium') == null || Cookies.get('utm_medium') == '')) {
  Cookies.set('utm_medium', medium);
}
if (term && (Cookies.get('utm_term') == null || Cookies.get('utm_term') == '')) {
  Cookies.set('utm_term', term);
}
if (campaign && (Cookies.get('utm_campaign') == null || Cookies.get('utm_campaign') == '')) {
  Cookies.set('utm_campaign', campaign);
}
if (content && (Cookies.get('utm_content') == null || Cookies.get('utm_content') == '')) {
  Cookies.set('utm_content', content);
}

$(document).ready(function () {
  const im = new Inputmask('+389999999999');
  im.mask($('input[type="tel"]'));

  $(form).submit(function (event) {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    const $form = $(this);
    const $progress = $('.progress');
    const $progressBar = $('.modal-progress-bar');

    $form.css('display', 'none');
    $progress.css('display', 'block');
    $progressBar.css('display', 'none');
    const modal = document.querySelector('.modal-outer');
    const message = document.querySelector('.modal-message');
    const messageText = message.querySelector('.text');

    messageText.textContent = params.loadingMessage;
    const modalHeight = modal.style.minHeight;
    modal.style.minHeight = 'initial';
    message.classList.toggle('modal-message--show');
    $('button[type="submit"]').attr('disabled', true);

    const showError = () => {
      messageText.textContent = params.errorMessage;
      $progress.css('display', 'none');
      setTimeout(() => {
        $form.css('display', 'block');
        $progressBar.css('display', 'flex');
        $('button[type="submit"]').removeAttr('disabled');
        modal.style.minHeight = modalHeight;
        message.classList.toggle('modal-message--show');
      }, 5000);
    };

    let data = crm.generateData(name.value, phone.value, email.value);
    let response = crm.submit(name.value, phone.value, email.value);
    dataLayer.push({ event: 'lead' });
    if (params.needsRedirectLeeloo) {
      redirectLeeLoo(data);
    }
    response
      .then(resp => {
        if (resp.ok) {
          afterSend($form);
        } else {
          console.log('error ', resp.statusText);
          showError();
        }
      })
      .catch(err => {
        console.log(err);
        showError();
      });
  });
});

function validate() {
  nameValid = validName(name);
  telValid = validPhone(phone);
  emailValid = validMail(email);

  return !!(nameValid && telValid && emailValid);
}
function afterSend(form) {
  const $progress = $('.progress');
  const $progressBar = $('.modal-progress-bar');
  const modal = document.querySelector('.modal-outer');
  const message = document.querySelector('.modal-message');
  const messageText = message.querySelector('.text');

  // Show next step
  $progressBar.find('.is-active').toggleClass('is-active');
  $progressBar.css('display', 'flex');

  if (params.needsRedirectLeeloo) {
    $progressBar.children('.item')[1].classList.add('is-active');
    window.LEELOO = function () {
      window.LEELOO_INIT = { id: '5d0cb9cdaad9f4000e4b8e07' };
      var js = document.createElement('script');
      js.src = 'https://app.leeloo.ai/init.js';
      js.async = true;
      document.getElementsByTagName('head')[0].appendChild(js);
    };
    LEELOO();
    window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat(window.leelooHash);

    const leeloo = document.querySelector('.leeloo');
    leeloo.classList.add('leeloo--active');
    message.classList.toggle('modal-message--show');
  } else {
    $progressBar.children('.item')[2].classList.add('is-active');
    messageText.textContent = params.successMessage;
    $progress.css('display', 'none');
  }

  modal.style.minHeight = 'initial';
}
function redirectLeeLoo(formData) {
  let fields = {
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    umt_content: 'umt_content',
    utm_term: 'utm_term',
    phone: 'phone',
    email: 'email',
    name: 'first_name',
    google_id: 'ga',
  };

  let keys = Object.keys(formData);
  let url = new URL(window.location);

  for (let i = 0; i < keys.length; i++) {
    if (formData[keys[i]] !== undefined && formData[keys[i]] !== null) {
      if (fields.hasOwnProperty(keys[i])) {
        if (formData[keys[i]].length > 0) {
          url.searchParams.set(fields[keys[i]], formData[keys[i]]);
        }
      }
    }
  }

  window.history.pushState({}, document.title, url);
}
function getUrlParameter(sParam) {
  let sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === 'undefined' ? true : sParameterName[1];
    }
  }
}
function validName(nameInput) {
  var phoneValue = nameInput.value;
  var valid = phoneValue.length >= 2;
  !valid
    ? (nameInput.style.border = '2px solid red')
    : (nameInput.style.border = '2px solid #ccc');
  return valid;
}
function validPhone(phoneInput) {
  var phoneValue = removeExtraCharactersInPhoneNumber(phoneInput.value);
  var re = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;
  var valid = re.test(phoneValue);
  !valid
    ? (phoneInput.style.border = '2px solid red')
    : (phoneInput.style.border = '2px solid #ccc');
  return valid;
}
function validMail(emailInput) {
  var emailValue = emailInput.value;
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var valid = re.test(emailValue);
  !valid
    ? (emailInput.style.border = '2px solid red')
    : (emailInput.style.border = '2px solid #ccc');
  return valid;
}
function removeExtraCharactersInPhoneNumber(phoneNumber) {
  var validSymbolsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var arr = phoneNumber.split('');
  var newCleanArray = [];
  arr.forEach(el => {
    if (validSymbolsArray.includes(el)) {
      newCleanArray.push(el);
    }
  });
  return newCleanArray.join('');
}
