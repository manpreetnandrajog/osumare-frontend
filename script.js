// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });

    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq input[type="checkbox"]');
    faqItems.forEach(faq => {
        faq.addEventListener('change', function() {
            if (faq.checked) {
                faq.parentElement.classList.add('active');
            } else {
                faq.parentElement.classList.remove('active');
            }
        });
    });

    
