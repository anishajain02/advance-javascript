let paragraphElement = document.querySelector('p');
function changeParagraphText(event) {
    paragraphElement.textContent = 'clicked';
    console.log('paragraph clicked');
    console.log(event);//output- PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}

paragraphElement.addEventListener('click', changeParagraphText);


let inputElement = document.querySelector('input');
function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    //or
    let enteredText = event.target.value;//in this we don't need external variable to store the data
    //i.e we can directly use event.target.value instead of inputElement.value,
    // in this event is added in the function parameter
    
    //or
    //let enteredText = event.data; will only show t , e, x, t not as text

    console.log(enteredText); 
    //console.log(event);
}
inputElement.addEventListener('input', retrieveUserInput);