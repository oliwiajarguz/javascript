

let button = document.querySelector('button');
button.onclick = function () {
    let nameInput = document.getElementById('fname');

    let nameP = document.getElementById('name');
    nameP.innerText = nameInput.value;



    let lnameInput = document.getElementById('lname');
    let lnameP = document.getElementById('surname');
    lnameP.innerText = lnameInput.value;

    let phoneInput = document.getElementById('phonenr');
    let phoneP = document.getElementById('phone');
    phoneP.innerText = phoneInput.value;





}