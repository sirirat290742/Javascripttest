function highestDigit(num){
let x = num.toString().split('');
let max = 0;
for(let y of x){
    if(max < y) max = y;

}return max;


}
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))