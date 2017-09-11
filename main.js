//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, name, color, owner) {
  this.status = status;
  this.name = name
  this.color = color;
  this.hungry = true;
  this.owner = owner;

}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog('normal','sadie','black');

let moonshine = new Dog('normal','moonshine','brown');

let atticus = new Dog('normal','atticus', 'blue');




//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name;
  this.cool = true;
}

Human.prototype.pet = function(dogname){
  return dogname.status = "happy";
}

Human.prototype.feed = function(dogname){
 dogname.hungry = false;
}

Human.prototype.loser = function(humanName) {
  humanName.cool = false;
}


// Instances of Human
// Needed: mason, julia
let mason = new Human("Mason");

let julia = new Human("julia");

//actions
// mason.pet('sadie');

mason.feed(sadie);

mason.loser(mason);
