$('.skills-li').on('mouseenter mouseleave', function () {
    $this = $(this);
    cs($this.siblings());
}).on('click', function (e) {
    e.preventDefault();
    $(this).addClass('aactive')
        .siblings().removeClass('aactive');

    toggle($('#' + this.textContent.trim()));
});

// changing active tab, adapting height of dl container so it fits all tabs - jq solution 'cause bored with css

function toggle($btn) {
    let biggest = 0;
    const $skills = $('#Front, #Back, #Pozostałe');

    if ($btn) {
        $btn.show().addClass('active').siblings().removeClass('active');
    }


    $skills.not('.active')
        .hide();

    $skills.each((i, el) => {
        biggest = $(el).height() > biggest ? $(el).height() : biggest;
    });

    $('#skills-content').css('height', biggest + 'px');
    $skills.css('height', biggest + 'px');

}

$(window).on('resize', function () {
    toggle();
});

toggle();