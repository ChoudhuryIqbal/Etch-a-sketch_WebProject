const div = document.querySelector('.canvas');

for (let i = 1; i < 626; i++) {
    let childDiv = document.createElement('div');
    childDiv.classList.add('childDiv');
    div.appendChild(childDiv);


}
const rects = document.querySelectorAll('.childDiv')
rects.forEach(function(rect) {
    rect.addEventListener("mouseover", func, false)

    function func() {
        rect.setAttribute("style", "background-color:green;")
    }
})











//Adding 16x16 div