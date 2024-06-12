// menu bar js

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('stcky', window.screenY > 100);

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// hidden list 

var modal1 = document.getElementById("services_modal_1");

var btn1 = document.getElementById("services_btn_1");

var span1 = document.getElementsByClassName("services_modal_close_1")[0];

btn1.onclick = function () {
    modal1.style.display = "block";
    
}

span1.onclick = function () {
    modal1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
var modal2 = document.getElementById("services_modal_2");

var btn2 = document.getElementById("services_btn_2");

var span2 = document.getElementsByClassName("services_modal_close_2")[0];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
var modal3 = document.getElementById("services_modal_3");

var btn3 = document.getElementById("services_btn_3");

var span3 = document.getElementsByClassName("services_modal_close_3")[0];

btn3.onclick = function () {
    modal3.style.display = "block";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}



// scroll reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .skills-name', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .skills-icon, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skills-percentage, .contact-container', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skills-bar', { origin:'right' });

// typed js

const typed = new Typed('.multipletext', {
    strings: ['UI/UX Designer', 'Web Developer', 'Wordpress Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


// email js

const contactform = document.getElementById('contact-form'),
        contactmessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_1cb6gtj','template_08ka49j','#contact-form','nfJV326q9DGPx46gr')
    .then (() =>{
        // show sent message
        contactmessage.textContent = 'Message sent successfully !!'
        // remove message after five seconds
        setTimeout(() =>{
            contactmessage.textContent = ''

        }, 5000);

        // clear input fields
        contactform.reset()

    }, () => {
        //show error message
        contactmessage.textContent = 'Message not sent (service error)'
    });
}

contactform.addEventListener('submit', sendEmail)


