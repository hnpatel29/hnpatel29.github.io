function validate(event) {
  const lat = document.getElementById("lat");
  const long = document.getElementById("lng");

  if (long.value < -180 || long.value > 180) {
    event.preventDefault();
    var errElement = document.getElementById("lngerr");
    errElement.innerText = "must be a valid Longitude(-180 to 180)";
    errElement.style.visibility = "visible";
  }

  if (lat.value < -90 || lat.value > 90) {
    event.preventDefault();
    var errElement = document.getElementById("laterr");
    errElement.innerText = "must be a valid Latitude(-90 to 90)";
    errElement.style.visibility = "visible";
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
