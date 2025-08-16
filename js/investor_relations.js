document.addEventListener("DOMContentLoaded", () => {
    // Highlight navigation links on hover
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#f1c40f";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });

    // Show an alert for download links
    const downloadLinks = document.querySelectorAll(".download-link");
    downloadLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert("You are about to download the report.");
        });
    });
});
