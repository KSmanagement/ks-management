/* =========================================
   KS MANAGEMENT
   PREMIUM INTERACTIVE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       CREATE SCROLL PROGRESS
    ========================================= */

    const progressBar = document.createElement("div");

    progressBar.className = "scroll-progress";

    document.body.appendChild(progressBar);


    /* =========================================
       CREATE BACK TO TOP
    ========================================= */

    const backTop = document.createElement("button");

    backTop.className = "back-to-top";

    backTop.type = "button";

    backTop.setAttribute(
        "aria-label",
        "Kembali ke atas"
    );

    backTop.innerHTML = "↑";

    document.body.appendChild(backTop);


    /* =========================================
       CREATE CUSTOM CURSOR
    ========================================= */

    const isTouchDevice =
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) {

        const cursorDot =
            document.createElement("div");

        const cursorRing =
            document.createElement("div");

        cursorDot.className = "cursor-dot";

        cursorRing.className = "cursor-ring";

        document.body.appendChild(cursorDot);

        document.body.appendChild(cursorRing);


        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX = event.clientX;
                mouseY = event.clientY;

                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;


                document.body.style.setProperty(
                    "--mouse-x",
                    `${mouseX}px`
                );

                document.body.style.setProperty(
                    "--mouse-y",
                    `${mouseY}px`
                );

            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) * 0.15;

            ringY +=
                (mouseY - ringY) * 0.15;

            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;

            requestAnimationFrame(
                animateCursor
            );

        }

        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, .team-card, .talent-card, .project-card, .service-item, .vm-card"
            );


        interactiveElements.forEach(
            (element) => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        document.body.classList.add(
                            "cursor-hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        document.body.classList.remove(
                            "cursor-hover"
                        );

                    }
                );

            }
        );

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                const element =
                                    entry.target;

                                const delay =
                                    element.dataset.delay ||
                                    0;

                                setTimeout(
                                    () => {

                                        element.classList.add(
                                            "active"
                                        );

                                    },
                                    Number(delay)
                                );


                                observer.unobserve(
                                    element
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            (element, index) => {

                element.dataset.delay =
                    (index % 5) * 80;

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "active"
                );

            }
        );

    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const header =
        document.querySelector("header");


    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 40) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =========================================
       SCROLL PROGRESS
    ========================================= */

    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement
                .scrollHeight;

        const windowHeight =
            window.innerHeight;

        const scrollable =
            documentHeight -
            windowHeight;

        if (scrollable <= 0) {
            return;
        }

        const percentage =
            (scrollTop / scrollable) * 100;

        progressBar.style.width =
            `${percentage}%`;

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );

    updateProgress();


    /* =========================================
       BACK TO TOP
    ========================================= */

    function updateBackTop() {

        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop,
        { passive: true }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,

                behavior: "smooth"
            });

        }
    );


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuCheck =
        document.getElementById(
            "menuCheck"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    if (menuCheck) {

        navLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    () => {

                        menuCheck.checked =
                            false;

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            }
        );


        menuCheck.addEventListener(
            "change",
            () => {

                document.body.classList.toggle(
                    "menu-open",
                    menuCheck.checked
                );

            }
        );


        document.addEventListener(
            "click",
            (event) => {

                const navigation =
                    document.querySelector(
                        "nav"
                    );

                if (
                    menuCheck.checked &&
                    navigation &&
                    !navigation.contains(
                        event.target
                    )
                ) {

                    menuCheck.checked =
                        false;

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navMap = {};


    navLinks.forEach(
        (link) => {

            const href =
                link.getAttribute("href");

            if (
                href &&
                href.startsWith("#")
            ) {

                navMap[
                    href.substring(1)
                ] = link;

            }

        }
    );


    if ("IntersectionObserver" in window) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                navLinks.forEach(
                                    (link) => {

                                        link.classList.remove(
                                            "active"
                                        );

                                    }
                                );


                                const activeLink =
                                    navMap[
                                        entry.target.id
                                    ];


                                if (activeLink) {

                                    activeLink.classList.add(
                                        "active"
                                    );

                                }

                            }

                        }
                    );

                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px",

                    threshold: 0
                }
            );


        sections.forEach(
            (section) => {

                sectionObserver.observe(
                    section
                );

            }
        );

    }


    /* =========================================
       TEAM CARD 3D TILT
    ========================================= */

    const teamCards =
        document.querySelectorAll(
            ".team-card"
        );


    if (!isTouchDevice) {

        teamCards.forEach(
            (card) => {

                card.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;

                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;

                        const centerY =
                            rect.height / 2;


                        const rotateX =
                            ((y - centerY) /
                                centerY) *
                            -4;


                        const rotateY =
                            ((x - centerX) /
                                centerX) *
                            4;


                        card.style.transform =
                            `perspective(900px)
                             rotateX(${rotateX}deg)
                             rotateY(${rotateY}deg)
                             translateY(-6px)`;


                        card.style.setProperty(
                            "--card-x",
                            `${x}px`
                        );

                        card.style.setProperty(
                            "--card-y",
                            `${y}px`
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

    }
   

    /* =========================================
   INTERACTIVE CARD SPOTLIGHT
========================================= */

if (!isTouchDevice) {

    const interactiveCards =
        document.querySelectorAll(
            ".interactive-card"
        );

    interactiveCards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    card.style.setProperty(
                        "--card-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--card-y",
                        `${y}px`
                    );

                }
            );

        }
    );

}


    /* =========================================
       BUTTON MAGNETIC EFFECT
    ========================================= */

    if (!isTouchDevice) {

        const buttons =
            document.querySelectorAll(
                ".button"
            );


        buttons.forEach(
            (button) => {

                button.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            button.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;


                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        button.style.transform =
                            `translate(
                                ${x * 0.08}px,
                                ${y * 0.08}px
                            )`;

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    () => {

                        button.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =========================================
       PARALLAX HERO
    ========================================= */

    const hero =
        document.querySelector(".hero");

    const heroContent =
        document.querySelector(
            ".hero-content"
        );


    if (
        hero &&
        heroContent &&
        !isTouchDevice
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;

                if (
                    scroll <=
                    window.innerHeight
                ) {

                    heroContent.style.transform =
                        `translateY(${scroll * 0.12}px)`;

                }

            },
            { passive: true }
        );

    }


    /* =========================================
       SMOOTH ANCHOR SCROLL
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",

                        block: "start"
                    });

                }
            );

        }
    );


    /* =========================================
       ESCAPE CLOSE MENU
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                menuCheck &&
                menuCheck.checked
            ) {

                menuCheck.checked =
                    false;

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }
    );
/* =========================================
       INTERACTIVE TALENT / PROJECT MODAL
    ========================================= */

    const modal =
        document.getElementById("contentModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalClose =
        document.querySelector(".modal-close");

    const modalOverlay =
        document.querySelector(".modal-overlay");

    const interactiveCards =
        document.querySelectorAll(
            ".interactive-card"
        );


    const modalData = {

        "nawa-bhakti": {

            number: "01",

            category:
                "TRADITIONAL FOLK DANCE GROUP",

            title:
                "NAWA BHAKTI",

            description:
                "Nawa Bhakti merupakan salah satu talent yang berada dalam ekosistem KS MANAGEMENT. Fokus pada seni pertunjukan tradisional, Nawa Bhakti membawa karakter budaya dan kreativitas ke berbagai panggung pertunjukan."
        },


        "dkkt": {

            number: "02",

            category:
                "TRADITIONAL FOLK DANCE GROUP",

            title:
                "DKKT",

            description:
                "DKKT merupakan talent seni pertunjukan yang menghadirkan kekayaan budaya dan ekspresi seni tradisional melalui pertunjukan yang dikemas secara kreatif dan profesional."
        },


        "nadi-tradisi": {

            number: "01",

            category:
                "PERFORMANCE MANAGEMENT",

            title:
                "NADI TRADISI",

            description:
                "Nadi Tradisi merupakan project pertunjukan yang mengangkat nilai-nilai budaya dan tradisi melalui pengalaman seni yang dikembangkan secara kreatif."
        },


        "expo-canggal": {

            number: "02",

            category:
                "PERFORMANCE MANAGEMENT",

            title:
                "EXPO DESA CANGGAL",

            description:
                "Project performance management yang mendukung penyelenggaraan Expo Desa Canggal melalui pengelolaan pertunjukan, talent, dan kebutuhan acara."
        },


        "hut-polres": {

            number: "03",

            category:
                "PERFORMANCE MANAGEMENT · 2026",

            title:
                "HUT KE-80 POLRES TEMANGGUNG",

            description:
                "KS MANAGEMENT terlibat dalam pengelolaan kebutuhan pertunjukan untuk peringatan HUT ke-80 Polres Temanggung tahun 2026."
        }

    };


    function openModal(id) {

        if (!modal) {
            return;
        }


        const data =
            modalData[id];


        if (!data) {
            return;
        }


        modalNumber.textContent =
            data.number;

        modalCategory.textContent =
            data.category;

        modalTitle.textContent =
            data.title;

        modalDescription.textContent =
            data.description;


        modal.classList.add(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );


        document.body.style.overflow =
            "hidden";


        if (modalClose) {

            setTimeout(
                () => {
                    modalClose.focus();
                },
                100
            );

        }

    }


    function closeModal() {

        if (!modal) {
            return;
        }


        modal.classList.remove(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );


        document.body.style.overflow =
            "";

    }


    interactiveCards.forEach(
        (card) => {

            card.addEventListener(
                "click",
                () => {

                    const modalId =
                        card.dataset.modal;


                    openModal(
                        modalId
                    );

                }
            );


            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        const modalId =
                            card.dataset.modal;

                        openModal(
                            modalId
                        );

                    }

                }
            );

        }
    );


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }


 document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("active")
            ) {

                closeModal();

            }

        }
    );
