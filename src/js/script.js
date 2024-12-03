// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

// Pour déléguer l'événement click sur les images
document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("[data-full-img]")) {
        lightboxImg.src = evt.target.dataset.fullImg;
        lightbox.showModal();
    }
});

lightbox.addEventListener("click", (evt) => {
    lightbox.classList.add("sortie");
    lightbox.addEventListener(
        "animationend",
        () => {
            const lightbox = null;
            lightbox.classList.remove("sortie");
            lightbox.close();
        },
        { once: true }
    );
});