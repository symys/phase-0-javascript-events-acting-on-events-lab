// Your code here
const dodgerLeft = document.getElementById("dodger");
const dodgerRight = document.getElementById("dodger");

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);

//       dodger.style.left = `${left - 1}px`;
//     }
//   });

function moveDodgerLeft() {
    const leftNumbers = dodgerLeft.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodgerLeft.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodgerRight.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if(left < 360){
        dodgerRight.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
})