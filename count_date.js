function getDays(value1,value2){
 
    let sub1;
     for(let i = 0; i<sub1.length+1;i++){
        sub1 = sub1[i]

     }
    
  return Math.round(Math.abs(sub1-value2) /(1000*60*60*24));
}
console.log(getDays("June-14-2019","June 20, 2019"))
console.log(getDays("December-29-2018","January 1, 2019"))
console.log(getDays("July-20-2019","July 30, 2019"))