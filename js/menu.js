// Remove stale master page references that should have been replaced by production pages
(function() {
  var appPages = Fliplet.Env.get('appPages') || [];
  var masterPageIds = {};

  appPages.forEach(function(p) {
    if (p.masterPageId) {
      masterPageIds[p.masterPageId] = true;
    }
  });

  $('li[data-page-id]').each(function() {
    var pageId = $(this).attr('data-page-id');

    if (pageId && masterPageIds[pageId]) {
      $(this).remove();
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
