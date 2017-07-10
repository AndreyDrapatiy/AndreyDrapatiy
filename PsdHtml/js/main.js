$('.slider').slick({

    centerMode: true,
    speed: 210,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                speed: 210,

                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,

                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

