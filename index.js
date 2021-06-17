function toInches(ft) {
  return ft * 12;
}

function toFeet(inches) {
  return inches / 12;
}

function getDecimal(n) {
	return (n - Math.floor(n));
}

function attachCalc() {
  
  function calc(sel,a,b) {
    if (sel == 'Add') {
      return a+b;
    } else {
      return a-b;
    };
  };

  event.preventDefault();  //Tells browser to prevent default behavior for submitting event.

  let attach1 = [];
  let attach2 = [];
  let sel;
  let result;

  attach1.push(parseInt(document.getElementById('a_ft').value));
  attach1.push(parseInt(document.getElementById('a_in').value));
  attach1.push(toInches(attach1[0]) + attach1[1]); //Adds total value in inches to array

  attach2.push(parseInt(document.getElementById('b_ft').value));
  attach2.push(parseInt(document.getElementById('b_in').value));
  attach2.push(toInches(attach2[0]) + attach2[1]); //Adds total value in inches to array

  sel = document.getElementById('operation').value;//Determine users requested operation

  result = calc(sel,attach1[2],attach2[2]);

  resultFeet = Math.floor(result/12);
  resultInches = result%12;
  document.getElementById("calcResults").innerHTML = '<strong>Result =</strong> ' + resultFeet + " ft " + resultInches + " in";
}
