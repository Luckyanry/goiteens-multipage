window.addEventListener('DOMContentLoaded', function () {
// Look for .hamburger
const hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
  // Toggle class "is-active"
  hamburger.classList.toggle('is-active');
  // Do something else, like open/close menu
});

})
