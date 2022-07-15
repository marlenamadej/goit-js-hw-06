const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
});

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionText = select.options[selectedOptionIndex].text;
  textOutput.textContent = selectedOptionText;
}
