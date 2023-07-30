const person ={
    name: "Hieu", //Enhanced object literals
    age: "23 tuoi", //Enhanced object literals
    hello: () => {
        console.log("Toi ten la " + this.name + ", "+ this.age + " tuoi");
    }
}
// end Enhanced object literals
person.hello() // undefine


const person1 ={
    name: "Hieu",
    age: "20 tuoi",
    hello1: function() {
        console.log("Toi ten la " + this.name + ", "+ this.age);
    }
}

person1.hello1() // in ra bth


//Không thể tạo object bằng arrow function
/*
const person = (name, age) =>{
    this.name=name;
    this.age=age;
}

const hieu=new person("hieu",23);
console.log(hieu);
*/