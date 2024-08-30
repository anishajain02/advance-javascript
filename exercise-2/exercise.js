// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
let firstButtonElement = document.querySelector('button');


//    - Select the second button by using an "id"
let secondButtonElement = document.getElementById('change-bg-btn');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// function removeParagraph() {
//     console.dir(firstButtonElement);
// }
// firstButtonElement.addEventListener('click', firstButtonFunction);

// function changeBgColor(event) {
//     console.dir(event.target);
// }
// secondButtonElement.addEventListener('click', secondButtonFunction);


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

let firstParagraphElement = document.body.children[2].children[1];//way 1
console.log(firstParagraphElement);

// let thirdParagraphElement = document.body.children[2].children[3];//way 1
let thirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;//way 2

console.log(thirdParagraphElement);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function removeParagraph() {
    thirdParagraphElement.remove();
}
firstButtonElement.addEventListener('click', firstButtonFunction);

function changeBgColor(event) {
    // firstParagraphElement.style.backgroundColor = 'blue';//way 1
    // firstParagraphElement.className = 'blue-bg'; //way 2
    firstParagraphElement.classList.add('blue-bg');//way 3
}
secondButtonElement.addEventListener('click', secondButtonFunction);


// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!