/* =========================================================
   PREMIUM MOBILE INTERACTION
========================================================= */

if (isTouchDevice) {

    const touchElements =
        document.querySelectorAll(
            "a, button, .interactive-card, .team-card, .talent-card, .project-card, .service-item, .vm-card"
        );


    touchElements.forEach(
        (element) => {

            element.addEventListener(
                "touchstart",
                (event) => {

                    const touch =
                        event.touches[0];

                    if (!touch) {
                        return;
                    }


                    const ripple =
                        document.createElement("span");

                    ripple.className =
                        "touch-ripple";


                    ripple.style.left =
                        `${touch.clientX}px`;

                    ripple.style.top =
                        `${touch.clientY}px`;


                    document.body.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        600
                    );

                },
                {
                    passive: true
                }
            );

        }
    );


    /* =========================================
       MOBILE CARD FEEDBACK
    ========================================= */

    const mobileCards =
        document.querySelectorAll(
            ".interactive-card"
        );


    mobileCards.forEach(
        (card) => {

            card.addEventListener(
                "touchstart",
                () => {

                    card.classList.add(
                        "touch-active"
                    );

                },
                {
                    passive: true
                }
            );


            card.addEventListener(
                "touchend",
                () => {

                    setTimeout(
                        () => {

                            card.classList.remove(
                                "touch-active"
                            );

                        },
                        150
                    );

                },
                {
                    passive: true
                }
            );

        }
    );

}


