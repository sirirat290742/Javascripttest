function getBudgets(data){
    let sum =0;
    for(let i of data) sum += i.budget;
    return sum;
}

console.log(getBudgets([
    {name: "John",age:21,budget:23000},
    {name: "Steve",age:32,budget:40000},
    {name: "Matin",age:16,budget:2700},
]))
console.log(getBudgets([
    {name: "John",age:21,budget:29000},
    {name: "Steve",age:32,budget:32000},
    {name: "Matin",age:16,budget:1600},
]))