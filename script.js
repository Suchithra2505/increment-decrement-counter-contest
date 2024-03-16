document.addEventListener("DOMContentLoaded", function() {
    const countElement = document.getElementById("count");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const clearButton = document.getElementById("clear");
    const errorMessage = document.querySelector(".error-message");

    let count = 0;

    incrementButton.addEventListener("click", function() {
        count++;
        countElement.textContent = count;
        toggleClearButton();
        hideErrorMessage();
    });

    decrementButton.addEventListener("click", function() {
        if (count > 0) {
            count--;
            countElement.textContent = count;
            toggleClearButton();
            hideErrorMessage();
        } else {
            showErrorMessage();
        }
    });

    clearButton.addEventListener("click", function() {
        count = 0;
        countElement.textContent = count;
        hideErrorMessage();
        toggleClearButton();
    });

    function toggleClearButton() {
        if (count === 0) {
            clearButton.style.display = "none";
        } else {
            clearButton.style.display = "block";
        }
    }

    function showErrorMessage() {
        errorMessage.style.display = "block";
    }

    function hideErrorMessage() {
        errorMessage.style.display = "none";
    }
});


