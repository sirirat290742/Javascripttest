function totalVolume(){
    let total = 0;
    for(let arg of arguments){
        let result_arg = 1 ;
        for(let i = 0 ; i < arg.length;i++){
            result_arg *= arg[i]
        }
        total += result_arg;
    }
    return total;
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalVolume([2,2,2],[2,1,1]))
console.log(totalVolume([1,1,1]))
