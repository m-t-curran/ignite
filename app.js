// Check if the browser supports the beforeinstallprompt event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI to notify the user they can add to home screen
  showAddToHomeScreen();
});

// Function to show the "Add to Home Screen" button
function showAddToHomeScreen() {
  const btnAdd = document.getElementById('btnAdd');
  btnAdd.style.display = 'block';

  // Attach click event handler to the "Add to Home Screen" button
  btnAdd.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Clear the deferred prompt variable
      deferredPrompt = null;
    });
  });
}
