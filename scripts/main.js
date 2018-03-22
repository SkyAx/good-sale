$(document).ready(function () {

    var counter = $('#counter').html();
    var menu = $('.header-bottom');
    var filter = $('.filter');
    var filterPosition = filter.offset().top;
    var phone = $('.input-phone');

    $(document).scroll(
        function () {
            if($(window).width() <= 768 && $(window).scrollTop() >= filterPosition){
                $(filter).sticky({topSpacing: 89, zIndex: 200});
            }
        }
    );

    $(document).scroll(
        function () {
            if($(window).scrollTop() <= filterPosition){
                $(filter).unstick();
            }
        }
    );

    $(menu).sticky({topSpacing: 0, zIndex: 1000});

    $(document).on('keyup',function(e){
        if(e.which == 27){
            $('.feedback.pop-up').removeClass('active');
            $('.order.pop-up').removeClass('active');
        }
    });

    $(document).mouseup(function (e){
        var feedbackPopUpForm = $('.feedback.pop-up .inner');
        if (!feedbackPopUpForm.is(e.target) && feedbackPopUpForm.has(e.target).length === 0) {
            $('.feedback.pop-up').removeClass('active');
        }
    });

    $(document).mouseup(function (e){
        var feedbackPopUpForm = $('.order.pop-up .inner');
        if (!feedbackPopUpForm.is(e.target) && feedbackPopUpForm.has(e.target).length === 0) {
            $('.order.pop-up').removeClass('active');
        }
    });


    $('.filter-description').on('click', function () {
        $('.filter-description').removeClass('active');
        $(this).addClass('active');
    });

    $('.to-search').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('flip');
    });

    $('.nav-button').on('click', function (e) {
        e.preventDefault();
        $('.nav-container').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.close-button').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().removeClass('active');
    });

    $('.back').on('click', function () {
        $('.item.flip').removeClass('flip');
    });

    $('.get-info').on('click', function () {
        $('.feedback.pop-up').addClass('active');
    });

    $('.delete-item').on('click', function () {
       $(this).parent().parent().hide();
    });

    $('.cart-count-container').on('click', function (e) {
        e.preventDefault();
       $('.order.pop-up').addClass('active');
    });

    $('.nav-container a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('.nav-container a[href^="#"]').removeClass('active');

        $('.nav-button').removeClass('active');


        $(this).addClass('active');

        $('.nav-container').removeClass('active');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });


});
