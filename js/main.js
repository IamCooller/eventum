$(document).ready(function() {
    /*loadSvg*/
    $('[data-svg]').each(function() {
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt) {
            if (statusTxt == "success") {
                $this.find('svg').addClass('svg svg-' + $filename + '');
            }
        });
    });

    $('#header__mainMenu-open').click(function() {
        $('#header__mainMenu-toggle').toggleClass('open');
        $('.rmwidget').toggleClass('open');

    });
    $(".global_status_arrow").click(function() {
        $(".global_status_main").toggleClass('openGlobal');
        $(this).toggleClass('flip');
    });
    if ($(window).width() > 770) {
        var imageLeft = document.querySelector('.main_allProjects-top'),
            imageRight = document.querySelector('.main_allProjects-bottom');

        new simpleParallax(imageLeft, {
            orientation: 'left',
            overflow: true
        });
        new simpleParallax(imageRight, {
            orientation: 'right',
            overflow: true
        });

    } else {

        $('.main_allProjects-top').slick({
            arrows: false,
            dots: false
        });
        $('.main_allProjects-bottom').slick({
            arrows: false,
            dots: false
        });
        $('.single_RESPECTS_lists').slick({
            arrows: false,
            dots: false,

            responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }

            ]
        });

        $('.EVENT span').html('<a href="#EVENT_mobile"> EVENT</a>')
        $('.ONLINE span').html('<a href="#ONLINE_mobile"> ONLINE</a>')
        $('.SPACE span').html('<a href="#SPACE_mobile"> SPACE</a>')
        $('.DIGITAL span').html('<a href="#DIGITAL_mobile"> DIGITAL</a>')
        $('.PR span').html('<a href="#PR_mobile"> PR</a>')
        $('.EVENT a').on('click', function(e) {
            e.preventDefault();

            var target = $(this.hash);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top
            }, 500);
        });
        $('.ONLINE a').on('click', function(e) {
            e.preventDefault();

            var target = $(this.hash);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top
            }, 500);
        });
        $('.SPACE a').on('click', function(e) {
            e.preventDefault();

            var target = $(this.hash);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top
            }, 500);
        });
        $('.DIGITAL a').on('click', function(e) {
            e.preventDefault();

            var target = $(this.hash);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top
            }, 500);
        });
        $('.PR a').on('click', function(e) {
            e.preventDefault();

            var target = $(this.hash);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top
            }, 500);
        });
    }


    var fingers = document.querySelector('#finger2'),
        finger2 = document.querySelector('#finger1');
    new simpleParallax(fingers, {
        orientation: 'down',
        overflow: true,
        scale: 2.2
    });
    new simpleParallax(finger2, {
        orientation: 'down',
        overflow: true,
        scale: 2.2
    })

    var $status = $('.service_category_list_Info');
    var $slickElement = $('.service_category_list');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span class="service_category_list_Info_first" >' + i + '</span>' + '/' + '<span class="service_category_list_Info_last" >' + slick.slideCount + '</span>');
    });

    $slickElement.slick({
        autoplay: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });
    $('.single_projects_list').slick({
        autoplay: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $(function() {
        if ($('#chose_file').length) {
            $('#chose_file').click(function() {
                $('#chose_file_input').click();
                return (false);
            });

            $('#chose_file_input').change(function() {
                $('#chose_file_text').html($(this).val());
            }).change();
        }
    });

    $(function() {
        if ($('#add_email').length) {
            $('#add_email').click(function() {
                $('#add_email_checkbox').click();
                if ($('#add_email_checkbox:checked').length) {
                    $(this).addClass('add_email_checked');
                } else {
                    $('.add_email_checked').removeClass('add_email_checked');
                }
                return (false);
            });


            if ($('#add_email_checkbox:checked').length) {
                $('#add_email').addClass('add_email_checked');
            } else {
                $('.add_email_checked').removeClass('add_email_checked');
            }
        }
    });

});

$(document).ready(function() {
    var toright = document.getElementsByClassName('toRight');
    var toleft = document.getElementsByClassName('toLeft');

    new simpleParallax(toright, {
        overflow: true,
        scale: 2,
        orientation: 'right',
        maxTransition: 50,

    });
    new simpleParallax(toleft, {
        overflow: true,
        scale: 2,
        orientation: 'left',
        maxTransition: 50,

    });

})