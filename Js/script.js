document.getElementById("law-select").addEventListener("change", function() {
    const law = this.value;
    if (law === "first") {
      document.getElementById("first-law").style.display = "block";
      document.getElementById("second-law").style.display = "none";
    } else {
      document.getElementById("first-law").style.display = "none";
      document.getElementById("second-law").style.display = "block";
    }
  });
  
  function calculateFirstLaw() {
    const lawType = document.getElementById("first-value").value;
    const input1 = parseFloat(document.getElementById("first-input1").value);
    const input2 = parseFloat(document.getElementById("first-input2").value);
    let result = 0;
  
    if (lawType === "voltage") {
      result = input1 * input2; // V = I * R
      document.getElementById("result").innerHTML = `Voltagem (V): ${result} V`;
    } else if (lawType === "current") {
      result = input1 / input2; // I = P / V
      document.getElementById("result").innerHTML = `Corrente (A): ${result} A`;
    } else if (lawType === "resistance") {
      result = input1 / input2; // R = V / I
      document.getElementById("result").innerHTML = `Resistência (Ω): ${result} Ω`;
    } else if (lawType === "power") {
      result = input1 * input2; // P = V * I
      document.getElementById("result").innerHTML = `Potência (W): ${result} W`;
    }
  }
  
  function calculateSecondLaw() {
    const resistivity = parseFloat(document.getElementById("second-input1").value);
    const length = parseFloat(document.getElementById("second-input2").value);
    const area = parseFloat(document.getElementById("second-input3").value);
  
    const resistance = resistivity * (length / area);
    
    document.getElementById("result").innerHTML = `Resistência (Ω): ${resistance} Ω`;
  }