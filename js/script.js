document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("main input");

    // Add animations to the search bar
    searchInput.addEventListener("focus", () => {
        searchInput.style.boxShadow = "0 0 10px rgba(255, 71, 87, 0.7)";
        searchInput.style.transition = "box-shadow 0.3s ease-in-out";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.boxShadow = "none";
    });

    // Header link hover animation
    const headerLinks = document.querySelectorAll("header ul li a");
    headerLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s ease-in-out";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Add placeholder animation reset on blur
    searchInput.addEventListener("blur", () => {
        if (!searchInput.value) {
            searchInput.placeholder = "Search for restaurant, cuisine or a dish";
        }
    });

    // Collection cards click functionality
    const collectionCards = document.querySelectorAll(".collection-card");
    collectionCards.forEach((card) => {
        card.addEventListener("click", () => {
            alert(`You selected the "${card.querySelector("h3").textContent}" collection.`);
        });
    });
});
