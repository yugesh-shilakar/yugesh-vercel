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





let slideIndex = 1;

function openModal(imagePath) {
  document.getElementById('myModal').style.display = 'block';
  document.getElementById('modalImage').src = imagePath;
  slideIndex = getSlideIndex(imagePath);
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const images = document.querySelectorAll('.gallery__item');
  if (n > images.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = images.length;
  }
  document.getElementById('modalImage').src = images[slideIndex - 1].firstElementChild.src;
}

function getSlideIndex(imagePath) {
  const images = document.querySelectorAll('.gallery__item');
  for (let i = 0; i < images.length; i++) {
    if (images[i].firstElementChild.src === imagePath) {
      return i + 1;
    }
  }
  return 1; // Default to the first slide if not found
}

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;

  // Function to disable scrolling
  function disableScroll() {
    body.style.overflow = 'hidden';
  }

  // Function to enable scrolling
  function enableScroll() {
    body.style.overflow = 'visible';
  }

  // ... (Your existing code)

  // modal
  function openModal(imagePath) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    // Set the source of the modal image
    modalImage.src = imagePath;

    // Show the modal
    modal.style.display = 'block';

    // Disable scrolling on the body
    disableScroll();
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');

    // Hide the modal
    modal.style.display = 'none';

    // Enable scrolling on the body
    enableScroll();
  }

});