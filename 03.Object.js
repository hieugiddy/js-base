//Enhanced object literals
var name="yourname";
var age="tuoi";

const person ={
    [name]: "Hieu", //Enhanced object literals
    [age]: "20 tuoi", //Enhanced object literals
    hello: () => {
        console.log("Toi ten la " + this.name + ", "+ this.age + " tuoi");
    }
};
// end Enhanced object literals
person.hello() // undefine

//them mot thuoc tinh moi, nhung ten thuoc tinh co dau '-,@,...'
person['my-name']="hieumm";

console.log(person);

//obj contructor
function heo(name,age){
    this.name=name;
    this.age=age;

    this.anCam= function(){
        console.log("an cam");
    }
}

const heoCon=new heo("cho",13);
heoCon.anCam();

const person1 ={
    name: "Hieu",
    age: "20 tuoi",
    hello1: function() {
        console.log("Toi ten la " + this.name + ", "+ this.age);
    }
};

person1.hello1() // in ra bth


const person2 ={
    name: "Hieu",
    age: "20 tuoi",
    hello2() {
        console.log("Toi ten la " + this.name + ", "+ this.age);
    }
};

person2.hello2() // in ra bth

//Không thể tạo object bằng arrow function
/*
const person = (name, age) =>{
    this.name=name;
    this.age=age;
}

const hieu=new person("hieu",23);
console.log(hieu);
*/