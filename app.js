$(document).ready(function() {
    // Smooth scrolling
    $("a").on("click", function(event) {
        var hash = this.hash;
        // Special case for the 'Swarnadeep Saha' link
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
                    // Update the URL without adding the hash to the end
                    history.replaceState(null, null, hash);
                }
            }.bind(this)); // Bind 'this' to have access to it inside the callback
        }
    });
});
