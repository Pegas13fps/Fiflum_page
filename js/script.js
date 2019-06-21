$(function() {
    windowheight();
    $('.slidecontact').on('click', function() {});
    $(document).on('click', '.slidecontact a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});

function windowheight() {
    $('.processenban,.prisban,.fullheight,.investban,.section.appudviklinwrap,.portfolioban').css({
        'height': $(window).height()
    });
    $(window).resize(function() {
        $('.processenban,.prisban,.fullheight,.investban,.section.appudviklinwrap,.portfolioban').css({
            'height': $(window).height()
        });
    });
}
$(document).ready(function() {
    $('#menu-center a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $('#menu-center a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        var headerHeight = $('.navbar-default').height();
        $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance && $(this).position().top + headerHeight > scrollDistance) {
                $('#menu-center a.active').removeClass('active');
                $('#menu-center a').eq(i).addClass('active');
            }
        });
    }).scroll();
    $('#logoslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1170: {
                items: 5
            }
        }
    });
	
	 $('#testimonials').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
	
});
$(document).ready(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar-default').outerHeight();
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 220);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('.navbar-default').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.navbar-default').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
	}
    
    $('.navbar-default .navbar-nav>li:nth-child(2) > a').on('click',function(){
        $('.navbar-default .navbar-nav>li:nth-child(3) > a + ul.sub-menu').slideUp();
        $('.navbar-default .navbar-nav>li:nth-child(2)').toggleClass('active');
        $('.navbar-default .navbar-nav>li:nth-child(3)').removeClass('active');

    });

    $('.navbar-default .navbar-nav>li:nth-child(3) > a').on('click',function(){
        $('.navbar-default .navbar-nav>li:nth-child(2) > a + ul.sub-menu').slideUp();
        $('.navbar-default .navbar-nav>li:nth-child(3)').toggleClass('active');
        $('.navbar-default .navbar-nav>li:nth-child(2)').removeClass('active');

    });

    $('.sub-menu').mouseup(function() { 
			return false;
		});
	
	$(this).mouseup(function(active) {
			if(!($(active.target).parents('.navbar-nav').length > 0)) {
				$('.sub-menu').slideUp();
				$('.navbar-default .navbar-nav > li').removeClass('active');
			}
    });
	
});

function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 220,
            header = document.querySelector("#wrapper");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });
}
window.onload = init();