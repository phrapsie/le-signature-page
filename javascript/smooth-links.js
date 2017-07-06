$('.nav-link').on('click', function (e) {
    e.preventDefault();
    const $target = $('.' + $(this).data('targ'));

    $('html, body').animate({
        scrollTop: $target.hasClass('footer') ? $('body').height() : $target.offset().top
    }, 600);

    console.log($('.' + $(this).data('targ')));

    $('.nav-trigger').trigger('click');

});