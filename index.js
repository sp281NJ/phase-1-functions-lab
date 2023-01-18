// Code your solution in this file!
const hq = 42;
const ft = 264;
function distanceFromHqInBlocks(blocks){
 if(blocks > hq){ 
    return blocks - hq;
}else if(blocks < hq){
    return hq- blocks;
    }

}

function distanceFromHqInFeet(feet){
    if(feet > hq){ 
        return distanceFromHqInBlocks(feet)*ft;
    }else if(feet < hq){
        return distanceFromHqInBlocks(feet)*ft;
        }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(start > destination){
        return (start - destination) *ft;
    }else if (start < destination){
        return(destination-start)*ft;
    }

  }

  distanceFromHqInBlocks(43,48);
  distanceFromHqInBlocks(50,60);
  distanceFromHqInBlocks(34,28);

function calculatesFarePrice(start, destination){
  
    if(distanceTravelledInFeet(start, destination)< 400){
        return 0;
    }else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000 ){
        return(distanceTravelledInFeet(start, destination)-400)*.02;
    }else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25;
    }else if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far";
    }
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);