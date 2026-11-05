// Yandex Metrica Goal Tracking
function trackYandexGoal(goalName) {
    if (typeof ym !== 'undefined') {
        ym(104701968, 'reachGoal', goalName);
        console.log('Yandex Metrica goal tracked:', goalName);
    } else {
        console.warn('Yandex Metrica not loaded, goal not tracked:', goalName);
    }
}

// Leads go to a Google Apps Script web app that appends them to a Google Sheet.
// The deployment must be published as "Execute as: Me" + "Who has access: Anyone",
// otherwise Google answers 403 "Access Denied" and nothing reaches the sheet.
const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxAZ7tRZYivDewq8lYxM7LyPidZbGNIkIR3S4-1U9AM0IXf09Vre3zLxl07oRqH1iLfDw/exec';

// A text/plain body keeps this a "simple" request (no CORS preflight, which Apps
// Script cannot answer). Apps Script then redirects to googleusercontent.com with
// CORS headers, so the final response is readable and a failure is a real failure.
async function submitLead(payload) {
    const response = await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw new Error(`Lead endpoint answered ${response.status}`);
    }
    const text = await response.text();
    let data = null;
    try { data = JSON.parse(text); } catch { /* script may answer with plain text */ }
    if (data && (data.result === 'error' || data.status === 'error' || data.success === false)) {
        throw new Error(data.error || data.message || 'Lead endpoint reported an error');
    }
    return data ?? text;
}

const FALLBACK_CONTACTS = 'Напишите нам в Telegram <a href="https://t.me/AVmathematics" class="underline">@AVmathematics</a> или позвоните <a href="tel:+79959191301" class="underline">+7 995 919-13-01</a>.';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const open = mobileMenu.classList.toggle('hidden') === false;
            mobileMenuBtn.setAttribute('aria-expanded', String(open));
            mobileMenuBtn.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-label', 'Открыть меню');
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
            question.setAttribute('aria-expanded', String(!answer.classList.contains('hidden')));

            // Toggle icon
            if (answer.classList.contains('hidden')) {
                icon.textContent = '+';
            } else {
                icon.textContent = '−';
            }
        });
    });

    // Contact Form Submission using Google Apps Script
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const grade = formData.get('grade');
            const format = formData.get('format');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            submitBtn.disabled = true;
            formMessage.classList.add('hidden');

            try {
                await submitLead({ name, phone, grade, format, type: 'contact' });

                trackYandexGoal('contact_form_submit');

                formMessage.textContent = `Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} в ближайшее время. Если в течение дня звонка не будет — напишите нам в Telegram @AVmathematics.`;
                formMessage.className = 'mt-4 text-center text-smart-green font-semibold';
                formMessage.classList.remove('hidden');

                contactForm.reset();

                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 8000);
            } catch (error) {
                console.error('Error submitting form:', error);
                formMessage.innerHTML = `Не получилось отправить заявку. ${FALLBACK_CONTACTS}`;
                formMessage.className = 'mt-4 text-center text-red-600 font-semibold';
                formMessage.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
            }
        });

        // "Выбрать" buttons in the pricing section preselect the tariff
        const formatSelect = document.getElementById('contact-format');
        document.querySelectorAll('[data-format]').forEach((btn) => {
            btn.addEventListener('click', () => {
                if (formatSelect) formatSelect.value = btn.dataset.format;
            });
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
        let modalOpener = null;
        const focusableSelector = 'input, select, textarea, button, a[href]';

        const openModal = () => {
            modalOpener = document.activeElement;
            callbackModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            callbackForm.querySelector('input')?.focus();
        };

        const hideModal = () => {
            callbackModal.classList.add('hidden');
            document.body.style.overflow = '';
            if (modalOpener && typeof modalOpener.focus === 'function') {
                modalOpener.focus();
            }
        };

        callbackBtn.addEventListener('click', openModal);
        closeModal.addEventListener('click', hideModal);

        // Close modal when clicking outside
        callbackModal.addEventListener('click', (e) => {
            if (e.target === callbackModal) {
                hideModal();
            }
        });

        // Escape closes, Tab stays inside the dialog
        document.addEventListener('keydown', (e) => {
            if (callbackModal.classList.contains('hidden')) return;
            if (e.key === 'Escape') {
                e.preventDefault();
                hideModal();
                return;
            }
            if (e.key === 'Tab') {
                const items = [...callbackModal.querySelectorAll(focusableSelector)]
                    .filter(el => !el.disabled && el.offsetParent !== null);
                if (items.length === 0) return;
                const first = items[0];
                const last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });

        // Callback Form Submission using Google Apps Script
        callbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(callbackForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const submitBtn = callbackForm.querySelector('button[type="submit"]');

            submitBtn.disabled = true;
            callbackMessage.classList.add('hidden');

            try {
                await submitLead({ name, phone, grade: '', format: '', type: 'callback' });

                trackYandexGoal('callback_form_submit');

                callbackMessage.textContent = `Спасибо, ${name}! Мы перезвоним вам в ближайшее время.`;
                callbackMessage.className = 'mt-4 text-center text-smart-green font-semibold';
                callbackMessage.classList.remove('hidden');

                callbackForm.reset();

                setTimeout(() => {
                    hideModal();
                    callbackMessage.classList.add('hidden');
                }, 3000);
            } catch (error) {
                console.error('Error submitting callback form:', error);
                callbackMessage.innerHTML = `Не получилось отправить. ${FALLBACK_CONTACTS}`;
                callbackMessage.className = 'mt-4 text-center text-red-600 font-semibold';
                callbackMessage.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
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

// Track phone clicks (Yandex Metrica micro-conversion)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackYandexGoal('phone_click');
    });
});

// Track Telegram clicks (Yandex Metrica micro-conversion)
document.querySelectorAll('a[href*="t.me/"]').forEach(link => {
    link.addEventListener('click', () => {
        trackYandexGoal('telegram_click');
    });
});

// Track pricing section view
const pricingSection = document.getElementById('pricing');
if (pricingSection) {
    const pricingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackYandexGoal('pricing_view');
                pricingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    pricingObserver.observe(pricingSection);
}

// Track deep engagement (80% scroll)
let scrollTracked = false;
window.addEventListener('scroll', () => {
    if (!scrollTracked) {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 80) {
            trackYandexGoal('deep_engagement');
            scrollTracked = true;
        }
    }
});
