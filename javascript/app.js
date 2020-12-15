let bodyBackground = document.getElementsByTagName('BODY');

let navigationSearchBtn = document.getElementById('navigation-search');
let navigationSearchModal = document.getElementById('my-nav-search-modal');
let navigationSearchClose = document.getElementById('my-nav-search-modal__close');

let buttonClick = document.getElementById('sort-button-modal');

navigationSearchBtn.onclick = function () {
    navigationSearchModal.style.display = "block";
}

navigationSearchClose.onclick = function () {
    navigationSearchModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === navigationSearchModal) {
        navigationSearchModal.style.display = "none";
    }
  }

document.querySelector('#sort-button').addEventListener('click', function () {
    document.body.style.cssText = "background-color: #282828;";
    buttonClick.style.display = 'block';
});