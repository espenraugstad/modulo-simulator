const numerator = document.getElementById("numerator");
const denominator = document.getElementById("denominator");
const run = document.getElementById("run");
const boxes = document.getElementById("boxes");
const count = document.getElementById("count");
const bigCount = document.getElementById("bigCount");
const result = document.getElementById("result");

run.addEventListener("click", runSimulation);

numerator.addEventListener("blur", drawBoxes);

async function runSimulation() {
  console.log("Running");
  let inputOk = checkInput();
  if (inputOk) {
    const allBoxes = document.querySelectorAll(".box");
    await sleep(2000);

    // Hide the first boxes
    const totalBoxes = parseInt(numerator.value);
    const blocks = parseInt(denominator.value);
    let currentCount = 0;
    while ((currentCount + 1) * blocks <= totalBoxes) {
      for (
        let i = currentCount * blocks;
        i < currentCount * blocks + blocks;
        i++
      ) {
        allBoxes[i].classList.add("hiddenBox");
      }
      currentCount++;
      console.log(currentCount * blocks);
      bigCount.innerHTML = currentCount;
      await sleep(2000);
    }

    showResult();
  } else {
    alert("You need to enter numbers in both input fields.");
  }
}

function checkInput() {
  return numerator.value !== "" && denominator.value !== "";
}

function drawBoxes() {
  // Clear existing boxes
  boxes.innerHTML = "";
  bigCount.innerHTML = "0";
  result.innerHTML = "";
  // Draw up the required number of boxes
  for (let i = 0; i < parseInt(numerator.value); i++) {
    let box = document.createElement("span");
    box.classList.add("box");
    boxes.appendChild(box);
  }
}

function showResult() {
  // Get the number of boxes who don't have the class hiddenBox
  let remainingBoxes = document.querySelectorAll(".box:not(.hiddenBox)");
  console.log(remainingBoxes);
  result.innerHTML = `${numerator.value} % ${denominator.value} = ${remainingBoxes.length}`;
}

/*** UTILITY FUNCTIONS ***/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
