document.addEventListener("DOMContentLoaded", function() {
  const getLocationBtn = document.getElementById("getLocationBtn");
  
  getLocationBtn.addEventListener("click", function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
          // You can do something with the coordinates here, such as display them on the page
          alert("Your location: Latitude " + latitude + ", Longitude " + longitude);
        },
        function(error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.error("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  });
});
