function boldtext() {
  let t = document.getElementById('text');
  t.style.fontWeight = "bold";
}
function setFont() {
  let t = document.getElementById('text');
  // get the select element
  let selectElement = document.getElementById('fonts');
  
  // get the selected option by the user
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  
  // get the value of the selected option
  let selectedValue = selectedOption.value;
  
  if (selectedValue == 'font1') {
    t.style.fontFamily = "Arial";
  }                                         
  else if (selectedValue == 'font2') {
    t.style.fontFamily = "Gill Sans";
  }
  else if (selectedValue == 'font3') {
    t.style.fontFamily = "Times New Roman";
  }
  else if (selectedValue == 'font4') {
    t.style.fontFamily = "Courier New";
  }
  else if (selectedValue == 'font5') {
    t.style.fontFamily = "sans-serif";
  }
  else {
    t.style.fontFamily = "Verdena";
  }
}
function setFontSize() {
  let t = document.getElementById('text');

  let selectElement = document.getElementById('fontsize');
  
  let selectedOption = selectElement.options[selectElement.selectedIndex];

  let selectedValue = selectedOption.value;
  
  if (selectedValue == 'size1') {
    t.style.fontSize = "28px";
  }
  else if (selectedValue == 'size2') {
    t.style.fontSize = "26px";
  }
  else if (selectedValue == 'size3') {
    t.style.fontSize = "24px";
  }
  else if (selectedValue == 'size4') {
    t.style.fontSize = "22px";
  }
  else if (selectedValue == 'size5') {
    t.style.fontSize = "20px";
  }
  else if (selectedValue == 'size6') {
    t.style.fontSize = "18px";
  }
  else if (selectedValue == 'size7') {
    t.style.fontSize = "16px";
  }
  else if (selectedValue == 'size8') {
    t.style.fontsize = "14px";
  }
  else if (selectedValue == 'size9') {
    t.style.fontSize = "12px";
  }
  else {
    t.style.fontSize = "10px";
  }
}
function setColor() {
  let t = document.getElementById('text');

  let selectElement = document.getElementById('fontcolor');
  
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  
  let selectedValue = selectedOption.value;
  
  if (selectedValue == 'color1') {
    t.style.color = "black";
  }
  else if (selectedValue == 'color2') {
    t.style.color = "blue";
  }
  else if (selectedValue == 'color3') {
    t.style.color = "purple";
  }
  else if (selectedValue == 'color4') {
    t.style.color = "deeppink";
  }
  else if (selectedValue == 'color5') {
    t.style.color = "yellowgreen";
  }
  else if (selectedValue == 'color6') {
    t.style.color = "green";
  }
  else if (selectedValue == 'color7') {
    t.style.color = "red"
  }
  else if (selectedValue == 'color8') {
    t.style.color = "brown";
  }
  else if (selectedValue == 'color9') {
    t.style.color = "orange";
  }
  else {
    t.style.color = "darkcyan";
  }
}