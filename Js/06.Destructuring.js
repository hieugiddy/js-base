//xoa 2 ptu dau tien cua mang
const arr=[1,2,3,5,6];

var [a,b,...newArr]=arr;

console.log(newArr);

//Loại Name ra khỏi obj
const obj={
    name:"hieu",
    age:13,
    birthday: "09/06/2000"
}

var {name,...rest}=obj; //Phai xai dung ten thuoc tinh
console.log(rest);

//TH trung ten thuoc tinh
const obj1={
    name:"hieu",
    age:13,
    birthday: "09/06/2000",
    Baby:{
        name:"Bro"
    }
}

var {
    name: tenBo, 
    Baby: {
        name: tenCon
    }
}=obj1; 

console.log(tenBo + ", " + tenCon);

//Default Value
var {name,vo="chua co vo"}=obj; 

console.log(name + " " +vo);