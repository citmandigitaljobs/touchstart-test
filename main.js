// Get the modal
var modalOne = document.getElementById("modalOne");

// Get the button that opens the modal
var btnOne = document.getElementById("buttonOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-one")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalOne.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// ------------

// Get the modal
var modalTwo = document.getElementById("modalTwo");

// Get the button that opens the modal
var btnTwo = document.getElementById("buttonTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-two")[0];

// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTwo.style.display = "none";
}

// ---------------

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventTwo) {
//   if (eventTwo.target == modalTwo) {
//     modalTwo.style.display = "none";
//   }
// }
// ------------


// Function to close all modals
  // function closeAllModals() {
  //   document.querySelectorAll('.modal').forEach(modal => {
  //     modal.classList.display('none');
  //         // modal.classList.style.display('none');
  //   });
  // }

// Listen for clicks anywhere on the window
  // window.addEventListener('click', function(event) {
  //   // If the click is NOT inside a modal-content, close all modals
  //   if (!event.target.closest('.modal')) {
  //     closeAllModals();
  //   }
  // });
