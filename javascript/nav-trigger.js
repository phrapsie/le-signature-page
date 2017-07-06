const trigger = function () {
    $this = $(this);
    $this.off('click');
    cs(this, '.nav-ul');

    const $overlay = $('#overlay'),
        linum = $('.nav-ul')
        .find('li').length;


    if ($overlay.hasClass('active')) {
        setTimeout((() => {
            $('#overlay').removeClass('active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function (e) {
                    $this.on('click', trigger);
                });
        }), linum * 120);
    } else {
        $('#overlay').addClass('active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function (e) {
                $this.on('click', trigger);
            });
    }

}

$('.nav-trigger').on('click', trigger);