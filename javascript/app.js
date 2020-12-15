// Variables
let modalTopLayer = document.getElementById("my-modal-top-layer");

let navigationSearchBtn = document.getElementById("navigation-search");
let navigationSearchModal = document.getElementById("my-nav-search-modal");
let navigationSearchClose = document.getElementById(
    "my-nav-search-modal__close"
);

let mySortButton = document.getElementById("sort-button");
let sortButtonClick = document.getElementById("sort-button-modal");
let workflowsClick = document.getElementById("workflows-modal-click");
let workflowsModal = document.getElementById("workflows-modal");

let hoveredItem = document.getElementById("hover-item");
let hoverElementOne = document.getElementById("hover-element-1");
let normalStateLogo = document.getElementById("normal-state");
let hoverStateLogo = document.getElementById("hover-state");

// Popup layer
modalTopLayer.onclick = function () {
    sortButtonClick.style.display = "none";
    workflowsModal.style.display = "none";
};

// Search popup modal
navigationSearchBtn.addEventListener("click", function () {
    navigationSearchModal.style.cssText =
        "opacity: 100%; visibility: visible; transform: scale(1);";

    window.onclick = function (event) {
        if (event.target === navigationSearchModal) {
            navigationSearchModal.style.cssText =
                "opacity: 0; visibility: hidden;";
        }
    };
});

navigationSearchClose.onclick = function () {
    navigationSearchModal.style.cssText = "opacity: 100%; visibility: visible;";
};

// Sort button modal
mySortButton.addEventListener("click", function () {
    modalTopLayer.style.display = "block";
    sortButtonClick.style.cssText = "display: block; left: 80%;";

    window.onclick = function (event) {
        if (event.target === modalTopLayer) {
            modalTopLayer.style.display = "none";
        }
    };
});

// Workflows modal
workflowsClick.addEventListener("click", function () {
    modalTopLayer.style.display = "block";
    workflowsModal.style.display = "block";

    window.onclick = function (event) {
        if (event.target === modalTopLayer) {
            modalTopLayer.style.display = "none";
        }
    };
});

// Hover effect
hoveredItem.addEventListener("mouseover", mouseOver);
hoveredItem.addEventListener("mouseout", mouseOut);

function mouseOver() {
    hoverElementOne.style.cssText =
        "opacity: 0.4; transition: opacity .5s ease;";
    normalStateLogo.style.display = "none";
    hoverStateLogo.style.display = "block";
}

function mouseOut() {
    hoverElementOne.style.opacity = "100%";
    normalStateLogo.style.display = "block";
    hoverStateLogo.style.display = "none";
}
