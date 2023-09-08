// Select the button and input field
const emailButton = document.getElementById('email-btn');
const emailInput = document.getElementById('email-input'); // Assuming you have an input field
const errorText = document.getElementById('error-text'); // Assuming you have an element for error messages

// Add a click event listener to the button
emailButton.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the user's email input
    const userEmail = emailInput.value;

    // Check if the email input is empty
    if (userEmail.trim() === '') {
        // Display an error message
        errorText.textContent = 'Please enter an email address.';
    } else {
        // Perform validation or other actions
        // ...
    }
});
