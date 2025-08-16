document.querySelector(".home-link").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (email === "" || password === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate a login process (You can replace this with an API call)
        if (email === "user@example.com" && password === "password123") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to a dashboard or homepage
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
