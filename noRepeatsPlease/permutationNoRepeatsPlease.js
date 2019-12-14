function permAlone(str) {
    str = str.split("");
    let charNum = 0;

    while(charNum < str.length){
        let essay = "";
        for(let i = 0;i<str.length)
        essay = str[i]


    }
  
  
  return str;
}
 
permAlone('aab');
function perm(n){
    if(n===0){
        return 1
    }else{
        return n * perm(n-1)
    }
}

function loopSuc(originArray,newArray,index,newPerm){
     let result;
     if(index === undefined)  index = 0;
     if(newArray === undefined) newArray=[];
     if(newPerm === undefined || newPerm.length === originArray.length) newPerm = "";
     if(index === originArray.length-1){
        for(let i=0;i<originArray.length;i++){
            if(newPerm[newPerm.length - 1] !== originArray[i]) newPerm += originArray[i];
            result  = newArray.push(newPerm);
            newPerm = ""
           // console.log(result);        
        }    
     return newArray;
     }else{
     for(let i=0;i<originArray.length;i++){
         if(newPerm[index] !== originArray[i]) newPerm += originArray[i];       
            loopSuc(originArray,newArray,index+1,newPerm);
     }
     return newArray;
     }
 }
const array = loopSuc(['a','b','a'])
console.log(array);
/// first level build the first lettre
    // second level at each first essay  add onother letter if is not repeated 
        // do the same of the second 
            // do the same in the previous
                //.............
                    // the last one is array.length  - 1 level, add the letter if not repeated and return the new word 
                    // add it to the table

// do the first one and use while loop for the other 