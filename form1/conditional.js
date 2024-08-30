const myName = 'Max';

if (myName === 'Max') {
    console.log('Hello!');
}

let isLoggedIn = true;

//way 1
// if (isLoggedIn) {
//     console.log('You are logged in!');
// }else{
//     console.log('Please log in!');
// }

//way 2
if(!isLoggedIn){
    console.log('Please log in!');
}


let enteredUserName = 'Max';
// //way 1
// if(enteredUserName.length > 0){
//     console.log('Valid Input!');
// }

//way 2-> bcz of truthy & falsy value
if(enteredUserName){
    console.log('Valid Input!');
}