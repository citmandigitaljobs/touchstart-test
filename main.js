// Get references to the elements
const touchArea = document.getElementById('buttonOne');
const hiddenElement = document.getElementById('clickPreviewOne');

// Add a 'touchstart' event listener to the trigger element
touchArea.addEventListener('touchstart', function(event) {
    // Prevent the default browser behavior (like scrolling/zooming)
    event.preventDefault(); 
    
    // Show the hidden element by changing its style
    hiddenElement.style.display = 'block'; 
});
