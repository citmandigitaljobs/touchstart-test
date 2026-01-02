// Get references to the elements
const touchArea = document.getElementById("touchArea");
const hiddenElement = document.getElementById("hiddenElement");

// Add a 'touchstart' event listener to the trigger element
touchArea.addEventListener("touchstart", function (event) {
  // Prevent the default browser behavior (like scrolling/zooming)
  // event.preventDefault();

  // Show the hidden element by changing its style
  // hiddenElement.style.display = 'hidden';
  hiddenElement.classList.remove("hidden");
  console.log("Element shown on touch");
});
  touchArea.addEventListener("click", function (event) {
    hiddenElement.classList.remove("hidden");
    console.log("Element show on click");
  });
// });
