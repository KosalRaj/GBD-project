$(document).ready(function () {
	$(".sale-slider").slick({
		rtl: false, // If RTL Make it true & .slick-slide{float:right;}
		autoplay: false,
		// autoplaySpeed: 5000, //  Slide Delay
		speed: 500, // Transition Speed
		slidesToShow: 4, // Number Of Carousel
		slidesToScroll: 4, // Slide To Move 
		pauseOnHover: false,
		appendArrows: $(".sale__container .slider__header .controls"), // Class For Arrows Buttons
		prevArrow: '<a class="slide-control slide-control__prev"><i class= "fas fa-chevron-left" ></i></a>',
		nextArrow: '<a class="slide-control slide-control__next"><i class= "fas fa-chevron-right" ></i></a>',
		easing: "linear",
		responsive: [
			{
				breakpoint: 1500, settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1000, settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 528, settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	})

	$(".bestseller-slider").slick({
		rtl: false, // If RTL Make it true & .slick-slide{float:right;}
		autoplay: true,
		autoplaySpeed: 5000, //  Slide Delay
		speed: 200, // Transition Speed
		slidesToShow: 4, // Number Of Carousel
		slidesToScroll: 4, // Slide To Move 
		pauseOnHover: false,
		appendArrows: $(".bestseller__container .slider__header .controls"), // Class For Arrows Buttons
		prevArrow: '<a class="slide-control slide-control__prev"><i class= "fas fa-chevron-left" ></i></a>',
		nextArrow: '<a class="slide-control slide-control__next"><i class= "fas fa-chevron-right" ></i></a>',
		easing: "linear",
		responsive: [
			{
				breakpoint: 1500, settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1000, settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 528, settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	})

	$(".featured-slider").slick({
		rtl: false, // If RTL Make it true & .slick-slide{float:right;}
		autoplay: false,
		// autoplaySpeed: 5000, //  Slide Delay
		speed: 500, // Transition Speed
		slidesToShow: 4, // Number Of Carousel
		slidesToScroll: 4, // Slide To Move 
		pauseOnHover: false,
		appendArrows: $(".featured-container"), // Class For Arrows Buttons
		prevArrow: '<button class="slider-control-prev"><span class="carousel-control-prev-icon slider-control-previous-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>',
		nextArrow: '<button class="slider-control-next"><span class="carousel-control-next-icon slider-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
		easing: "linear",
		responsive: [
			{
				breakpoint: 1500, settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1000, settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 528, settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	})
})