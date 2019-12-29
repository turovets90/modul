$(document).ready(function(){


    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            //fade:true,
           // autoplay: true,
           // speed: 1000,
            //autoplaySpeed:9000,
        });
    }


    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });
    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });




    $('.product_slider_container').each(function(){
        var product_slider=$(this).find('.product_slider');
        var product_slider_nav=$(this).find('.product_slider_nav');
        var pr_prev=$(this).find('.pr_prev');
        var pr_next=$(this).find('.pr_next');



        $(product_slider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            //fade: true,
            asNavFor: product_slider_nav,
        });


        $(product_slider_nav).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: product_slider,
            dots: false,
            arrows: false,
            focusOnSelect: true,
            infinite:false,
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        $(pr_prev).click(function(){
            $(product_slider).slick('slickPrev');
        });
        $(pr_next).click(function(){
            $(product_slider).slick('slickNext');
        });

    });


    $(".main_menu .nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });

});


