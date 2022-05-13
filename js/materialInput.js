$("document").ready(function() {
  var input = $('.material-input input');
  if (input.val() !== '') {
    input.closest('.material-input').addClass('active');
  }
});

$('.material-input input').on('input', function() {
  $(this).closest('.material-input').addClass('active');
});
$('.material-input input').focusout(function() {
  if ($(this).val() === '') {
    $(this).closest('.material-input').removeClass('active');
  }
});
