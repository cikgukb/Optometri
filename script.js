document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Form Handling
    const interestForm = document.getElementById('interestForm');
    
    interestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        
        // Construct WhatsApp message
        const whatsappNumber = "60133815817";
        const message = `Halo Optimetri,%0A%0ASaya berminat untuk mendapatkan perkhidmatan anda.%0A%0A*Butiran:*%0A- Nama: ${name}%0A- Telefon: ${phone}%0A- Perkhidmatan: ${service}%0A%0ASila hubungi saya semula untuk tindakan lanjut. Terima kasih!`;
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        // Feedback before redirect
        const submitBtn = interestForm.querySelector('button');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Mengalihkan ke WhatsApp...";
        submitBtn.disabled = true;
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            interestForm.reset();
        }, 1000);
    });
});
