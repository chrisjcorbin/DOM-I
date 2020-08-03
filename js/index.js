const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Work 
// Page Title
document.title = "Great Idea!"

//Navigation
let nav = document.querySelectorAll('a')

nav[0].textContent = "Services"
nav[1].textContent = "Product"
nav[2].textContent = "Vision"
nav[3].textContent = "Features"
nav[4].textContent = "About"
nav[5].textContent = "Contact"

const navContainer = document.querySelectorAll('nav a')

navContainer.forEach((item) => {
  item.style.color = 'green'
})

const navigationBox = document.querySelector('nav')
const newLink = document.createElement('a')
console.log(newLink)
newLink.textContent = '}'
newLink.style.color = 'orange'

navigationBox.appendChild(newLink)

const firstLink = document.createElement('a')
firstLink.textContent = '{'
firstLink.style.color = 'orange'
navigationBox.prepend(firstLink);

// Content
const domIsAwesome = document.getElementsByTagName('h1')

domIsAwesome[0].innerHTML = 'Dom <br> is <br> Awesome'

const newButton = document.getElementsByTagName('button')

newButton[0].textContent = 'Get Started'

const roundImg = document.querySelector('#cta-img')

roundImg.src = 'img/header-img.png'

const codeImg = document.querySelector('#middle-img')

codeImg.src = 'img/mid-page-accent.jpg'

const contentHeader = document.querySelectorAll('.text-content h4')

contentHeader[0].textContent = 'Features'
contentHeader[1].textContent = 'About'
contentHeader[2].textContent = 'Services'
contentHeader[3].textContent = 'Product'
contentHeader[4].textContent = 'Vision'

const content = document.querySelectorAll('.text-content p')

content[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
content[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
content[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
content[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
content[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Contact
const footerTitle = document.querySelector('.contact h4')

footerTitle.textContent = 'Contact'

const footerDetails = document.querySelectorAll('.contact p')

footerDetails[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA'
footerDetails[1].textContent = '1 (888) 888-8888'
footerDetails[2].textContent = 'sales@greatidea.io'

// Copyyright
const copyRight = document.querySelector('footer p')

copyRight.textContent = 'Copyright Great Idea! 2018' 