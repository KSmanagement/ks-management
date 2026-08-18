/* =========================================
   KS MANAGEMENT - WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const welcomeScreen = document.getElementById("welcomeScreen");
    const enterButton = document.getElementById("enterWebsite");

    console.log("WELCOME SCRIPT AKTIF");

    if (!welcomeScreen) {
        console.error("welcomeScreen tidak ditemukan");
        return;
    }

    if (!enterButton) {
        console.error("enterWebsite tidak ditemukan");
        return;
    }

    /* Kunci scroll selama welcome tampil */
    document.body.style.overflow = "hidden";

    /* Tombol MASUK WEBSITE */
    enterButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        console.log("TOMBOL MASUK DIKLIK");

        /* Efek tombol */
        enterButton.classList.add("clicked");

        /* Animasi keluar */
        setTimeout(function () {

            welcomeScreen.classList.add("hide");

            /* Aktifkan kembali website */
            document.body.style.overflow = "";

            /* Pastikan tidak menghalangi website */
            setTimeout(function () {

                welcomeScreen.style.display = "none";

            }, 900);

        }, 250);

    });

});
