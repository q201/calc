  let clicked = false;

  function clr(element) {
    element.innerHTML = "You clicked on me";
    element.style.color = "red";
    element.style.fontSize = "50px";
  }

  function bg() {
    document.getElementById("label").style.backgroundColor = "red";
  }

  function calc(x) {
    const label = document.getElementById("label");
    const labelValue = label.innerHTML.trim();

    if (x === "reset") {
      label.innerHTML = "";
    } else if (x === "=") {
      if (labelValue !== '') {
        try {
          label.innerHTML = eval(labelValue);
          clicked = true;
          console.log("inside calc" + clicked);
        } catch (error) {
          console.error("Error:", error);
          label.innerHTML = "Error";
        }
      }
    } else {
      if (clicked) {
        clicked = false;
        label.innerHTML = x;
        console.log("inside status true");
      } else {
        label.innerHTML += x;
        console.log("inside status false" + clicked);
      }
    }
  }