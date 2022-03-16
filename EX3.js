function capToFront(text){
    let upper = "";
    let lower =  "";
    let temp = text.split('');
    for (let char of temp){
        if(char === char.toUpperCase()){
            upper += char;

        }
        if(char === char.toLowerCase()){
            lower += char;
        }
    }
    return upper+lower;

}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));