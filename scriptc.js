let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", () => {

let value = button.innerText;

if(value === "C"){
display.value = "";
}

else if(value === "DEL"){
display.value = display.value.slice(0,-1);
}

else if(value === "="){

try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}

}

else{
display.value += value;
}

});

});


document.addEventListener("keydown", function(event){

let key = event.key;

if(!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/" || key === "."){
display.value += key;
}

else if(key === "Enter"){
display.value = eval(display.value);
}

else if(key === "Backspace"){
display.value = display.value.slice(0,-1);
}

else if(key === "Escape"){
display.value = "";
}

});