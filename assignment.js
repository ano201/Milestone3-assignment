// feetToMiles
function feetToMile(feet){
  var miles = feet / 5280;
  if (feet < 0) {
    miles = "Distance can't be negative."
  }
  return miles;
}

// woodCalculator
function woodCalculator(chair, table, bed){
  var woodForChair = (chair)**3;
  var woodForTable = (3*table)**3;
  var woodForBed = (5*bed)**3;
  return (woodForChair + woodForTable + woodForBed);
}

// brickCalculator
function brickCalculator(floor) {
  var singleFloor = [];
  var feet = 15;
  var countedFeet = 0;
  for (var i = 1; i <= floor; i++) {
    singleFloor.push(i);
  }
  for (var i = 0; i < singleFloor.length; i++) {
    var floorCounter = singleFloor[i];
    if (floorCounter <= 10) {
      countedFeet += feet;
    } else if (floorCounter <= 20) {
      countedFeet += feet-3;
    } else {
      countedFeet += feet-5;
    }
  }
  return countedFeet*1000;
}

// tinyFriend
function tinyFriend(nameList){
  var tinyName = nameList[0];
  for (var i = 0; i < nameList.length; i++) {
    var singleName = nameList[i];
    if ((singleName != "")&&(singleName != " ")&&(tinyName.length > singleName.length)) {
      tinyName = singleName;
    }
  }
  return tinyName;
}
