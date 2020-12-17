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

let hoveredItemOne = document.getElementById("hover-item-1");
let hoveredItemTwo = document.getElementById("hover-item-2");
let hoveredItemThree = document.getElementById("hover-item-3");
let hoveredItemFour = document.getElementById("hover-item-4");
let hoveredItemFive = document.getElementById("hover-item-5");
let hoveredItemSix = document.getElementById("hover-item-6");

let hoverElementCard = document.getElementById("hover-element-card");
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
hoveredItemOne.addEventListener("mouseover", mouseOver);
hoveredItemOne.addEventListener("mouseout", mouseOut);

hoveredItemTwo.addEventListener("mouseover", mouseOver);
hoveredItemTwo.addEventListener("mouseout", mouseOut);

hoveredItemThree.addEventListener("mouseover", mouseOver);
hoveredItemThree.addEventListener("mouseout", mouseOut);

hoveredItemFour.addEventListener("mouseover", mouseOver);
hoveredItemFour.addEventListener("mouseout", mouseOut);

hoveredItemFive.addEventListener("mouseover", mouseOver);
hoveredItemFive.addEventListener("mouseout", mouseOut);

hoveredItemSix.addEventListener("mouseover", mouseOver);
hoveredItemSix.addEventListener("mouseout", mouseOut);

function mouseOver() {
    hoverElementCard.style.cssText =
        "opacity: 0.4; transition: opacity .5s ease;";
    normalStateLogo.style.display = "none";
    hoverStateLogo.style.display = "block";
}

function mouseOut() {
    hoverElementCard.style.opacity = "100%";
    normalStateLogo.style.display = "block";
    hoverStateLogo.style.display = "none";
}
