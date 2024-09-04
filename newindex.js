document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("data-section");
      sections.forEach((section) => {
        section.classList.remove("active-section");
      });
      document.getElementById(sectionId).classList.add("active-section");
    });
  });

  const elementsToChange = document.querySelectorAll('.CWstyle');

  elementsToChange.forEach(element => {
    element.addEventListener('mouseover', function () {
      this.style.color = 'red';
    });
  
    element.addEventListener('mouseout', function () {
      this.style.color = '#000'; // Reset to default color
    });
  });

  const elementsToColor = document.querySelectorAll('.card-link');

  elementsToColor.forEach(element => {
    element.addEventListener('mouseover', function () {
      this.style.color = 'blue';
    });
  
    element.addEventListener('mouseout', function () {
      this.style.color = 'black'; // Reset to default color
    });
  });
});
// add the contact mail sharing system here 
// The JavaScript handles form validation and optionally sends the form data to a server using the Fetch API. You can replace 'https://your-server-endpoint.com/send-message' with the actual URL of your server endpoint.
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  sendMail();
});

function sendMail(){
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  const serviceID = "service_250sjkc";
  const templateID = "template_69jdnp8";

  emailjs.send(serviceID, templateID, params)
  .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
  })
  .catch(err => console.log(err));
}

