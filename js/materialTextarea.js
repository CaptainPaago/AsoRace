$("document").ready(function() {
  var input = $('.material-textarea textarea');
  if (input.val() !== '') {
    input.closest('.material-textarea').addClass('active');
  }
});

$('.material-textarea textarea').on('input', function() {
  $(this).parent().addClass('active');
});
$('.material-textarea textarea').focusout(function() {
  if ($(this).val() === '') {
    $(this).parent().removeClass('active');
  }
});
