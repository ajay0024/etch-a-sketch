let container = document.getElementById('block-container');
let currentNumberOfCells = 16
createGrid(16)

// cells.forEach(element => {
//     element.addEventListener("mouseenter",evt => {
//         conso
//     })
// });
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(numberOfCells) {
    removeAllChildNodes(container);
    container.setAttribute('style', `grid-template-columns : repeat(${numberOfCells}, 1fr); 
    grid-template-rows : repeat(${numberOfCells}, 1fr) `)
    // container.setAttribute('style',` `)
    for (let i = 0; i < numberOfCells * numberOfCells; i++) {
        container.appendChild(document.createElement('div'))
    }
    [...container.children].forEach(element => {
        element.addEventListener("mouseenter", e => {
            console.log(e.target)
            e.target.classList.add("green");
            let newColor= `hsl(${Math.floor(Math.random()*255)}, `;
            console.log(newColor);
            e.target.setAttribute('style',`background : hsl(${Math.floor(Math.random*255)}, `)
        })
    });

}




document.getElementById("cell-changer").addEventListener("click", e => {
    let x = 16;
    while (typeof x == "number" && x <= 100 && x > 0) {
        x = prompt("How many cells you want on each side of square ? \n Only numbers upto 100 acceptable.");
    }
    createGrid(x)
})