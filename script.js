document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelector("input[type='text']");
    const output = document.getElementById("output");
  
    if (form && input && output) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const userInput = input.value.trim();
        if (userInput) {
          output.textContent = `You entered: ${userInput}`;
        } else {
          output.textContent = "Please enter something.";
        }
      });
    }
  });