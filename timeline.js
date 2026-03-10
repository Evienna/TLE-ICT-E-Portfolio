const observerOptions = {
    root: null,
    threshold: 0.1, // Triggers when just 10% of the box is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the view
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stops watching once revealed
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});
