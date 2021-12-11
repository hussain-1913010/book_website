searchForm = document.querySelector('.searchForm');
document.querySelector('#searchBtn').onclick = () => {
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.loginFormContainer');

document.querySelector('#loginBtn').onclick = () => {
    loginForm.classList.toggle('active');
}
document.querySelector('#closeLoginBtn').onclick = () => {
    loginForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    if(window.scrollY > 80) {
        document.querySelector('.header .header2').classList.add('active');
    }else{
        document.querySelector('.header .header2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80) {
        document.querySelector('.header .header2').classList.add('active');
    }else{
        document.querySelector('.header .header2').classList.remove('active');
    }
}

// swiper slider codes
var swiper = new Swiper(".booksSlider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
