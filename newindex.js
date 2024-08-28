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
      this.style.color = '#fff'; // Reset to default color
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

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && contact && email && message) {
      alert('Message sent successfully!');

      // Optionally, you can add code here to send the form data to a server
      const formData = {
          name: name,
          contact: contact,
          email: email,
          message: message
      };

      fetch('https://your-server-endpoint.com/send-message', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });

  } else {
      alert('Please fill in all fields.');
  }
});



