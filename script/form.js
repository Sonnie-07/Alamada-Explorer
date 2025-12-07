// Initialize EmailJS
(function () {
    emailjs.init("98gAyaA5dY8UelCcJ");   
    // ⚠ Replace "YOUR_PUBLIC_KEY" with your actual EmailJS Public Key
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop page refresh

        // Send email using EmailJS
        emailjs.sendForm("service_svfj2f6", "template_vai3g28", form)
            .then(() => {
                alert("Your reservation has been submitted successfully!");
                form.reset(); // Clear form fields
            }, (error) => {
                alert("There was an error submitting your reservation. Please try again.");
                console.error("EmailJS Error:", error);
            });       
    });
});
