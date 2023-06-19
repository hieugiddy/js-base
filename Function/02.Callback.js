//Calback
//La ham
//Truyen qua doi so cua ham khac
//Duoc goi lai trong ham khac

Array.prototype.map2=function(callback){
    console.log(this); //show ra arr course
    let arrLength=this.length; //cai thien hieu nang, bo vao vong lap se lap nhieu lan
    var output=[];
    var result;

    for(let i=0; i<arrLength; ++i){
        result= callback(this[i],i);
        output.push(result);
    }

    return output;
}

var course=[
    'Java',
    'Node',
    'Php'
]
function callFC(course, index){
    return `<h2>${course}</h2>`;
}
console.log(course.map2(callFC).join(''));