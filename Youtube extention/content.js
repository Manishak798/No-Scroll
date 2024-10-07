const hideShortsButton = () => {
    // Log all potential buttons
    const buttons = Array.from(document.querySelectorAll('yt-formatted-string'));
    console.log("Available buttons: ", buttons);

    // Select the 'Shorts' button using its text content
    const shortsButton = buttons.find(button => button.textContent.toLowerCase() === 'shorts');

    if (shortsButton) {
        // Hide the button if found
        shortsButton.closest('ytd-guide-entry-renderer').style.display = 'none'; // Hide the parent renderer
        console.log("Shorts button hidden");
    } else {
        console.log("Shorts button not found");
    }

    // Observe changes to the DOM in case the button is re-added
    const observer = new MutationObserver(() => {
        const shortsButton = Array.from(document.querySelectorAll('yt-formatted-string'))
            .find(button => button.textContent.toLowerCase() === 'shorts');

        if (shortsButton) {
            shortsButton.closest('ytd-guide-entry-renderer').style.display = 'none'; // Hide the parent renderer
            console.log("Shorts button hidden again");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};

// Execute the function to hide the button after the DOM is fully loaded
window.addEventListener("load", () => {
    setTimeout(hideShortsButton, 2000); // Increased delay
});
