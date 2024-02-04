var buttonR = document.getElementById("buttonR");
var buttonG = document.getElementById("buttonG");
var buttonB = document.getElementById("buttonB");
let rcount = 0, gcount = 0, bcount = 0;
let rHoverCount = 0, gHoverCount = 0, bHoverCount = 0;
let redCountDisplay = document.getElementById("redCount");
let greenCountDisplay = document.getElementById("greenCount");
let blueCountDisplay = document.getElementById("blueCount");
let rButtonDisplay = document.getElementById("rHoverCount");
let gButtonDisplay = document.getElementById("gHoverCount");
let bButtonDisplay = document.getElementById("bHoverCount");


buttonR.style.backgroundColor = "black";
buttonG.style.backgroundColor = "black";
buttonB.style.backgroundColor = "black";
buttonR.style.color = "white";
buttonG.style.color = "white";
buttonB.style.color = "white";


buttonR.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    rcount++;
    redCountDisplay.textContent = rcount;
});
buttonG.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
    gcount++;
    greenCountDisplay.textContent = gcount;
});
buttonB.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
    bcount++;
    blueCountDisplay.textContent = bcount;
});
buttonR.addEventListener("mouseover",function(){
    rHoverCount++;
    rButtonDisplay.textContent = rHoverCount;
    reverseColors(buttonR);
});
buttonG.addEventListener("mouseover",function(){
    gHoverCount++;
    gButtonDisplay.textContent = gHoverCount;
    reverseColors(buttonG);
});
buttonB.addEventListener("mouseover",function(){
    bHoverCount++;
    bButtonDisplay.textContent = bHoverCount;
    reverseColors(buttonB);
});

function reverseColors(button){
    if (button.style.backgroundColor == "black"){
        button.style.backgroundColor = "white"
        button.style.color = "black";
    }
    else{
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
}