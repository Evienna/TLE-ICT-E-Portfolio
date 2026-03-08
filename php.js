// This alert is just for testing. Delete the next line once you see it works!
alert("JS is working!"); 

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(img => {
    img.onclick = function() {
        console.log("Image clicked!"); // This shows in the 'Inspect' console
        lightbox.classList.remove("hidden");
        lightboxImg.src = this.src;
    }
});

lightbox.onclick = function() {
    lightbox.classList.add("hidden");
};
