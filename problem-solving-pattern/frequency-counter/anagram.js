function anagram(first,second){
        
if(first.length !== second.length) return false;

    let obj = {};
    
    for(let val of first){
        if(!obj[val]){
            obj[val] = 1;
        }else{
            obj[val] = obj[val] +1;
        }
        
    }

    for(let v of second){
        if(!obj[v]){
            return false;
        }else{
            obj[v] = obj[v] -1;
        }

    
        }

return true;


}
