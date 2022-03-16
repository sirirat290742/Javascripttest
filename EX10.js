function isValidIP(ip){
    let arr_ip = ip.split('.');
    let check = true;
    if(arr_ip.length === 4){
        for(let value of arr_ip){
            if(parseInt(value) <= 255 && value[0] != '0') check = true;
            else check = false;
        }
    } else {
        return false;
    }
    return check;
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.090"));
console.log(isValidIP("123.045.067.089"));