const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordGeneratorBtn = document.getElementById("generator-btn");
let passwordLengthRange = document.getElementById("password-length-range");
let copyOne = document.getElementById("passowrd-one_copy");
let copyTwo = document.getElementById("passowrd-two_copy");
let numbersEl = document.getElementById("numbers-el");
let symbolsEl = document.getElementById("symbols-el");
let numbersAlive = false;
let symbolsAlive = false;
let passwordLength = 0;

passwordGeneratorBtn.addEventListener("click", function () {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";

    if (passwordLength === 0) {
        alert("Choose a password length, please!");
    } else {
        if (numbersAlive) {
            let numbers = characters.filter(function (char) {
                return /[0-9]/.test(char);
            });
            for (let i = 0; i < passwordLength; i++) {
                let randomIndexOne = Math.floor(Math.random() * numbers.length);
                passwordOne.textContent += numbers[randomIndexOne];
                let randomIndexTwo = Math.floor(Math.random() * numbers.length);
                passwordTwo.textContent += numbers[randomIndexTwo];
            }
        }
        if (symbolsAlive) {
            let symbols = characters.filter(function (char) {
                return !/[a-zA-Z0-9]/.test(char);
            });
            for (let i = 0; i < passwordLength; i++) {
                let randomIndexOne = Math.floor(Math.random() * symbols.length);
                passwordOne.textContent += symbols[randomIndexOne];
                let randomIndexTwo = Math.floor(Math.random() * symbols.length);
                passwordTwo.textContent += symbols[randomIndexTwo];
            }
        }
    }
});

numbersEl.addEventListener("click", function () {
    numbersAlive = true;
    symbolsAlive = false;
});

symbolsEl.addEventListener("click", function () {
    symbolsAlive = true;
    numbersAlive = false;
});

passwordLengthRange.addEventListener("click", function (e) {
    if (e.target.id === "eight-el") {
        passwordLength = 8;
    } else if (e.target.id === "twelve-el") {
        passwordLength = 12;
    } else if (e.target.id === "sixteen-el") {
        passwordLength = 16;
    }
});

copyOne.addEventListener("click", function () {
    if (passwordLength === 0) {
        alert("Choose a password length, please!");
    } else {
        let textToCopy = passwordOne.textContent;
        navigator.clipboard
            .writeText(textToCopy)
            .then(function () {
                alert("Text copied to Clibboard");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});

copyTwo.addEventListener("click", function () {
    if (passwordLength === 0) {
        alert("Choose a password length, please!");
    } else {
        let textToCopy = passwordTwo.textContent;
        navigator.clipboard
            .writeText(textToCopy)
            .then(function () {
                alert("Text copied to Clibboard");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});
