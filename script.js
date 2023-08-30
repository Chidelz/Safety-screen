document.addEventListener("DOMContentLoaded", function() {
    const webpageUrls = ["https://uindy.edu", "https://uindy.edu/cas/engineering/"];
    let currentIndex = 0;

    // Create a function to display the webpages
    function changeWebpage() {
        // This iframe will display the rotating webpages.
        const iframe = document.getElementById("webpage-iframe");

        // Fade out the iframe
        iframe.style.opacity = 0;

        setTimeout(function() {
            // Change the iframe source
            iframe.src = webpageUrls[currentIndex];

            // Increment the index for the next iteration
            currentIndex = (currentIndex + 1) % webpageUrls.length;

            // Fade in the iframe
            iframe.style.opacity = 1;
        }, 2000); // Wait for 2 seconds for the fade-out animation

    }

    // Call the function initially
    changeWebpage();

    // Set up the interval for changing webpages
    setInterval(changeWebpage, 10000); // 10 seconds in milliseconds
});