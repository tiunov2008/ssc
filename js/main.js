'use strict'
let showMore = (t) => {
    let c = 0;
    let n = 0;
    
    if(t.closest('.experts')){
        n = 4;
        [...document.querySelectorAll('.experts-card')].every(elem=>{
            if(c == n){
                return false;
            }
            if(!elem.classList.contains('active')){
                elem.classList.add('active')
                c += 1;
            }
            return true;
        });
        if([...document.querySelector('.experts-cards').querySelectorAll('.experts-card')].every(elem=>elem.classList.contains('active'))){
            if(t.classList.contains('button')){
                t.style.display = 'none';
            }else{
                t.querySelector('.button').style.display = 'none';
            }
        }
    }else{
        n = 2;
        [...document.querySelector('.interview-cards').querySelectorAll('.interview-card')].every(elem=>{
            if(c == n){
                return false;
            }
            if(!elem.classList.contains('active')){
                elem.classList.add('active')
                c += 1;
            }
            return true;
        });
        if([...document.querySelector('.interview-cards').querySelectorAll('.interview-card')].every(elem=>elem.classList.contains('active'))){
            if(t.classList.contains('button')){
                t.style.display = 'none';
            }else{
                t.querySelector('.button').style.display = 'none';
            }
        }
    }
}
document.addEventListener('DOMContentLoaded' , () => {
    const subHeaderList = document.querySelector('.subheader-list'),
    kayBox = document.querySelector('.kay-box'),
    subHeaderEventsListBtn = document.querySelector('.subheader-events-list-btn'),
    subHeaderEventsList = document.querySelector('.subheader-events-list'),
    subheaderListToggleBtn = document.querySelector('.subheader-list__toggle');
    if (document.querySelector('.show-more')) {
        showMore(document.querySelector('.show-more'));
        }

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
        else if(target.closest('.show-more') && target.closest('.button')) {
            showMore(target);
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
    let c = 0;
    if (document.querySelector('.kay-box')) {
        [...document.querySelectorAll('.kay-box')].forEach(elem=>{
            console.log(c);
            if(elem.clientHeight > 300){
                elem.innerHTML = `<p>${elem.querySelector('p').innerHTML}</p><div class="read-more-wrapper">
                                            <input type="checkbox" id="read-more-${c}">
                                            <label class="read-more" for="read-more-${c}">
                                                <svg class="e-font-icon-svg e-fas-chevron-down" viewBox="0 0 448 512" width="16px" fill="#2BBCB4" height="16px" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>Читать далее</label>
                                            <div class="accordion-item-content">${elem.innerHTML.substring(elem.innerHTML.search("</p>"), elem.innerHTML.length)}</div>`;
            }
            c += 1;
        });
    };
});