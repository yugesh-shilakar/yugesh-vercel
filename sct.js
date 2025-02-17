const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');


addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);

};

const toggleTheme = () => (isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun'));

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);







//
// document.addEventListener('DOMContentLoaded', function () {
//   // ... (your existing code)

//   let slideIndexGallery = 1;
//   let slideIndexDigitalArts = 1;
//   let slideIndexArts = 1;

//   function plusSlides(n, category) {
//     showSlides((category === 'gallery') ? (slideIndexGallery += n) :
//                (category === 'digitalArts') ? (slideIndexDigitalArts += n) :
//                (category === 'arts') ? (slideIndexArts += n) : 1, category);
//   }

//   function currentSlide(n, category) {
//     showSlides((category === 'gallery') ? (slideIndexGallery = n) :
//                (category === 'digitalArts') ? (slideIndexDigitalArts = n) :
//                (category === 'arts') ? (slideIndexArts = n) : 1, category);
//   }

//   function showSlides(n, category) {
//     const images = document.querySelectorAll(`.${category}__item`);
//     let currentIndex;
//     switch (category) {
//       case 'gallery':
//         currentIndex = slideIndexGallery;
//         break;
//       case 'digitalArts':
//         currentIndex = slideIndexDigitalArts;
//         break;
//       case 'arts':
//         currentIndex = slideIndexArts;
//         break;
//       default:
//         currentIndex = 1;
//     }

//     if (n > images.length) {
//       currentIndex = 1;
//     }
//     if (n < 1) {
//       currentIndex = images.length;
//     }

//     // Update the appropriate slide index based on the category
//     switch (category) {
//       case 'gallery':
//         slideIndexGallery = currentIndex;
//         break;
//       case 'digitalArts':
//         slideIndexDigitalArts = currentIndex;
//         break;
//       case 'arts':
//         slideIndexArts = currentIndex;
//         break;
//       default:
//         break;
//     }

//     modalImage.src = images[currentIndex - 1].firstElementChild.src;
//   }
// });
