document.addEventListener("DOMContentLoaded", () => {
    const restaurantForm = document.getElementById("restaurant-form");

    restaurantForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const restaurantName = document.getElementById("restaurant-name").value;
        const ownerName = document.getElementById("owner-name").value;
        const address = document.getElementById("restaurant-address").value;
        const contact = document.getElementById("restaurant-contact").value;
        const description = document.getElementById("restaurant-description").value;

        if (restaurantName && ownerName && address && contact) {
            alert(`Restaurant "${restaurantName}" has been added successfully!`);
            restaurantForm.reset();
        } else {
            alert("Please fill out all required fields.");
        }
    });
});
