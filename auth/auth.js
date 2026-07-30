const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const company = document.getElementById('company');
const password = document.getElementById('password');
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

if (fullname.trim().length < 3) {
    document.getElementById('fullname').style.borderColor = 'red';
    document.getElementById('fullname').addElement('span').innerText = 'Full name must be at least 3 characters long.';
} else if (document.getElementById('fullname').style.borderColor == 'red') {
    document.getElementById('fullname').style.borderColor = '';
}

