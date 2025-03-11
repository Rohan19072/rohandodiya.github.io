document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scroll-down").addEventListener("click", function() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
});
