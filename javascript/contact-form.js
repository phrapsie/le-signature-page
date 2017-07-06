function setMB() {
    $('.main').css('margin-bottom', $('footer').height());
}

setMB();

$(window).on('scroll', function (e) {

    const $this = $(this),
        $form = $('.form'),
        $footer = $('footer'),
        scale = Math.max(0, 1 + ($this.scrollTop() + $this.height() - $(document).height()) / 800);

    $form.css({
        'transform': `scale(${scale})`,
        'opacity': scale
    });

}).on('resize', function () {
    setMB();
});