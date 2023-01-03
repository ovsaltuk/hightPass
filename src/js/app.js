import * as oveFunctions from "./modules/functions.js";
import * as JustValidate from "./modules/just-validate-min.js"
// import * as Inputmask from "./modules/inputmask.js";
oveFunctions.isWebp();


// anchor scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove("menu_active");
        bodyWrapper.classList.remove("body-wrapper_menu-open");
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


//search 
let anim = gsap.to('.search-form', {duration: .5, transform: "translateX(0)", opacity: 1, paused: true})

document.querySelector(".search-btn").addEventListener('click', function(){
  anim.play()
});

document.querySelector(".search-form__close-btn").addEventListener('click', function(){
  event.preventDefault();
  anim.reverse()
});


//contacts
let flag = true;
let animMapHorizontal = gsap.to(".contacts__map-address", {paused: true, transform: "translateX(-85%)"});
let animMapVertical = gsap.to(".contacts__map-address", {paused: true, transform: "translatey(68%)"});
let animClose = gsap.to(".contacts__close-btn", {paused: true, transform: "rotate(45deg)"});

document.querySelector(".contacts__close-btn").onclick = function () {
  event.preventDefault();
  if(window.innerWidth >= 1290) {
    if (flag) {
      animMapHorizontal.play();
      animClose.play();
      flag = false;
    } else {
      animMapHorizontal.reverse();
      animClose.reverse();
      flag = true;
    }
  } else {
    if (flag) {
      animMapVertical.play();
      animClose.play();
      flag = false;
    } else {
      animMapVertical.reverse();
      animClose.reverse();
      flag = true;
    }
  }
};


//map 

// The ymaps.ready() function will be called when
// all the API components are loaded and the DOM tree is generated.
ymaps.ready(init);
function init(){ 
    // Creating the map.    
    var myMap = new ymaps.Map("map", {
        // The map center coordinates.
        // Default order: “latitude, longitude”.
        // To not manually determine the map center coordinates,
        // use the Coordinate detection tool.
        center: [55.761512, 37.624462],
        // Zoom level. Acceptable values:
        // from 0 (the entire world) to 19.
        zoom: 14,
        controls: []
    });
    let myPlacemark = new ymaps.Placemark([55.770801, 37.635754], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/mappoint.png',
      iconImageSize: [12, 12],
      iconImageOffset: [6, 6]
    });
    
    myMap.geoObjects.add(myPlacemark);
}

//form validation 
// var selector = document.querySelector("input[type=tel");

// var im = new Inputmask("99-9999999");
// im.mask(selector);

// document.querySelector(".contacts__form-btn").addEventListener('click', function (){
//   event.preventDefault()
// })

new window.JustValidate('.contacts__form', {
  messages: {
    name: 'Недопустимый формат',
    email: 'Недопустимый формат',
    text: 'Недопустимый формат'
  },
});

//nav mob

let burger = document.querySelector('.burger');
let submenuNav = document.querySelector('.submenu__nav');
let submenuCloseBtn = document.querySelector('.submenu__close-btn');
let body = document.querySelector('body');
let animMenu = gsap.to(".submenu__nav", {paused: true, duration: .3, opacity: 1});


burger.onclick = function () {
  submenuNav.classList.add('submenu__nav_active');
  animMenu.play();
  body.classList.add('no-scroll');
}


submenuCloseBtn.onclick = function () {
  animMenu.reverse();
  setTimeout(function () {submenuNav.classList.remove('submenu__nav_active');}, 300);
  body.classList.remove('no-scroll');
}



