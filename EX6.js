function removeDups(name) {
    let x = [];
    name.forEach(value=>{
        if (!x.includes(value)){
            x.push(value)
        }
    });
    return x;
 }
 
     console.log(removeDups([1,0,1,0]))
     console.log(removeDups(["The","big","cat"]))
     console.log(removeDups(["John","Taylor","John"])) 