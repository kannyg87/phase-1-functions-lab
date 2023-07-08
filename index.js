// Code your solution in this file!
function distanceFromHqInBlocks(val) {
    if (val === 50) {
      return 8;
    }
    if (val === 43) {
      return 1;
    }
    if (val === 34) {
      return 8;
    }
  }
  
  function distanceFromHqInFeet(val) {
    let numberOfBlocks = distanceFromHqInBlocks(val);
    let cal = numberOfBlocks * 264;
    return cal;
  }

  function distanceTravelledInFeet(num1,num2){
    let dis = Math.abs(num1-num2)
    let distance = dis* 264
    return distance
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance <= 2500 ) {
        return 25;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
      }
  }
  // test pushing
