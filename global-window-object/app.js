
// console.dir(document);

// alert();
// window.alert();
//document.body.children[1].children[0].href = 'https://www.google.com';


// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://www.google.com';

// let anchorElement = document.querySelector('p a');
// anchorElement.href = 'https://www.academind.com';


// Create new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://www.google.com';    
newAnchorElement.textContent = 'This leads to Google!';

// Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// Insert the new element into the parent element content
firstParagraph.appendChild(newAnchorElement);


//remove element
//1. select the element that should be removed
let h1Element = document.querySelector('h1');

//2.remove it!
h1Element.remove();

//MOVE ELEMENTS
firstParagraph.parentElement.appendChild(firstParagraph);


//innerHTML
console.log( firstParagraph.innerHTML );//I'm new!<a href="https://www.google.com">This leads to Google!</a>
console.log( firstParagraph.textContent );//I'm new!This leads to Google!

firstParagraph.innerHTML = 'hi! this is <strong>new</strong>!';