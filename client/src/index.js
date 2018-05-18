var socket = io(); //load socket.io-client and connect to the host that serves the page
var rgb = w3color("rgb(0,0,0)"); //we use the w3color.js library to keep the color as an object
window.addEventListener("load", function(){ //when page loads
  var rSlider = document.getElementById("redSlider");
  var gSlider = document.getElementById("greenSlider");
  var bSlider = document.getElementById("blueSlider");
  var picker = document.getElementById("pickColor");

  rSlider.addEventListener("change", function() { //add event listener for when red slider changes
    rgb.red = this.value; //update the RED color according to the slider
    colorShow.style.backgroundColor = rgb.toRgbString(); //update the "Current color"
    socket.emit("rgbLed", rgb); //send the updated color to RGB LED via WebSocket
  });
  gSlider.addEventListener("change", function() { //add event listener for when green slider changes
    rgb.green = this.value; //update the GREEN color according to the slider
    colorShow.style.backgroundColor = rgb.toRgbString(); //update the "Current color"
    socket.emit("rgbLed", rgb); //send the updated color to RGB LED via WebSocket
  });
  bSlider.addEventListener("change", function() { //add event listener for when blue slider changes
    rgb.blue = this.value;  //update the BLUE color according to the slider
    colorShow.style.backgroundColor = rgb.toRgbString(); //update the "Current color"
    socket.emit("rgbLed", rgb); //send the updated color to RGB LED via WebSocket
  });
  picker.addEventListener("input", function() { //add event listener for when colorpicker changes
    rgb.red = w3color(this.value).red; //Update the RED color according to the picker
    rgb.green = w3color(this.value).green; //Update the GREEN color according to the picker
    rgb.blue = w3color(this.value).blue; //Update the BLUE color according to the picker
    colorShow.style.backgroundColor = rgb.toRgbString();  //update the "Current color"
    rSlider.value = rgb.red;  //Update the RED slider position according to the picker
    gSlider.value = rgb.green;  //Update the GREEN slider position according to the picker
    bSlider.value = rgb.blue;  //Update the BLUE slider position according to the picker
   socket.emit("rgbLed", rgb);  //send the updated color to RGB LED via WebSocket
  });
});