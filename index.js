function toInches(ft) {
  return ft * 12;
}

function toFeet(inches) {
  return inches / 12;
}

function getDecimal(n) {
	return (n - Math.floor(n));
}

function calcSetDepth(size) {
  return (size*.10)+2;
}

function getAGL(size,setDepth = calcSetDepth(size)) {
    return size-setDepth;
}

function attachCalc() {
  
  function calc(sel,a,b) {
    if (sel == 'Add') {
      return a+b;
    } else {
      return a-b;
    };
  };

  function checkEmpty(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        arr[i] = 0;
      };
    };
    /*
    if (isNaN(arr[0]) == true || isNaN(arr[1]) == true) {
      alert("Please enter attachment heights.");
  };
  */
  };

  event.preventDefault();  //Tells browser to prevent default behavior for submitting event.

  let attach1 = [];
  let attach2 = [];
  let sel;
  let result;

  attach1.push(parseInt(document.getElementById('a_ft').value));
  attach1.push(parseInt(document.getElementById('a_in').value));
  checkEmpty(attach1);
  attach1.push(toInches(attach1[0]) + attach1[1]); //Adds total value in inches to array

  attach2.push(parseInt(document.getElementById('b_ft').value));
  attach2.push(parseInt(document.getElementById('b_in').value));
  checkEmpty(attach2);
  attach2.push(toInches(attach2[0]) + attach2[1]); //Adds total value in inches to array

  sel = document.getElementById('operation').value;//Determine users requested operation

  result = calc(sel,attach1[2],attach2[2]);

  resultFeet = Math.floor(result/12);
  resultInches = result%12;
  document.getElementById("calcResults").innerHTML = '<strong>Result =</strong> ' + resultFeet + " ft " + resultInches + " in";
};


//DARK MODE 
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};


function runGetAGL(){

  //Prevents default behavior of submit button. 
  event.preventDefault();  

  //Gets Pole Size and Setting Depth inputed by user.
  let poleSize = parseFloat(document.getElementById("pSize").value);
  let settingDepth = parseFloat(document.getElementById("setDepth").value);

  if (isNaN(poleSize)) {
    alert("ERROR: Missing Pole Size");
    return;
  }

  let defaultSetDepth = false;
  if (isNaN(settingDepth)) {
    settingDepth = calcSetDepth(poleSize);
    defaultSetDepth = true;
  };

  //Runs getAGL() with variables and saves output to result
  let result = getAGL(poleSize,settingDepth);
  
  console.log(result);

  //Displays Result
  document.getElementById("calcAGLResult").innerHTML = '<strong>Result =</strong> ' + result + " feet";
  if (defaultSetDepth == true){
    document.getElementById("calcAGLNotes").innerHTML = 'Note: Standard setting depth was used';
  } else {
      document.getElementById("calcAGLNotes").innerHTML = '';
};
};













