function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
// Show the default section (e.g., Photography) when the page loads
showSection('gallery');


  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navList = document.querySelector('.nav__list');

    hamburgerBtn.addEventListener('click', function () {
      navList.classList.toggle('active');
    });

    // Function to show the selected section
    function showSection(sectionId) {
      // Hide all sections
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => section.classList.remove('active'));

      // Show the selected section
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.classList.add('active');
      }

      // Close the mobile menu
      navList.classList.remove('active');
    }
  });
// modal
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
  
    // Set the image source for the modal
    modalImage.src = imageSrc;
  
    // Display the modal
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("myModal");
  
    // Hide the modal
    modal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
  
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };


