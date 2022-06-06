const div = document.querySelector('.canvas');

let rects;

//by default
for (let i = 1; i < 626; i++) {
    let childDiv = document.createElement('div');
    childDiv.classList.add('childDiv');
    div.appendChild(childDiv);


}
rects = document.querySelectorAll('.childDiv');
rects.forEach(function(rect) {
        rect.addEventListener("mouseover", func, false)

        function func() {
            rect.setAttribute("style", "background-color: black;")
        }
    })
    /// defautl end


function createCanvas(gridCount) {
    //remove Style
    let node = document.querySelectorAll('.childDiv').forEach(e =>
        e.remove());

    let limit = (gridCount * gridCount) + 1;
    let dynamicStyle = "grid-template-rows: repeat(" + gridCount + ", 1fr);grid-template-columns: repeat(" + gridCount + ", 1fr);";
    div.setAttribute('style', dynamicStyle);
    for (let i = 1; i < limit; i++) {
        let childDiv = document.createElement('div');
        childDiv.classList.add('childDiv');
        div.appendChild(childDiv);


    }
    rects = document.querySelectorAll('.childDiv');
    rects.forEach(function(rect) {
        rect.addEventListener("mouseover", func, false)

        function func() {
            let colorPicker = document.querySelector("#colorpicker")
            let color = colorPicker.value;
            rect.setAttribute("style", "background-color:" + color + ";");

        }
    })
}


document.querySelector("#btn").addEventListener('click', promptMe);
let gridSize = 0;


function promptMe() {
    let userInput = prompt("Please enter the size of Grid? (choose a number between 16-100)");
    gridSize = userInput;

    createCanvas(gridSize)
}













//Adding 16x16 div