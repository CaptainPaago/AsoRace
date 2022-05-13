$("body").overlayScrollbars({
  overflowBehavior : {
    x : "hidden",
    y : "scroll"
  },
});
$(document).ready(function(e) {
  var instance = $(".main-menu").overlayScrollbars({
    overflowBehavior: {
      x: "hidden",
    },
  }).overlayScrollbars();
  if ($(window).width() > 992) {
    var mainMenuCollapsed = localStorage.getItem('menu-collapsed');
    if (mainMenuCollapsed) {
      $('body').addClass('collapsed');
    } else {
      $('body').removeClass('collapsed');
    }
  }
  let activeElement = $('.main-menu a.nav-link.active');
  activeElement.closest(".collapse").collapse('show');
  instance.scroll({el: activeElement, block: {y: "center", x: "nearest"}});
});

$('.menu-fixed-toggle').click(function() {
  $('body').toggleClass('collapsed');

  if ($(window).width() > 992) {
    var mainMenuCollapsed = localStorage.getItem('menu-collapsed');
    if (mainMenuCollapsed) {
      localStorage.setItem('menu-collapsed', "")
    } else {
      localStorage.setItem('menu-collapsed', "true")
    }
  }

  setTimeout(function() {
    $('.owl-carousel').trigger('refresh.owl.carousel');
  }, 301);
});

$(document).click(function(e) {
  if ($(window).width() < 992 && !$(e.target).closest('.main-menu').length &&
    !$(e.target).closest('.menu-fixed-toggle').length) {
    $('body').removeClass('collapsed');

    if ($(window).width() > 992) {
      localStorage.setItem('menu-collapsed', "")
    }
  }
});

$('.main-menu .collapse').on('show.bs.collapse', function(e) {
  $(this).parent().toggleClass('expanded');
});
$('.main-menu .collapse').on('hide.bs.collapse', function(e) {
  $(this).parent().toggleClass('expanded');
});

$('.menu-accordion-collapse-toggle').click(function() {
  $(this).siblings('.collapse').collapse('toggle');
});
