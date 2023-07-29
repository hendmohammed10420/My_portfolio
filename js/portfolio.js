$(document).ready(function() {
    console.log("Script loaded successfully.");
    $(".navT").on("click", function() {
        console.log("Menu icon clicked."); // Add this line
        $(this).toggleClass("active");
        $("#menu").toggleClass("open");
        $(".content").toggleClass("shift");    
      });
      

          // Close the menu when clicking outside
    $(document).on("click", function(event) {
        if (!$(event.target).closest("#menu").length && !$(event.target).closest(".navT").length) {
            $("#menu").removeClass("open");
            $(".navT").removeClass("active");
            $(".content").removeClass("shift");
        }
    });

    // Close the menu when clicking on a menu item
    $("#menu a").on("click", function() {
        $("#menu").removeClass("open");
        $(".navT").removeClass("active");
        $(".content").removeClass("shift");
    });
});
// Function to apply the animation when the section comes into the viewport
function animateSection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing after animation is applied
      }
    });
  }
  
  // Create an Intersection Observer
  const sectionObserver = new IntersectionObserver(animateSection, {
    root: null,
    threshold: 0.3, // Adjust this threshold to control when the animation triggers
  });
  
  // Select all sections you want to animate
  const sectionsToAnimate = document.querySelectorAll('section');
  
  // Start observing each section
  sectionsToAnimate.forEach(section => {
    sectionObserver.observe(section);
  });
  



  document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('5D7_Fmf2aCwkZGOut'); // Replace 'YOUR_EMAILJS_USER_ID' with your actual EmailJS user ID

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Compose the email content
        const templateParams = {
            to_name: 'Hend', // Replace with your name or recipient name
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send the email using EmailJS service
        emailjs.send('service_j38o60n', 'template_mb2nq5d', templateParams)
            .then(function (response) {
                console.log('Email sent successfully:', response);
                // Optionally, show a success message or redirect to a thank-you page here
            }, function (error) {
                console.log('Failed to send email:', error);
                // Optionally, show an error message here
            });

        // Clear the form fields
        form.reset();
    });
});

