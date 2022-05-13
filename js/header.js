$( document ).ready(function() {
  // notifications dropdown menu scrollbar init
  $(".notifications-dropdown-menu > .content").overlayScrollbars({
    className: "os-theme-primary"
  });

  //show search input
  $('.main-header .search-button').click(function(e) {
    $('.main-header > .search-container').fadeIn();
    $('.main-header > .search-container .material-input input').focus();
  });

  //hide search input on clear btn
  $('.main-header .search-container .material-input .close-button').click(function(e) {
    $('.main-header > .search-container').fadeOut();
    $('.main-header > .search-container .material-input input').val('');
  });

  //show notifications
  $('.main-header .notifications-button').click(function(e) {
    $('.main-header .notifications-dropdown-menu').fadeIn();
  });

  //show profile
  $('.main-header .profile-button').click(function(e) {
    $('.main-header .profile-dropdown-menu').fadeIn();
  });


  $( document ).click(function(e) {
    //click outside search container
    if (!$(e.target).parents(".search-container").length && !$(e.target).parents(".main-header .search-button").length) {
      $('.main-header > .search-container').fadeOut();
    }

    //click outside notifications container
    if (!$(e.target).parents(".notifications-dropdown-menu").length && !$(e.target).parents(".main-header .notifications-button").length) {
      $('.main-header .notifications-dropdown-menu').fadeOut();
    }

    //click outside profile container
    if (!$(e.target).parents(".profile-dropdown-menu").length && !$(e.target).parents(".main-header .profile-button").length) {
      $('.main-header .profile-dropdown-menu').fadeOut();
    }
  });
});
