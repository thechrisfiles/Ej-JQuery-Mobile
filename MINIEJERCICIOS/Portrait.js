$(document).on("mobileinit", function() {
  $(function() {
    $(window).on("orientationchange", function(event) {
      if (window.matchMedia("(orientation: portrait)").matches) {
        $("#acorde").collapsible({ collapsed: false });
      } else {
        $("#acorde").collapsible({ collapsed: true });
      }
    });
    $(window).orientationchange();
  });
});
