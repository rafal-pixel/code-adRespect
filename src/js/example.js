import Macy from 'macy';
import GLightbox from "glightbox";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AOS from 'aos';
import Swiper from 'swiper';
import 'aos/dist/aos.css';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

AOS.init({
    debounceDelay: 50,
    offset: 120,
    duration: 600,
});

const html = document.querySelector('html');
const carouselBanner = document.querySelector('.carousel-banner');

if(carouselBanner) {
    const prevEl = carouselBanner.querySelector('.swiper-button-next');
    const nextEl = carouselBanner.querySelector('.swiper-button-prev');

    let options = {
        modules: [Navigation, EffectFade, Autoplay],
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
          nextEl: nextEl,
          prevEl: prevEl,
        },
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
    }
    const swiper = new Swiper('.swiper', options);
}

const scrollRel = document.querySelectorAll('.scroll-to-anchor');

if(scrollRel) {
    scrollRel.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();            
            gsap.to(window, { duration: 1, scrollTo: item.attributes.href.nodeValue, ease: "power4.inOut" });
        })
    })
}

const realizations = document.querySelector('.realizations');

if(realizations) {
    const rGallery = document.getElementById('realizationGallery');
    if (rGallery) {
        Macy({
            container: rGallery,
            trueOrder: true,
            waitForImages: false,
            columns: 3,
            margin: {
                x: 43,
                y: 40,
            },
            breakAt: {
                991: {
                  margin: {
                    x: 20,
                    y: 20,
                  },
                  columns: 2
                }
              }
        });
    
        GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            openEffect: 'zoom',
            closeEffect: 'fade',
            cssEfects: {
              fade: { in: 'fadeIn', out: 'fadeOut' },
              zoom: { in: 'zoomIn', out: 'zoomOut' }
            }
        });
    }

    const btnRealization =  realizations.querySelector('.realizations__btn');

    btnRealization.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(realizations, {
            height: "auto", 
            duration: 1.5,
            onComplete: function() {
                realizations.classList.add('active')
            }
        });
    })
}

const searchBtn = document.querySelector('.navbar-search__toggle-btn');

if(searchBtn) {
    searchBtn.addEventListener('click', e => {
        e.preventDefault;
        const navbarSearch = document.querySelector('.navbar-search');
        navbarSearch.classList.toggle('active');
    }) 
}

const navbarLink = document.querySelectorAll('.navbar__item');

if(navbarLink && window.innerWidth < 991) {
    navbarLink.forEach(el => {
        const arrow = el.querySelector('span'); 
        if(arrow)
        arrow.addEventListener('click', e => {
            e.preventDefault();
            el.classList.toggle('active');
        })
    })
}

const btnMobile = document.querySelector('.btn-mobile-navbar');

if(btnMobile) {
    btnMobile.addEventListener('click', e => {
        e.preventDefault();
        html.classList.toggle('navbar-mobile-active')
    })
}

const offerCard = document.querySelectorAll('.offer-card');

if(offerCard) {
    offerCard.forEach(el => {
        const link = el.querySelector('a');
        el.addEventListener('click', e => {
            link.click();
        })
    })
}