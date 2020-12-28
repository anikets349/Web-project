const inputField = document.getElementById('search-restaurants');
const locationDiv = document.getElementsByClassName('detect-location')[0];
const locationBtn = document.getElementsByClassName('location-icon')[0];


let flag = false;

// inputField.addEventListener('click', () => {
//     if (flag) {
//         flag = false;
//         locationDiv.style.display = "none";
//     }

//     else {
//         flag = true;
//         locationDiv.style.display = "block";
//     }
// });

inputField.addEventListener('mouseover', () => {
    locationDiv.style.display = "block";
});

inputField.addEventListener('mouseout', () => {
    locationDiv.style.display = "none";
});

