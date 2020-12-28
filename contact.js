const form = document.getElementById('form');

const submitBtn = document.getElementById('contact-form-submit');

let contactNum = document.getElementById('contact-number');
console.log(contactNum.value);

form.addEventListener('submit', (e) => {
    if (contactNum.value.length < 10 || contactNum.value.length > 10) {
        e.preventDefault();
        alert('Contact Number should be of ten digits');
    }
});
