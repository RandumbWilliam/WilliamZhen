import initSr from './js/sr';
import initDd from './js/dropdown';
import initNa from './js/navpage';
import './style/main.scss';

$(window).on('load', function(event) {
    $('.preloader').delay(500).fadeOut(500);
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top -  70
        },
        1000
      );
  }
});

var scrollLink = $('.main-nav li a');
// Active link switching
$(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top - 71;

        if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});

initSr();
initDd();
initNa();
