/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/weather-daughter.jfif') {
        myImage.setAttribute('src', 'images/it-567.jpeg');
    } else {
        myImage.setAttribute('src', 'images/weather-daughter.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '567 酷毙了，' + myName;
    } 
}
 if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storeName = localStorage.getItem('name');
        myHeading.textContent = 'haha 酷毙了，' + storeName;
    }
myButton.onclick = function() {
    setUserName();
}
