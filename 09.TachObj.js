
const obj={
    name:"hieu",
    age:17,
    Baby: false
}

//cach 1
for(let i of Object.keys(obj)){
    console.log(obj[i]);
}

//cach 2
for(let i of Object.values(obj)){
    console.log(i);
}