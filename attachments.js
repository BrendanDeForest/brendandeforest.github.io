
// Goal is to check attachment heights for clearance violations

//User inputs Cable Owner, Cable Size, Attach Height, Midspan Height, Span #, Span Direction




class Attachment {
  constructor(owner, type, size, height, mid_height, span, bearing) {
    this.owner = owner;
    this.type = type;
    this.size = size;
    this.height = height; //inches
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


let att_1 = new Attachment('Comcast', 'CATV', '1.0', '228', '198', '1', '0');
let att_2 = new Attachment('Charter', 'CATV', '1.5', '222', '195', '1', '0');

console.log(att_1.owner);

function checkSeparation(a,b) {

  let h1 = a.height;
  let h2 = b.height;

  //Checks for 12" Separation Violation
  if ((h1-h2) < 12) {
    console.log(`12" Separation Violation Found [ ${a.owner}: ${a.height_ft()} , ${b.owner}:${b.height_ft()}].`);
  } else {
    console.log(`No violation found between ${a.owner} and ${b.owner}.`);
  }
}

checkSeparation(att_1,att_2);
