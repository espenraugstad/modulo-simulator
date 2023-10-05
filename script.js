const numerator = document.getElementById('numerator');
const denominator = document.getElementById('denominator');
const run = document.getElementById('run');
const boxes = document.getElementById('boxes');
const count = document.getElementById('count');
const bigCount = document.getElementById('bigCount');

run.addEventListener("click", runSimulation);

function runSimulation(){
    console.log("Running");
    // Draw up the required number of boxes
    for(let i = 0; i < parseInt(numerator.value); i++){
        let box = document.createElement("span");
        box.classList.add("box");
        boxes.appendChild(box);
    }
}