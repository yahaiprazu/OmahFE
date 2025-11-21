// Testimonials Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            name: "John Doe",
            position: "Staff of OmahTI",
            photo: "images/profile.jpg"
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            name: "Jane Smith",
            position: "Leader of OmahTI", 
            photo: "images/profile.jpg"
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            name: "Mike Johnson",
            position: "Cleaning Service of OmahTI",
            photo: "images/profile.jpg"
        }
    ];

    let currentTestimonial = 0;
    const testimonialCard = document.getElementById('testimonialCard');
    const profileImg = document.getElementById('profileImg');
    const testimonialQuote = document.getElementById('testimonialQuote');
    const authorName = document.getElementById('authorName');
    const authorPosition = document.getElementById('authorPosition');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const sliderDots = document.getElementById('sliderDots');

    // Initialize dots
    function initDots() {
        sliderDots.innerHTML = '';
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `dot ${index === currentTestimonial ? 'active' : ''}`;
            dot.addEventListener('click', () => goToTestimonial(index));
            sliderDots.appendChild(dot);
        });
    }

    // Update testimonial content
    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        
        // Add fade-out effect
        testimonialCard.style.opacity = '0';
        
        setTimeout(() => {
            profileImg.src = testimonial.photo;
            profileImg.alt = testimonial.name;
            testimonialQuote.textContent = testimonial.quote;
            authorName.textContent = testimonial.name;
            authorPosition.textContent = testimonial.position;
            
            // Update dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
            
            // Fade back in
            testimonialCard.style.opacity = '1';
        }, 300);
    }

    // Navigate to specific testimonial
    function goToTestimonial(index) {
        currentTestimonial = index;
        updateTestimonial();
    }

    // Next testimonial
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }

    // Previous testimonial
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    }

    // Event listeners
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);

    // Initialize
    initDots();
    updateTestimonial();

    // Auto-rotate testimonials (optional)
    // setInterval(nextTestimonial, 5000);
});