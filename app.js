document.addEventListener("DOMContentLoaded", function() {
  const getLocationBtn = document.getElementById("getLocationBtn");
  const locationMessage = document.getElementById("locationMessage");
  
  getLocationBtn.addEventListener("click", function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // Display the location message on the screen
          locationMessage.innerHTML = "<h3>Your location: Latitude " + latitude + ", Longitude " + longitude + "</h3>";
        },
        function(error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              locationMessage.innerHTML = "<h3>User denied the request for Geolocation.</h3>";
              break;
            case error.POSITION_UNAVAILABLE:
              locationMessage.innerHTML = "<h3>Location information is unavailable.</h3>";
              break;
            case error.TIMEOUT:
              locationMessage.innerHTML = "<h3>The request to get user location timed out.</h3>";
              break;
            case error.UNKNOWN_ERROR:
              locationMessage.innerHTML = "<h3>An unknown error occurred.</h3>";
              break;
          }
        }
      );
    } else {
      locationMessage.innerHTML = "<h3>Geolocation is not supported by this browser.</h3>";
    }
  });
});
