function simplePair(n,m){


    for(i=0;i<n.length;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i]*n[j]===m)
            return [n[i],n[j]]
        }
    
    
    };
        return null;
    }
    
    console.log(simplePair([1, 2, 3], 3)); 
    console.log(simplePair([1, 2, 3], 6)); 
    console.log(simplePair([1, 2, 3], 9));