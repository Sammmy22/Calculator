function Calculate(num1, num2, op) {
  switch (op) {
    case "+":
      return parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      return parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      return parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      return parseFloat(num1) / parseFloat(num2);
      break;
  }
}

let result = document.querySelector(".result");

let operation = document.querySelector(".operation");

document.querySelector("#clear").addEventListener("click", function () {
  result.innerHTML = "";
  sign.innerHTML = "";
  prev.innerHTML = "";
});

const num_btns = document.querySelectorAll(".nmbr");

// console.log(num_btns);

for (let i = 0; i < num_btns.length; i++) {
  num_btns[i].addEventListener("click", () => {
    let result = document.querySelector(".result");
    // console.log(num_btns[i].innerHTML);
    result.innerHTML += num_btns[i].innerHTML;
    // result.innerHTML = parse(num_btns[i].innerHTML);
  });
}

const backspace = document.querySelector("#back");

backspace.addEventListener("click", () => {
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
});

const operators = document.querySelectorAll(".ops");

console.log(operators);

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
  result.innerHTML = Calculate(
    prev.innerHTML,
    result.innerHTML,
    sign.innerHTML
  );

  prev.innerHTML = "";
  sign.innerHTML = "";
});
