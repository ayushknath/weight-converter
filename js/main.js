const weightInput = document.getElementById("weight-input");

// Keydown event on weight input
weightInput.addEventListener("input", convertWeight);

// Function to convert weight
function convertWeight(e) {
  const weightValue = Number(e.target.value);

  // Check if the value is a number
  if (!isNaN(weightValue)) {
    const tonne = weightValue * 1e-3;
    const ounce = weightValue * 35.274;
    const pound = weightValue * 2.205;

    const tonneOutput = document.querySelector(".tonne-output");
    const ounceOutput = document.querySelector(".ounces-output");
    const poundOutput = document.querySelector(".pounds-output");

    // Append the converted units
    tonneOutput.innerHTML = tonne.toFixed(3);
    ounceOutput.innerHTML = ounce.toFixed(3);
    poundOutput.innerHTML = pound.toFixed(3);
  } else {
    alert("Enter valid weight!");
  }
}
