var $accords = $('.accord:not(.sign-out)');
var $ul = $('ul');

$accords.on('click', function(e){
  $accords.removeClass('selected');
  $ul.slideUp('swing');
  if ($(e.target).next('ul').is(':visible')) {
    $(e.target).next('ul').slideUp('swing');
    $(this).removeClass('selected');
  } else {
    $(e.target).next('ul').slideDown('swing');
    $(this).addClass('selected');
  }
});
