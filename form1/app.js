// let productNameInputElement = document.getAElementById('product-name');
// let reamainCharsElement = document.getElementById('remaining-chars');

// let maxAllowedChars = productNameInputElement.maxLength;
// function updateRemainingChars(event){
//     let enteredText = event.target.value;
//     let enteredTextLength = enteredText.length;

//     let remainingChars = maxAllowedChars - enteredTextLength;
//     reamainCharsElement.textContent = remainingChars;
// }
// productNameInputElement.addEventListener('input', updateRemainingChars);



const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event){
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters == 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if(remainingCharacters <= 10){
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharacters.classList.remove('error');
        productNameInputElement.classList.remove('error');
    } else {        
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);