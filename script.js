const resultBox = document.querySelector(".input");
const action = document.querySelector(".calculator")
const clearCalculationList = document.querySelector(".clear");
const calculationList = document.querySelector(".calculation-list");



function render(box, param, result) {
    const li = document.createElement("li");
    if (param === "√") {
        li.innerText = `${param}${box}=${result} `;
        resultBox.value = "";
    } else if (param === "n<sup>2</sup>") {
        li.innerHTML = `${box}<sup>2</sup>=${result} `;
        resultBox.value = "";
    } else {
        li.innerText = `${box} ${param} ${result} `;
        resultBox.value = "";
    }
    calculationList.appendChild(li);
}


resultBox.value = "";

action.addEventListener("click", function (event) {
    const target = event.target;
    const param = target.innerHTML;

    if (param === "1") {
        resultBox.value += 1;
    } else if (param === "2") {
        resultBox.value += 2;
    } else if (param === "3") {
        resultBox.value += 3;
    } else if (param === "4") {
        resultBox.value += "4";
    } else if (param === "5") {
        resultBox.value += "5";
    } else if (param === "6") {
        resultBox.value += "6";
    } else if (param === "7") {
        resultBox.value += "7";
    } else if (param === "8") {
        resultBox.value += "8";
    } else if (param === "9") {
        resultBox.value += "9";
    } else if (param === "0") {
        resultBox.value += "0";
    } else if (param === ".") {
        resultBox.value += ".";
    } else if (param === "C") {
        resultBox.value = "";
        // resultBox.value = resultBox.value.toString().slice(0, -1);
    } else if (param === "√") {
        let result = Math.sqrt(+resultBox.value).toFixed(2);
        setTimeout(render, 1800, resultBox.value, param, result);
        resultBox.value = result;
    } else if (param === "n<sup>2</sup>") {
        let number = parseFloat(resultBox.value)
        let result = Math.pow(number, 2).toFixed(2);
        setTimeout(render, 1800, resultBox.value, param, result);
        resultBox.value = result;
    } else if (param === "\u00D7") {
        resultBox.value += "*";
    } else if (param === "\u00F7") {
        resultBox.value += "/";
    } else if (param === "\u2212") {
        resultBox.value += "-";
    } else if (param === "+") {
        resultBox.value += "+";
    } else if (param === "=") {
        let result = eval(resultBox.value).toFixed(2);
        setTimeout(render, 1800, resultBox.value, param, result);
        resultBox.value = result;
    }
});


clearCalculationList.addEventListener("click", function () {
    calculationList.replaceChildren();
})