/* =========================================================
   MOBILE VIEWPORT OPTIMIZATION
========================================================= */

function updateMobileViewport() {

    const viewportHeight =
        window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;


    document.documentElement.style.setProperty(
        "--real-vh",
        `${viewportHeight * 0.01}px`
    );

}


updateMobileViewport();


if (window.visualViewport) {

    window.visualViewport.addEventListener(
        "resize",
        updateMobileViewport
    );

} else {

    window.addEventListener(
        "resize",
        updateMobileViewport
    );

}


/* =========================================================
   MOBILE MENU AUTO CLOSE
========================================================= */

if (isTouchDevice && menuCheck) {

    const mobileNavigation =
        document.querySelector("nav");


    document.addEventListener(
        "touchstart",
        (event) => {

            if (
                !menuCheck.checked ||
                !mobileNavigation
            ) {
                return;
            }


            if (
                !mobileNavigation.contains(
                    event.target
                )
            ) {

                menuCheck.checked =
                    false;

                document.body.classList.remove(
                    "menu-open"
                );

            }

        },
        {
            passive: true
        }
    );

}
   /* =========================================================
   PREMIUM LOADING SCREEN
========================================================= */

window.addEventListener("load", () => {

    const siteLoader =
        document.getElementById("siteLoader");

    if (siteLoader) {

        setTimeout(() => {

            siteLoader.classList.add("loaded");

        }, 2200);

    }

});


/* =========================================================
   WELCOME SCREEN ENTER BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const welcomeScreen = document.getElementById("welcomeScreen");
    const enterWebsite = document.getElementById("enterWebsite");

    if (!welcomeScreen) {
        console.error("❌ #welcomeScreen tidak ditemukan.");
        return;
    }

    if (!enterWebsite) {
        console.error("❌ #enterWebsite tidak ditemukan.");
        return;
    }

    console.log("✅ Welcome Screen berhasil ditemukan.");
    console.log("✅ Tombol MASUK WEBSITE berhasil ditemukan.");

    // Kunci scroll selama Welcome Screen tampil
    document.body.style.overflow = "hidden";

    enterWebsite.addEventListener("click", () => {

        console.log("🟢 Tombol MASUK WEBSITE diklik.");

        // Efek tombol ditekan
        enterWebsite.classList.add("clicked");

        // Mulai animasi keluar
        setTimeout(() => {

            welcomeScreen.classList.add("hide");

            // Kembalikan scroll halaman
            document.body.style.overflow = "";

            console.log("✅ Welcome Screen sedang keluar.");

        }, 300);

    });
});
    /* =================================================
       END OF DOMCONTENTLOADED
    ================================================= */

});
