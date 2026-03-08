// 2. LIGHTBOX LOGIC
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const thumbnails = document.querySelectorAll(".thumbnail");

// This looks for any image with the class "thumbnail" and makes it clickable
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightboxImg.src = img.src;
    });
});

// Close when clicking the dark background
lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});
