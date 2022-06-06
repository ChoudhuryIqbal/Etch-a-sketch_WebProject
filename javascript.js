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


function createCanvas(color) {
    //remove Style
    let node = document.querySelectorAll('.childDiv').forEach(e =>
        e.remove());

    for (let i = 1; i < 626; i++) {
        let childDiv = document.createElement('div');
        childDiv.classList.add('childDiv');
        div.appendChild(childDiv);


    }
    rects = document.querySelectorAll('.childDiv');
    rects.forEach(function(rect) {
        rect.addEventListener("mouseover", func, false)

        function func() {
            rect.setAttribute("style", "background-color:" + color + ";");
        }
    })
}













//Adding 16x16 div