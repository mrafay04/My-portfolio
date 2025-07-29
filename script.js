// 📱 Toggle Mobile Navigation Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    // Toggle the menu
    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
        });
    });

    // ✅ Contact Form Submission Handler (Formspree)
    const form = document.getElementById('contactForm');
    const responseMsg = document.getElementById('responseMsg');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    responseMsg.textContent = 'Message sent successfully!';
                    responseMsg.style.color = 'green';
                    form.reset();
                } else {
                    responseMsg.textContent = 'Something went wrong. Please try again.';
                    responseMsg.style.color = 'red';
                }
            } catch (error) {
                responseMsg.textContent = 'Error occurred. Please try again later.';
                responseMsg.style.color = 'red';
            }
        });
    }
});

// 🌐 Social Profile Links
function openProfile(profile) {
    let url;
    switch (profile) {
        case 'facebook':
            url = 'https://www.facebook.com/rafay.raza.336?mibextid=ZbWKwL';
            break;
        case 'linkedin':
            url = 'https://www.linkedin.com/in/rafay-raza-65097a2a4/';
            break;
        case 'instagram':
            url = 'https://www.instagram.com/isthatrafay?igsh=ZGhrNzNhbjA1eW9q';
            break;
        case 'github':
            url = 'https://github.com/mrafay04';
            break;
        case 'whatsapp':
            url = 'https://wa.me/923310264947';
            break;
        case 'home':
            url = 'index.html';
            break;
        default:
            console.error('Invalid profile');
            return;
    }
    window.open(url, '_blank');
}

// 🧭 Tab Switching Logic
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
