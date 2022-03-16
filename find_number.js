function numInStr(value){
    let n =[];
    for(const num of value){
        if(num.match(/[0-9]/g)){
            n.push(num)
        }
    }

return n;


}
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr (["this is a test", "test1"]))
console.log(numInStr (["1a", "a", "2b", "b"]))