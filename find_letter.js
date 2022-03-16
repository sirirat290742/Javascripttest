const missingLetter = (str) => {
    let b,n;

    for(let i=0; i < str.length - 1 ; i++ ){
        b = str[i].charCodeAt(0);
        n = str[i+1].charCodeAt(0);
        
        if(n !== b+1) return String.fromCharCode(b+1);
    }
    return "No Missing Letter";
}
console.log(missingLetter("abdefg"))
console.log(missingLetter("mnopqs"))
console.log(missingLetter("tuvxyz"))
console.log(missingLetter("ghijklmno"))