function rightRotations(value){

    const arr = [...value];
    const result = [];
    let str;

    for(let s of arr){
        str = arr.shift();
        arr.push(str);
        result.unshift(arr.join(''));
    }



return result;
}

console.log(rightRotations("abc"))
console.log(rightRotations("abcdef"))