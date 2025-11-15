function submitForm() {
    const name = document.querySelector('.name').value.trim();
    const date = document.querySelector('.date').value.trim();
    const email = document.querySelector('.email').value.trim();

    if (!name || !date || !email) {
        alert('Please fill in all fields.');
        return;
    } else {
        localStorage.setItem('userName', name);
        localStorage.setItem('userDate', date);
        localStorage.setItem('userEmail', email);

        window.location.href = `/pages/home.html`;
    }
}
window.onload = function () {
    const name = localStorage.getItem('userName');
    const date = localStorage.getItem('userDate');
    const email = localStorage.getItem('userEmail');

    document.getElementById('profile-name').textContent = name || "no name";
    document.getElementById('profile-date').textContent = date || "no date";
    document.getElementById('profile-email').textContent = email || "no email";
};
