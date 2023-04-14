console.log("Hello");
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
let togl = menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

let bell = document.querySelector('.notification')
let bell2 = document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');

let downl = document.querySelector('.down');
let downl2 = document.querySelector('#down-icon').onclick = () => {
    downl.classList.toggle('active');
}


var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:5000,
      disableOnInteracton: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
});

window.onscroll = function () {
  mufunction();
}

function mufunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementsByClassName('scroll-bar').style.width = scrolled + '%';
}}

let notifi = document.getElementById("bell-icon");
let downi = document.getElementById("down-icon");
let mnui = document.getElementById("mnui");

let notif = document.getElementById("notif");
let down = document.getElementById("down");

downi.addEventListener("click", function() {
  if(notif.classList.contains("active") == true) {
    notif.classList.remove("active");
  }
});

notifi.addEventListener("click", function() {
  if(down.classList.contains("active") == true) {
    down.classList.remove("active");
  }
});

mnui.addEventListener("click", function() {
  if(notif.classList.contains("active") == true) {
    notif.classList.remove("active");
  }
  if(down.classList.contains("active") == true) {
    down.classList.remove("active");
  }
})



