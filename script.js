let digitInput = [];
let firstInput = [];
let finRes = [];
let operationInp = [];

for (let i = 0; i <10; i++){
    let button = document.querySelector(`#number${i}`);
    button.addEventListener("click", function firstDigit(){
        let digit = document.getElementById(`number${i}`).innerHTML;
        digitInput.push(digit);
        document.getElementById("screen").innerHTML = digitInput.join("")
    })
}


let opetatorAdd = document.querySelector(`#add`);
opetatorAdd.addEventListener("click", function operation(){
    let firstDigit = digitInput.join("");
    digitInput.length = 0;
    firstInput.push(Number(firstDigit))
    operationInp.push("+")
    document.getElementById("screen").innerHTML = "+"
    })

let opetatorSub = document.querySelector(`#subtract`);
opetatorSub.addEventListener("click", function operation(){
    let firstDigit = digitInput.join("");
    digitInput.length = 0;
    firstInput.push(Number(firstDigit))
    operationInp.push("-")
    document.getElementById("screen").innerHTML = "-"
    })

let opetatorMult = document.querySelector(`#multiply`);
opetatorMult.addEventListener("click", function operation(){
    let firstDigit = digitInput.join("");
    digitInput.length = 0;
    firstInput.push(Number(firstDigit))
    operationInp.push("*")
    document.getElementById("screen").innerHTML = "*"
    })

let opetatorDiv = document.querySelector(`#divide`);
opetatorDiv.addEventListener("click", function operation(){
    let firstDigit = digitInput.join("");
    digitInput.length = 0;
    firstInput.push(Number(firstDigit))
    operationInp.push("/")
    document.getElementById("screen").innerHTML = "/"
    })

let result = document.querySelector(`#equals`);
result.addEventListener("click", function finalResult(){
    lastDigit = digitInput.join("")
    let firstDigit = firstInput.join("");
    firstInput.length = 0;
    digitInput.length = 0;
    let operationSgn = operationInp.toString()
    if (operationSgn === "+"){
        finRes.push(Number(firstDigit)+Number(lastDigit));
    } else if (operationSgn === "-"){
        finRes.push(Number(firstDigit)-Number(lastDigit));
    } else if (operationSgn === "*"){
        finRes.push(Number(firstDigit)*Number(lastDigit));
    } else if (operationSgn === "/"){
        finRes.push(Number(firstDigit)/Number(lastDigit));
    }
    document.getElementById("screen").innerHTML = finRes.splice(-1);
    operationInp.length = 0;
    finRes.length = 0;
    console.log(firstInput)
})


let resultB = document.querySelector(`#clear`);
resultB.addEventListener("click", function clearS(){
    finRes.length = 0;
    firstInput.length = 0;
    digitInput.length = 0;
    operationInp.length = 0;
    document.getElementById("screen").innerHTML = "0"
    })

