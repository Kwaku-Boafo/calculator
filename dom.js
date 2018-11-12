// let result;
// let str1 = "";
// let str2 = "";
// let screenDisplay = document.createElement("p");
// let screenTime = document.getElementById("screen");

// let oneButton = document.getElementById("one");
// let twoButton = document.getElementById("two");
// let threeButton = document.getElementById("three");
// let fourButton = document.getElementById("four");
// let fiveButton = document.getElementById("five");
// let sixButton = document.getElementById("six");
// let sevenButton = document.getElementById("seven");
// let eightButton = document.getElementById("eight");
// let nineButton = document.getElementById("nine");
// let zeroButton = document.getElementById("zero");
// let decimalButton = document.getElementById("decimalPoint");
// let divideButton = document.getElementById("division");
// let multiplucationButton = document.getElementById("multiplucation");
// let subtractionButton = document.getElementById("subtraction");
// let additionButton = document.getElementById("addition");
// let equalsButton = document.getElementById("equals");
// let clearButton = document.getElementById("clear");
// let negPosButton = document.getElementById("positiveNegative");
// let percentButton = document.getElementById("percentage");
let val;
let addBoolean = false;

// screenDisplay.id = "display";
// screenTime.appendChild(screenDisplay);
// screenDisplay.innerHTML = 0;
// screenDisplay.style["font-size"] = "25px";
// screenDisplay.style["text-align"] =  "right";

const{app , BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");

let makeWindow;

function makeUserWindow(){
    makeWindow = new BrowserWindow({width:324 , height:400 ,  icon:__dirname+""})
    makeWindow.loadFile("index.html");
   // makeWindow.setMenu(null);
}

app.on("ready", makeUserWindow);

// function calculate(){
//     val = str + 0;

//     if(node == twoButton){
//         str += "2 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == threeButton){
//         str += "3 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == fourButton){
//         str += "4 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == fiveButton){
//         str += "5 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == sixButton){
//         str += "6 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == sevenButton){
//         str += "7 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == eightButton){
//         str += "8 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == nineButton){
//         str += "9 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == zeroButton){
//         str += "0 ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == additionButton){
//         str += "+ ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == subtractionButton){
//         str += "- ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == multiplucationButton){
//         str += "* ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == divideButton){
//         str += "/ ";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == clearButton){
//         str = "";
//         screenDisplay.innerHTML = str;
//     }
//     if(node == equalsButton){
//         str.parsInt;
//         screenDisplay.innerHTML = str;
//     }
// }

// oneButton.addEventListener("click", calculate1);
// twoButton.addEventListener("click" , calculate(twoButton));
// threeButton.addEventListener("click" , calculate(threeButton));
// fourButton.addEventListener("click" , calculate(fourButton));
// fiveButton.addEventListener("click" , calculate(fiveButton));
// sixButton.addEventListener("click" , calculate(sixButton));
// sevenButton.addEventListener("click" , calculate(sevenButton));
// eightButton.addEventListener("click" , calculate(eightButton));
// nineButton.addEventListener("click" , calculate(nineButton));
// zeroButton.addEventListener("click" , calculate(zeroButton));
// decimalButton.addEventListener("click" , calculate(decimalButton));
// multiplucationButton.addEventListener("click" , calculate(multiplucationButton));
// divideButton.addEventListener("click" , calculate(divideButton));
// subtractionButton.addEventListener("click" , calculate(subtractionButton));
// additionButton.addEventListener("click" , add);
// equalsButton.addEventListener("click" , calc);
// clearButton.addEventListener("click" , calculate(clearButton));
// negPosButton.addEventListener("click" , calculate(negPosButton));
// percentButton.addEventListener("click" , calculate(percentButton));

// function calculate1(){
//     if (!addBoolean) {
//         str1 += "1";
//         screenDisplay.innerHTML = str1;
//     } else {
//         str2 += "1";
//         screenDisplay.innerHTML = str2;
//     }
// }

// function add() {
//     addBoolean = true;
// }

// function calc() {
//     if (str1  != "" && str2 != "") {
//         str1 = parseInt(str1);
//         str2 = parseInt(str2);
//         console.log(str1 + " " + str2);
//         let result = str1 + str2;
//         str2 += "";
//         screenDisplay.innerHTML = result;
//         str1 = result + ""
//         str2 = "";
//         addBoolean = false;
//     }
// }