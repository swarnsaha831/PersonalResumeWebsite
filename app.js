$(document).ready(function() {
    // Smooth scrolling
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        var offset = $(hash).offset().top;
        var navbarHeight = $(".navbar").outerHeight();
        $("html, body").animate({
          scrollTop: offset - navbarHeight
        }, 800, function() {
          // Update the URL without adding the hash to the end
          history.replaceState(null, null, hash);
        });
      }
    });
});
