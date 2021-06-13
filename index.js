
/* --------------------------------------------------
//POLE AUDIT: CHECK TO SEE IF EXISTING POLE ADEQUATE
*/

let poleAudit = document.getElementById('poleAudit') //Declares ID as var poleAudit

poleAudit.addEventListener("click", evt => {

    const poleID = prompt("Enter CEID#");
    const poleSize = prompt("Enter Pole Size");
    const poleClass = prompt("Enter Pole Class");
    const condition = prompt("Please enter condition of pole (Good, Worn, or Damaged)")
    const replace = "no";
    
    var newPole = {
        id: poleID,
        size: poleSize,
        class: poleClass,
        condition: condition,
        replace: replace
    }
    
    if (newPole.condition == "Damaged"){
        newPole.replace = "Yes";
    }
    
    alert("Pole 1 is a "+newPole.size+"ft class "+newPole.class+" pole.");
    if (newPole.replace == "Yes") {
        alert("Please replace this pole.");
    }
});

let workSpace = document.getElementById('workspace');

//Creates functionality for Feet to Inches Calculator
document.getElementById('feetToInches').onclick = function () {
    
    //Generate field for text input
    workSpace.innerHTML = '<input type="text" id="inputFeet" value="Please enter feet here." />';
    
    //Generate Submit Button
    workSpace.innerHTML += '<input type="submit" value="Submit" id="feetSubmit">';

    //Upon submit, read input
    let feetSubmit = document.getElementById("feetSubmit");
    feetSubmit.addEventListener("click", evt => {
        let feet = document.getElementById("inputFeet").value;
        console.log(feet);
        //Run ftToInches
        let result = ftToInches(feet);
        //Display results
        console.log(result);
    });
};

//Function to Convert Feet to Inches
function ftToInches(ft) {
    let result = Math.floor(ft * 12);
    return result;
}
