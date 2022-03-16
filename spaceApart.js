const spaceApart = (arr) => {
    let ones = arr.filter(el => el === '1').length;
    let neg = arr.filter(el => el < 0).length;
  
    if(ones !== 2 || neg > 0) return 'invalid';
  
    let first = arr.findIndex(el => el === '1') + 1;
    let last = arr.lastIndexOf('1');
    let sum = arr.slice(first, last)
                 .filter(el => typeof el === 'number')
                 .reduce((acc, cv) => acc + cv, 0);
  
    return sum;
  }
 console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]))
  console.log(spaceApart(["1", 9, 20, 38, "1"]))
  console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]))