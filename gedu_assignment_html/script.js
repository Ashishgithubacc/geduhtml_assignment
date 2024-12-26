document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });
  });
  document.addEventListener("DOMContentLoaded", () => {
    fetch("banner.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("banner").innerHTML = data;
      });
  });
  document.addEventListener("DOMContentLoaded", () => {
    fetch("aboutus.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("aboutus").innerHTML = data;
      });
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch("service.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("service").innerHTML = data;
      });
  });
  document.addEventListener("DOMContentLoaded", () => {
    fetch("presence.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("presence").innerHTML = data;
      });
  });
  document.addEventListener("DOMContentLoaded", () => {
    fetch("number.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("number").innerHTML = data;
      });
  });
  document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });
  });