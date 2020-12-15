let bodyBackground = document.getElementsByTagName('BODY');
let buttonClick = document.getElementById('sort-button-modal');

document.querySelector('#sort-button').addEventListener('click', function () {
    document.body.style.cssText = "background-color: #282828;";
    buttonClick.style.display = 'block';
});