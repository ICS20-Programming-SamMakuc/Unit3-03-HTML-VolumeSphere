// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // get hours worked and hourly rate from input fields
  let rad = parseInt(document.getElementById("radius").value);
  
  // do math
  let result = 1.333333 * Math.PI * rad ** 3;
  result = result.toFixed(2);
  
  // display result back to user
  document.getElementById('total-volume').innerHTML = "The volume of your sphere is: " + result + "cm<sup>3</sup>.";
}
