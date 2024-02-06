// script.js
document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const wrapper = document.getElementById("wrapper");
    const successMessage = document.querySelector(".hidden");

    noButton.addEventListener("click", function(event) {
        // Get the position of the click relative to the viewport
        const clickX = event.clientX;
        const clickY = event.clientY;

        // Calculate random values for the new position
        const randomOffsetX = getRandomInt(-100, 100); // Adjust range as needed
        const randomOffsetY = getRandomInt(-100, 100); // Adjust range as needed

        // Calculate the new position for the button
        const newPositionX = clickX + randomOffsetX;
        const newPositionY = clickY + randomOffsetY;

        // Move the button to the new position
        noButton.style.position = "fixed";
        noButton.style.top = newPositionY + "px";
        noButton.style.left = newPositionX + "px";

        // Make the button smaller
        noButton.style.transform = "scale(0.7)";
    });

    const yesButton = document.getElementById("yes");
    yesButton.addEventListener("click", function() {
        // Hide the wrapper
        wrapper.classList.add("hidden");
        // Show the success message
        successMessage.classList.remove("hidden");
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
