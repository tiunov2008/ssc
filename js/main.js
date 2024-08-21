'use strict'
document.addEventListener('DOMContentLoaded' , () => {
    const subHeaderList = document.querySelector('.subheader-list'),
    subHeaderEventsListBtn = document.querySelector('.subheader-events-list-btn'),
    subHeaderEventsList = document.querySelector('.subheader-events-list'),
    subheaderListToggleBtn = document.querySelector('.subheader-list__toggle');
    document.body.addEventListener('click', e=>{
        let target = e.target;
        if (target.closest('.event-about-button')) {
            document.querySelector('.event-about-button--active').classList.remove('event-about-button--active')
            document.querySelector('.event-about-content--active').classList.remove('event-about-content--active')
            document.getElementById(target.id).classList.add('event-about-button--active')
            document.getElementById('content-' + target.id).classList.add('event-about-content--active')
        }
        else if(target.closest('.subheader-list__toggle')) {
            subHeaderList.classList.toggle('subheader-list-active');
            subheaderListToggleBtn.classList.toggle('subheader-list__toggle-active');
        }
        else if(target.closest('.subheader-events-list-btn')) {
            subHeaderEventsList.classList.toggle('active');
        }
    });
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.news-slider-next',
            prevEl: '.news-slider-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            }
        }
    });
    const swiper2 = new Swiper('.swiper-2', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.key-points-slider-next',
            prevEl: '.key-points-slider-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            }
        }
    });
    const swiper3 = new Swiper('.swiper-3', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.say-about-slider-next',
            prevEl: '.say-about-slider-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            1100: {
                slidesPerView: 2,
            }
        }
    });
    const swiper4 = new Swiper('.swiper-4', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.news-slider-next',
            prevEl: '.news-slider-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
            }
        }
    });
    const swiper5 = new Swiper('.swiper-5', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.say-about-slider-next',
            prevEl: '.say-about-slider-prev',
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
            }
        }
    });
});