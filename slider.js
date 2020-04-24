'use strict';

let sliderDots = document.querySelectorAll('.slider-dots__item'),
    sliderItems = document.querySelectorAll('.slider-item'),
    sliderButtonNext = document.querySelector('.slider-btn--next'),
    sliderButtonPrev = document.querySelector('.slider-btn--prev');

function _prepareSlideMove(indexMove, ...elements) {
    for(let elem of elements){
        elem.forEach((item, index) => {
            if(index !== indexMove){
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    }
}

function actionSlide() {
    let indexMove = 0;
    _prepareSlideMove(indexMove, sliderItems, sliderDots);
    sliderButtonNext.addEventListener('click', function () {
        if (indexMove < sliderItems.length - 1){
            indexMove++;
            _prepareSlideMove(indexMove, sliderItems, sliderDots);
        } else {
            indexMove = 0;
            _prepareSlideMove(indexMove, sliderItems, sliderDots);
        }
    });
    sliderButtonPrev.addEventListener('click', function () {
        if (indexMove <= 0){
            indexMove = sliderItems.length - 1;
            _prepareSlideMove(indexMove, sliderItems, sliderDots);
        } else {
            indexMove--;
            _prepareSlideMove(indexMove, sliderItems, sliderDots);
        }
    });
    sliderDots.forEach((item, index) => {
        item.addEventListener('click', function () {
            indexMove = index;
            _prepareSlideMove(indexMove, sliderItems, sliderDots);
        });
    })
}

actionSlide();