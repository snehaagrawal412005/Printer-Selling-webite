var activeButtonId = 'button1';

function changeColor(buttonId) {
    var button = document.getElementById(buttonId);

    
    var bgColor = "#171614"; // Red color as an example
    var textColor = "#f2f2f2"
    // Reset the color of the previously active button
    if (activeButtonId !== null) {
        var prevActiveButton = document.getElementById(activeButtonId);
        prevActiveButton.style.backgroundColor = "";
        prevActiveButton.style.color = "#171614";
    }

    // Set the color of the currently clicked button
    button.style.backgroundColor = bgColor;
    button.style.color = textColor

    // Update the activeButtonId
    activeButtonId = buttonId;
}

function itemadded() {
    alert("Item Is Added");
}