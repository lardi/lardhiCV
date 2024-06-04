// Function to fetch and embed the SVG
function loadSVG() {
    fetch('images/myPhoto.svg')
        .then(response => response.text())
        .then(svgText => {
            // Insert the SVG into the container
            document.getElementById('svgContainer').innerHTML = svgText;

            // Select all the rect elements
            const rects = document.querySelectorAll('#svgContainer rect');
            const rectArray = Array.from(rects);

            // Function to get a random subset of elements
            function getRandomSubset(arr, size) {
                const shuffled = arr.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, size);
            }

            // Select 50 random rect elements
            const randomRects = getRandomSubset(rectArray, 70);

            // Apply random fade effect to each selected rect
            randomRects.forEach(rect => {
                const randomDelay = Math.random() * 2000;  // Delay range
                setTimeout(() => {
                    rect.classList.add('rect-shiny');
                    // Remove the class after a random duration and reapply
                    const randomInterval = Math.random() * 2000 + 1000;  // Interval range
                    setInterval(() => {
                        rect.classList.remove('rect-shiny');
                        setTimeout(() => {
                            rect.classList.add('rect-shiny');
                        }, randomInterval);
                    }, randomInterval);
                }, randomDelay);
            });
        })
        .catch(error => console.error('Error fetching SVG:', error));
    fetch('images/logo.svg')
        .then(response => response.text())
        .then(svgText => {
            // Insert the SVG into the container
            document.getElementById('svgLogoContainer').innerHTML = svgText;
        })
}

// Load the SVG when the DOM is ready
document.addEventListener('DOMContentLoaded', loadSVG);

document.addEventListener('DOMContentLoaded', function() {
    function handleScroll() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('active-scroll');
        } else {
            header.classList.remove('active-scroll');
        }
    }

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);
});


// Loading screen script
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 1000); 
});
