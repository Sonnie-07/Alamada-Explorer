// Get modal and close button
const modal = document.getElementById("galleryModal");
const closeBtn = document.querySelector(".close");

// When any destination card is clicked
document.querySelectorAll(".destination-card").forEach(card => {
  card.addEventListener("click", () => {
    const images = card.dataset.images.split(","); // Get array of images

    // Assign each image to modal img elements
    for (let i = 0; i < 4; i++) {
      const imgElement = document.getElementById(`img${i+1}`);
      imgElement.src = images[i] ? images[i].trim() : ""; // Handle less than 4 images
    }

    // Show modal
    modal.style.display = "block";
  });
});

// Close modal when clicking ×
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside gallery
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
  
});
