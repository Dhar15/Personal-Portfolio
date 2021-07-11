
// Show the menu on click of the apps button
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Show menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Close menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu =  document.getElementById('nav-menu')
    // Remove show menu on clicking each link
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Using anchor tag as submit button
function submitForm() {
    document.getElementById('form').submit();
}

// Skills accordian button JS
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((q) => {
    q.addEventListener('click', toggleSkills)
})

// JavaScript to switch between qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

//JavaScript for swiping navigation using Swiper 
let swiper = new Swiper(".project_container", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

//JavaScript for changing active link on scrolling
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//JavaScript to change background of header
function scrollHeader() {
    const nav = document.getElementById('header') 
    //When scroll in Y axis gets greater than 200 viewport height, change background by adding scroll header class
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header'); 
}
window.addEventListener('scroll', scrollHeader)

//Show scroll top arrow JS
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //When scroll is higher than 560 viewport height, add the show-scroll class to change fixed height from bottom
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

//JavaScript for shifting between light and dark mode
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun-o'

//Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain current theme interface has by validating dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon-o' : 'fa-sun-o'

//We validate if user previously chose a topic 
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon-o' ? 'add' : 'remove'](iconTheme)
}

//Activate or deactivate theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove dark/icon theme
    document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
    themeButton.classList.toggle('fa-moon-o')
    

    //We save the theme and current icon user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
