// Deduplicate menu items by page ID to fix corrupted menu data
(function() {
  var seenPages = {};

  $('[data-page-id]').each(function() {
    var pageId = $(this).attr('data-page-id');

    if (seenPages[pageId]) {
      $(this).remove();
    } else {
      seenPages[pageId] = true;
    }
  });
})();

if (Modernizr.backdropfilter) {
  $('.body').addClass('backdropfilter');
}

$('.fl-menu-overlay').click(function() {
  $(this).closest('.fl-menu').removeClass('active');
});

$('.fl-menu .fl-close-menu').on('click', function() {
  $(this).parents('.fl-menu').removeClass('active');
});
