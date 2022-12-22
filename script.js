let container = document.getElementById('block-container');
let currentNumberOfCells = 16
createGrid(16)


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(numberOfCells) {
    removeAllChildNodes(container);
    container.setAttribute('style', `grid-template-columns : repeat(${numberOfCells}, 1fr); 
    grid-template-rows : repeat(${numberOfCells}, 1fr) `)
    for (let i = 0; i < numberOfCells * numberOfCells; i++) {
        container.appendChild(document.createElement('div'))
    }

    // Each cell on mouse enter takes a random color and reduce lightness on each pass.
    [...container.children].forEach(element => {
        element.addEventListener("mouseenter", e => { 
            let cell = e.target

            let hue = cell.getAttribute("data-hue");
            let sat = cell.getAttribute("data-saturation");
            let oldLight = cell.getAttribute("data-lightness");
            
            let newColor;
            if (oldLight) {
                let newLight = oldLight - 10;
                cell.setAttribute("data-lightness", newLight);
                newColor = `hsl(${hue}, ${sat}%, ${newLight}%)`;
            }
            else{
                let hue = Math.floor(Math.random() * 255);
                let sat = Math.floor(Math.random() * 100);
                cell.setAttribute("data-hue", hue);
                cell.setAttribute("data-saturation", sat);
                cell.setAttribute("data-lightness", 90)
                newColor = `hsl(${hue}, ${sat}%, 90%)`;
            }

            console.log(newColor);
            
            
            cell.setAttribute('style', `background : ${newColor} `)
        })
    });

}




document.getElementById("cell-changer").addEventListener("click", e => {
    
    let  y = prompt("How many cells you want on each side of square ? \n Only numbers upto 100 acceptable.");
    if (typeof parseInt(y) == "number" && y <= 100 & y > 0){
        console.log(y)
        createGrid(y)
    }
    
})