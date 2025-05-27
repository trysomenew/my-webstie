// This function changes the heading text
function changeText() {
  document.getElementById("main-heading").innerText = "🎉 Welcome Back, Rahul!";
}

// This function changes the background color
function changeColor() {
  document.body.style.backgroundColor = "#ffe4e1";
}

// This function shows current time
function showTime() {
  const now = new Date();
  document.getElementById("show-time").innerText = "Current Time: " + now.toLocaleTimeString();
}
