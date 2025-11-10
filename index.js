const elform = document.querySelector('.form');
const elusername = document.querySelector('.name');
const elpassword = document.querySelector('.password');

elform.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = elusername.value.trim();
    const pass = elpassword.value.trim();
    if (!user && !pass) {
        alert('Please enter your username and password.');
        return;
    }
    else if (!user) {
        alert('Please enter your username.');
        return;
    }
    else if (!pass) {
        alert('Please enter your password.');
        return;
    }   
    else {
        alert('Login successful!');
        window.location.href='https://restiran.vercel.app/';
    }
});