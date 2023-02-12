function checkSquare1(arr1,arr2){
    if(arr1.length !== arr2.length) return;

    let obj1 = {};
    let obj2 = {};
    
    for(let val of arr1){
        obj1[val] = obj1[val] ? obj1[val] +1:1;
    }
    for(let val of arr2){
        obj2[val] = obj2[val] ? obj2[val] +1:1;
    }
    console.log(obj1);
    console.log(obj2);
    
    for(let key in obj1){
        if(!obj2[key * key]) return false;

        if(obj2[key * key] !== obj1[key]) return false;

        
    }
return true;

}
