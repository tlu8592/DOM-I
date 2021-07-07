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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// text content for nav anchors
const navLinks = document.querySelectorAll('a');

navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index}`];
  link.style.color = 'green';
})

// cta
const ctaText = document.getElementsByClassName('cta-text');
const ctaH1 = ctaText[0].children[0];

const ctaH1Str = siteContent.cta.h1;
const ctaH1StrArr = ctaH1Str.split(' ');

const dom = ctaH1StrArr[0];
const is = ctaH1StrArr[1];
const great = ctaH1StrArr[2];
const br = document.createElement('br');
const br2 = document.createElement('br');

ctaH1.append(dom);
ctaH1.append(br);
ctaH1.append(is);
ctaH1.append(br2);
ctaH1.append(great);

const ctaButton = ctaText[0].children[1];
ctaButton.textContent = siteContent.cta.button;

// image of a code snippet (cta image)
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// main content

// top content
const topContent = document.getElementsByClassName('top-content');

// 1st div
const topContent1stDiv = topContent[0].children[0]

// h4
const h4TopContent1stDiv = topContent1stDiv.children[0];
h4TopContent1stDiv.textContent = siteContent["main-content"]["features-h4"];

// p 
const pTopContent1stDiv = topContent1stDiv.children[1];
pTopContent1stDiv.textContent = siteContent["main-content"]["features-content"];

// 2nd div
const topContent2ndDiv = topContent[0].children[1];

// h4
const h4TopContent2ndDiv = topContent2ndDiv.children[0];
h4TopContent2ndDiv.textContent = siteContent["main-content"]["about-h4"];

// p
const pTopContent2ndDiv = topContent2ndDiv.children[1];
pTopContent2ndDiv.textContent = siteContent["main-content"]["about-content"];

// image of code snippets across the screen (middle image)
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom content
const bottomContent = document.querySelectorAll('.bottom-content');

// 1st div
const bottomContent1stDiv = bottomContent[0].children[0];

// h4
const h4BottomContent1stDiv = bottomContent1stDiv.children[0];
h4BottomContent1stDiv.textContent = siteContent["main-content"]["services-h4"];

// p
const pBottomContent1stDiv = bottomContent1stDiv.children[1];
pBottomContent1stDiv.textContent = siteContent["main-content"]["services-content"];

// 2nd div
const bottomContent2ndDiv = bottomContent[0].children[1];

// h4
const h4BottomContent2ndDiv = bottomContent2ndDiv.children[0];
h4BottomContent2ndDiv.textContent = siteContent["main-content"]["product-h4"];

// p
const pBottomContent2ndDiv = bottomContent2ndDiv.children[1];
pBottomContent2ndDiv.textContent = siteContent["main-content"]["product-content"];

// 3rd div
const bottomContent3rdDiv = bottomContent[0].children[2];

// h4
const h4BottomContent3rdDiv = bottomContent3rdDiv.children[0];
h4BottomContent3rdDiv.textContent = siteContent["main-content"]["vision-h4"];

// p
const pBottomContent3rdDiv = bottomContent3rdDiv.children[1];
pBottomContent3rdDiv.textContent = siteContent["main-content"]["vision-content"];

// contact
const contact = document.querySelectorAll('.contact');

// h4
const h4Contact = contact[0].children[0];
h4Contact.textContent = siteContent["contact"]["contact-h4"];

// 1st p 
const contactP1 = contact[0].children[1];
contactP1.textContent = siteContent["contact"]["address"];

// 2nd p
const contactP2 = contact[0].children[2];
contactP2.textContent = siteContent["contact"]["phone"];

// 3rd p
const contactP3 = contact[0].children[3];
contactP3.textContent = siteContent["contact"]["email"];

// footer
const footer = document.querySelectorAll('footer');

// p
const footerPTag = footer[0].children[0];
footerPTag.textContent = siteContent["footer"]["copyright"];