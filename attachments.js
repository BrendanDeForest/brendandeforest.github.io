
// Goal is to check attachment heights for clearance violations

//User inputs Cable Owner, Cable Size, Attach Height, Midspan Height, Span #, Span Direction

class Attachment {
  constructor(owner, type, size, height, mid_height, span, bearing) {
    this.owner = owner;
    this.type = type;
    this.size = size; 
    this.height = () => {this.feet + this.inches.toFeet()};
    this.mid_height = mid_height; //inches
    this.span = span;
    this.bearing = bearing;
  }

  height_ft() {
    let feet = Math.floor(this.height/12);
    let inches = Math.floor(this.height%12);
    return `${feet}' ${inches}"`;
  }

  toFeet() {
    console.log(this.height);
    return Math.floor(this.height/12);
  }

  getOwner(){
    console.log(`This cable is owned by ${this.owner}.`);
  }
}

// let att_1 = new Attachment('Comcast', 'CATV', '1.0', '228', '198', '1', '0');
// let att_2 = new Attachment('Charter', 'CATV', '1.5', '222', '195', '1', '0');
let att_1 = new Attachment;
let att_2 = new Attachment;

function checkSeparation() {

  //Prevents default behavior of submit button. 
  event.preventDefault();  

  //Reads Form and assigns values to objects
  att_1.owner = document.getElementById("a_owner").value;
  att_1.type = document.getElementById("a_type").value;
  att_1.size = document.getElementById("a_size").value;
  att_1.mid_height = document.getElementById("a_mid_height").value;
  att_1.feet = document.getElementById("a_ft").value;
  att_1.in = document.getElementById("a_in").value;

  att_2.owner = document.getElementById("b_owner").value;
  att_2.type = document.getElementById("b_type").value;
  att_2.size = document.getElementById("b_size").value;
  att_2.mid_height = document.getElementById("b_mid_height").value;
  att_2.feet = document.getElementById("b_ft").value;
  att_2.in = document.getElementById("b_in").value;
  
 //Simplifies naming convention
  let a = att_1;
  let b = att_2;

  let h1 = a.height;
  let h2 = b.height;

  //Checks for 12" Separation Violation
  if ((h1-h2) < 12) {
    console.log(`12" Separation Violation Found [ ${a.owner}: ${a.height_ft()} , ${b.owner}:${b.height_ft()}].`);
  } else {
    console.log(`No violation found between ${a.owner} and ${b.owner}.`);
  }
  console.log(att_1.owner);
};

let violationsButton = document.getElementById("violationsButton");
//On Button Click, run function
violationsButton.onclick = checkSeparation;