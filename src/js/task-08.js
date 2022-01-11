const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('input[name="email"]');
const inputPasswordEl = document.querySelector('input[name="password"]');


formEl.addEventListener('submit', event => {
    event.preventDefault();

    if( inputEmailEl.value === '' || inputPasswordEl.value === ''){
        alert('Все поля должны быть заполнены!');
    } 
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formInfo = {
        email,
        password,
    };
    console.log(formInfo);

    event.currentTarget.reset();


});