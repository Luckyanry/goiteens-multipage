

const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const navLinks = document.querySelectorAll(".navigation__list-link")

const toggleBurgerMenu = () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  mobileMenuRef.classList.toggle('is-open');

  !expanded ? fixedModalOverflow() : closeModalOverflow();
  !expanded && setActiveLink(document.querySelectorAll('.modal-menu__navigation-link'));
};

menuBtnRef.addEventListener('click', toggleBurgerMenu);

// Fixed window when modal opened
function fixedModalOverflow() {
  document.querySelector('body').style.overflow = 'hidden';
}

function closeModalOverflow() {
  document.querySelector('body').style.overflow = 'unset';
}

function setActiveNavLink(items) {
  for (let index = 0; index < items.length; index++) {
    const link = items[index];
    if (link.href === window.location.href) {
      link.classList.add('navigation__list-link_current');
    }
  }
}

setActiveNavLink(navLinks);


