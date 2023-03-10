function calculate(num1, num2, op) {
  switch (op) {
    case "+":
      return parseFloat(num1) + parseFloat(num2);
    case "-":
      return parseFloat(num1) - parseFloat(num2);
    case "*":
      return parseFloat(num1) * parseFloat(num2);
    case "/":
      return parseFloat(num1) / parseFloat(num2);
    case "%":
      return parseFloat(num1) % parseFloat(num2);
  }
}

let result = document.querySelector(".result");

let operation = document.querySelector(".operation");

document.querySelector("#clear").addEventListener("click", function () {
  clear();
});

function clear() {
  result.innerHTML = "";
  sign.innerHTML = "";
  prev.innerHTML = "";
}

const num_btns = document.querySelectorAll(".nmbr");

for (let i = 0; i < num_btns.length; i++) {
  num_btns[i].addEventListener("click", () => {
    let result = document.querySelector(".result");

    result.innerHTML += num_btns[i].innerHTML;
  });
}

const backspace = document.querySelector("#back");

backspace.addEventListener("click", () => {
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
});

const operators = document.querySelectorAll(".ops");

const sign = document.querySelector("#sign");
const prev = document.querySelector("#prev");

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    prev.innerHTML = result.innerHTML;
    sign.innerHTML = operators[i].innerHTML;
    result.innerHTML = "";
  });
}

document.querySelector("#eval").addEventListener("click", () => {
  let n1 = prev.innerHTML;
  let n2 = result.innerHTML;
  let op = sign.innerHTML;

  if (n1 == "" || n2 == "" || op == "") {
    result.innerHTML = "Please enter proper values";
    setTimeout(() => {
      clear();
    }, 1000);
  } else {
    result.innerHTML = calculate(n1, n2, op);
  }

  if (isNaN(result.innerHTML)) {
    setTimeout(() => {
      clear();
    }, 1000);
  }
  prev.innerHTML = "";
  sign.innerHTML = "";
});
