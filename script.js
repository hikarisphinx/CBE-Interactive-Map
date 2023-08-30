// Get references to the buttons and popups
const showTableSquare = document.getElementById("showTableSquare");
const showTableStar = document.getElementById("showTableStar");
const popupTable1 = document.getElementById("popupTable1");
const popupTable2 = document.getElementById("popupTable2");
const closeTableBtn1 = document.getElementById("closeTableBtn1");
const closeTableBtn2 = document.getElementById("closeTableBtn2");

// Add click event listeners to open the popups
showTableSquare.addEventListener("click", function () {
    popupTable1.style.display = "block";
});

showTableStar.addEventListener("click", function () {
    popupTable2.style.display = "block";
});

// Add click event listeners to close the popups
closeTableBtn1.addEventListener("click", function () {
    popupTable1.style.display = "none";
});

closeTableBtn2.addEventListener("click", function () {
    popupTable2.style.display = "none";
});


// Add click event listeners to close the popups when clicking the close buttons
document.getElementById("closeTableBtn1").addEventListener("click", function () {
    popupTable1.style.display = "none";
});

document.getElementById("closeTableBtn2").addEventListener("click", function () {
    popupTable2.style.display = "none";
});
