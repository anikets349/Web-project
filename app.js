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

/*inputField.addEventListener('mouseover', () => {
    locationDiv.style.display = "block";
});

inputField.addEventListener('mouseout', () => {
    locationDiv.style.display = "none";
});*/


/*const button = document.getElementById('find-restaurants');
button.addEventListener('click', () => {
    console.log("You pressed the find button.");
});

const textfield = document.getElementById('search-restaurants');
textfield.addEventListener('change', () => {
    console.log(textfield.value);
});*/

const arrowBtn = document.getElementById('arrowIcon');

function mapFn() {
    const mapDiv = document.getElementsByClassName('mapDiv')[0];
    console.log(mapDiv);
    if (!flag) {
        mapDiv.style.display = "block";
        flag = true;
    }
    else {
        mapDiv.style.display = "none";
        flag = false;
    }
}