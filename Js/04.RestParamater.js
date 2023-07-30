//Rest dùng là đối số bth của function
function logger1(a,b,...rest){
    console.log(rest);
}

logger1(2,3,1,2,3);

//Rest dùng làm đối số, đối số là 1 obj
function logger2({name,...rest}){
    console.log(rest);
}

logger2({
    name:"hieu",
    sex:"Nam",
    age: 23
});

//Rest dùng làm đối số, đối số là 1 array
function logger3([a,...b]){
    console.log(a);
    console.log(b);
}

logger3([2,1,2,3]);