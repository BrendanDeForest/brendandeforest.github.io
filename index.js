let workSpace = document.getElementById('workspace');

// Converts Feet to Inches
function toInches(ft) {
  return ft * 12;
}

// Converts Inches to Feet
function toFeet(inches) {
  return inches / 12;
}


function attachCalc() {

  //Tells the browser to prevent its default behaviour and let us handle the form submitting event on the client side itself.
  event.preventDefault(); 

  //read afeet
  let a_ft = parseInt(document.getElementById('a_ft').value);
  //read ainches
  let a_in = parseInt(document.getElementById('a_in').value);
  
  let a = a_ft + toFeet(a_in);

  //read bfeet
  let b_ft = parseInt(document.getElementById('b_ft').value);
  //read binches
  let b_in = parseInt(document.getElementById('b_in').value);

  let b = b_ft + toFeet(b_in);
  //convert ainches, b inches to feet
  //calculate difference
  console.log("attachCalc() has completed");
  let result = (a-b);
  resultFeet = toFeet(result);
  resultInches = toInches(result);
  document.getElementById("calcResults").innerHTML = '<strong>Result</strong> ' + resultFeet + "ft " + resultInches + " in";
}

//Attachment Calculator Button
//On click, run attachCalc()
