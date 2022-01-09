// window.addEventListener('keydown', (e) => {
//     document.body.style.backgroundColor = 'red';
//     if (e.key == 'a') {
        
//     }
// })
// window.addEventListener('keyup', () => {
//     document.body.style.backgroundColor = 'green';
// })
// window.addEventListener('keypress', () => {
//     document.body.style.backgroundColor = 'lightblue';
//     console.log('clicked')
// })



// const marquee = document.querySelector('#marquee');

// window.addEventListener('mouseover', () => {
//     marquee.textContent = 'Shaashada ayaad soo gashay';
// })
// window.addEventListener('mouseout', () => {
//     marquee.textContent = 'Shaashada waad ka baxday';
// })

const span = document.querySelector('span');
const typing = document.querySelector('#typing');
const btn = document.querySelector('#btn');
const username = document.querySelector('#username');
const password = document.querySelector('#password');


randomNumber = Math.floor(Math.random() * (9999 - 1000) + (1000));

   
span.innerHTML = randomNumber;


btn.addEventListener('click', (e) => {
   e.preventDefault();
    if (typing.value == randomNumber && username.value == 'Zaraa' && password.value == 3035) {
       
        location.replace('converter.html')
    } else if (typing.value != randomNumber) {
        alert('Captcha Error baa kuheysta');
    } else if (username.value != 'Zaraa') {
        alert('Usernameka ayaa qaldan');
    } else if (password.value != 3035) {
        alert('Passwordka ayaa qaldan');
    } else {
        alert('Dhamaantood ayaa qaldan')
    }

});


