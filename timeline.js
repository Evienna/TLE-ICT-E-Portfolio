const items = document.querySelectorAll('.timeline-item');

const showItems = () => {
    // Reveal when the item is 80% of the way up the screen
    const triggerBottom = window.innerHeight / 5 * 4;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom) {
            item.classList.add('show');
        }
    });
};

// Listen for scrolling
window.addEventListener('scroll', showItems);

// Run once on load just in case some are already visible
showItems();
