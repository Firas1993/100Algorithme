//  return array of false and true in the index of the subarray where the element exist 
function existInArray2D(arr,element){
   return arr.map((item,index)=> item.includes(element));
}
function updateElment(arr1,element){
    let existing = existInArray2D(arr1,element[1]);
    let index = existing.indexOf(true);
    arr1[index][0] += element[0]
    return arr1; 
}
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let newArray = arr1;
    for (let el in arr2){
        let existing = existInArray2D(newArray,arr2[el][1]);
        if(existing.includes(true)){
            // if this elment exist in arr1 merge it in the the newArray
            let exiProd = arr2[existing.indexOf(true)];
            newArray = updateElment(newArray,exiProd);
        }else{
            // if it's not exist jsut push it in the newArray 
            newArray.push(arr2[el]);
        }
    }
    //sort array of 2D 
    newArray.sort((a,b)=>{
    a = a[1];b=b[1];
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
    })
    console.log(newArray);
    return newArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log(existInArray2D(newInv,curInv[0][1]));
//updateInventory(curInv, newInv);
 