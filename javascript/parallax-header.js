function parallax() {
    const $header = $('.main_header'),
        $headerContent = $header.find('.main_header_content'),
        $wind = $(window),
        $offY = Math.round($wind.scrollTop()),
        $headerH = $header.height();

    $header.css('background-position', `center ${$offY / 1.5}px`);
    $headerContent.css({
        'margin-top': `${Math.min($headerH, $offY / 1.2)}px`,
        'opacity': `${Math.min( 1, (200 - $offY/1.6) / 160)}`
    });
}

parallax();

let prev = 0;

$(window).on('scroll', function () {

    const $header = $('.main_header'),
        $headerContent = $header.find('.main_header_content'),
        $wind = $(this),
        $offY = Math.round($wind.scrollTop()),
        $headerH = $header.height();

    parallax();

    // nav trigger

    // console.log(`${$offY}, ${$headerH}`);
    if ($wind.scrollTop() + 100 > $headerH && prev < $offY && !$('.nav-trigger').hasClass('active')) {
        $('.nav-panel').addClass('active');
    } else {
        $('.nav-panel').removeClass('active');
    }

    let prevOff = Math.round($wind.scrollTop());

    prev = $offY;

});