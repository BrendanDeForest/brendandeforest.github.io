
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
})

/* --------------------------------------------------
//CONVERTS DECIMAL FOOTAGE TO INCHES
*/

let ftToInches = document.getElementById('feetToInches')

ftToInches.addEventListener("click", evt => {
    const feet = prompt("Please enter a value in feet");
    var inches = Math.floor(feet * 12);

    if (inches / 12) {
        var footage = (inches/12).toFixed(0);
        var inches = inches%12;
    }
    alert(feet + "ft = " + footage + "ft " + inches + "in");
    }
)

/* --------------------------------------------------
//GENERATE:  DOESN'T REALLY DO ANYTHING YET
*/

document.getElementById('generate').onclick = function() {
 
    var values = ["Good","Worn","Damaged"];
   
    var select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"
   
    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }
   
    var label = document.createElement("label");
    label.innerHTML = "What condition is the pole in?: "
    label.htmlFor = "Choose";
   
    document.getElementById("workspace").appendChild(label).appendChild(select);
  }
