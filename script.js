// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.getElementById('hamburger');
//     const navbar = document.querySelector('.navbar');

//     // Toggle the mobile navigation
//     hamburger.addEventListener('click', function () {
//         navbar.classList.toggle('show');
//     });

//     // Close the mobile navigation when a link is clicked
//     hamburger.addEventListener('click', function () {
//         navbar.classList.remove('show');
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    // Toggle the mobile navigation
    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Close the mobile navigation when a link is clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
        });
    });
});

function openProfile(profile) {
    let url;
    switch (profile) {
        case 'facebook':
            url  = 'https://www.facebook.com/rafay.raza.336?mibextid=ZbWKwL';
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

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



