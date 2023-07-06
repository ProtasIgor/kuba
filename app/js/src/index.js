
$(function () {
    $('.photo__slider').slick(
        {
            autoplay: true,
            autoplaySpeed: 3000,
            lazyLoad: 'ondemand',
            prevArrow: '<button class="slider-button-prev"><img class="slider-button-prev-img" src="images/sprite.svg#arrow"></button>',
            nextArrow: '<button class="slider-button-next"><img class="slider-button-next-img" src="images/sprite.svg#arrow"></button>'
        });


    $('.header__nav-btn').on('click', () => {
        $('.header__list').slideToggle();
    })
}())