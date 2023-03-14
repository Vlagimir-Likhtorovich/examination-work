<script>


window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".open-menu").addEventListener("click", function () {
        document.querySelector(".mobil-menu").classList.toggle("hidden");
    });

    document.body.addEventListener("click", function (e) {
        if (!e.target.closest(".open-menu")) {
            document.querySelector(".mobil-menu").classList.add("hidden");
        }
    });
});
</script>