
function grid(number){
    let board = document.querySelector(".board");
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    let amount = number*number;
    for(let i = 0; i<amount;i++){
        let square = document.createElement("div"); 
        let color = document.getElementById("colorpicker");  
        square.addEventListener("mouseover", function(){  
            square.style.backgroundColor = color.value;
        });
       
    
        board.insertAdjacentElement("beforeend", square);
        square.style.border = "1px black solid";
        clear(square);
    } 
}

function slider(){
    let slider = document.getElementById("myRange");
    console.log(slider.value);
    let value = document.querySelector("#slide-value");
    slider.value = 16;
    value.textContent = `${slider.value} x ${slider.value}`;
    grid(slider.value);
    slider.oninput = function(){
        value.textContent = `${slider.value} x ${slider.value}`;  
        grid(slider.value);
    }
}

function clear(x){
    let resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => x.style.backgroundColor = "white");
}


function eraser(x){
    let eraseButton = document.querySelector(".eraser");
    eraseButton.addEventListener("click", () => x = "white")
}


let color = document.getElementById("colorpicker");
color.oninput = () => console.log(color.value);



slider();
console.log(resetButton);