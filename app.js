$(document).ready(function() {
    // Smooth scrolling
    $("a").on("click", function(event) {
        var hash = this.hash;
        if (this.text === "Swarnadeep Saha") {
            hash = "body";
        }
        if (hash !== "") {
            event.preventDefault();
            var offset = $(hash).offset().top;
            var navbarHeight = $(".navbar").outerHeight();
            $("html, body").animate({
                scrollTop: offset - navbarHeight
            }, 800, function() {
                if (this.text !== "Swarnadeep Saha") {
                    history.replaceState(null, null, hash);
                }
            }.bind(this)); 
        }
    });
});
