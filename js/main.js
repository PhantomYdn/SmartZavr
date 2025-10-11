document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span:last-child');

            // Toggle answer
            answer.classList.toggle('hidden');

            // Toggle icon
            if (answer.classList.contains('hidden')) {
                icon.textContent = '+';
            } else {
                icon.textContent = '−';
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            console.log('Form submit event fired');
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('entry.2101930330');
            const phone = formData.get('entry.638091186');
            const grade = formData.get('entry.2145369962');

            console.log('Form data:', { name, phone, grade });

        try {
            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfOTcVtYYLBmdJF1BVZfBzqoDAAkaUXpPX-nVH1GiWBqwK9Hw/formResponse', {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Google Forms requires no-cors for cross-origin
            });

            // Since no-cors, we can't check response, but if no error, assume success
            formMessage.textContent = `Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} в ближайшее время.`;
            formMessage.className = 'mt-4 text-center text-smart-green font-semibold';
            formMessage.classList.remove('hidden');

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);

            // Optional: Send to Telegram bot or email service
            // sendToTelegram(name, phone, grade);
        } catch (error) {
            console.error('Error submitting form:', error);
            formMessage.textContent = 'Произошла ошибка при отправке формы. Попробуйте еще раз.';
            formMessage.className = 'mt-4 text-center text-red-500 font-semibold';
            formMessage.classList.remove('hidden');
        }
        });
    } else {
        console.error('Contact form not found');
    }

    // Callback Modal
    const callbackBtn = document.getElementById('callback-btn');
    const callbackModal = document.getElementById('callback-modal');
    const closeModal = document.getElementById('close-modal');
    const callbackForm = document.getElementById('callback-form');
    const callbackMessage = document.getElementById('callback-message');

    if (callbackBtn && callbackModal && closeModal && callbackForm && callbackMessage) {
        callbackBtn.addEventListener('click', () => {
            callbackModal.classList.remove('hidden');
        });

        closeModal.addEventListener('click', () => {
            callbackModal.classList.add('hidden');
        });

        // Close modal when clicking outside
        callbackModal.addEventListener('click', (e) => {
            if (e.target === callbackModal) {
                callbackModal.classList.add('hidden');
            }
        });

        // Callback Form Submission
        callbackForm.addEventListener('submit', async (e) => {
            console.log('Callback form submit event fired');
            e.preventDefault();

            const formData = new FormData(callbackForm);
            const name = formData.get('entry.2101930330');
            const phone = formData.get('entry.638091186');

            console.log('Callback form data:', { name, phone });

        try {
            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfOTcVtYYLBmdJF1BVZfBzqoDAAkaUXpPX-nVH1GiWBqwK9Hw/formResponse', {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Google Forms requires no-cors for cross-origin
            });

            // Since no-cors, we can't check response, but if no error, assume success
            callbackMessage.textContent = `Спасибо, ${name}! Мы перезвоним вам в ближайшее время.`;
            callbackMessage.className = 'mt-4 text-center text-smart-green font-semibold';
            callbackMessage.classList.remove('hidden');

            callbackForm.reset();

            setTimeout(() => {
                callbackModal.classList.add('hidden');
                callbackMessage.classList.add('hidden');
            }, 3000);
        } catch (error) {
            console.error('Error submitting callback form:', error);
            callbackMessage.textContent = 'Произошла ошибка при отправке формы. Попробуйте еще раз.';
            callbackMessage.className = 'mt-4 text-center text-red-500 font-semibold';
            callbackMessage.classList.remove('hidden');
        }
        });
    } else {
        console.error('Callback elements not found');
    }
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active section highlighting in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-smart-green', 'font-bold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-smart-green', 'font-bold');
        }
    });
});

// Phone number formatting (simple)
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 0) {
            if (value[0] === '7') {
                value = value.substring(1);
            }
            if (value.length <= 10) {
                let formatted = '+7';
                if (value.length > 0) formatted += ' (' + value.substring(0, 3);
                if (value.length > 3) formatted += ') ' + value.substring(3, 6);
                if (value.length > 6) formatted += '-' + value.substring(6, 8);
                if (value.length > 8) formatted += '-' + value.substring(8, 10);
                e.target.value = formatted;
            }
        }
    });
});

// Optional: Function to send data to Telegram bot
function sendToTelegram(name, phone, grade = '') {
    const botToken = 'YOUR_BOT_TOKEN'; // Replace with your bot token
    const chatId = 'YOUR_CHAT_ID'; // Replace with your chat ID

    const message = `🆕 Новая заявка!\n\nИмя: ${name}\nТелефон: ${phone}${grade ? `\nКласс: ${grade}` : ''}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => console.log('Telegram message sent:', data))
    .catch(error => console.error('Error sending to Telegram:', error));
}
