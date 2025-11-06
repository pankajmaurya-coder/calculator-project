
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");


let currentInput = "";


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    
    if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
       
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    currentInput += key;
    display.value = currentInput;
  } 
  else if (key === "Enter") {
    try {
      currentInput = eval(currentInput);
      display.value = currentInput;
    } catch {
      display.value = "Error";
    }
  } 
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } 
  else if (key.toLowerCase() === "c") {
    currentInput = "";
    display.value = "";
  }
});

const themeToggle = document.getElementById("themeToggle");
let darkMode = false;

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.background = "linear-gradient(to right, #141e30, #243b55)";
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    document.body.style.background = "linear-gradient(to right, #89f7fe, #66a6ff)";
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

