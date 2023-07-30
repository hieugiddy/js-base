var a=5
let b=3
const C=10

if(true){
    var a=8
    let b=9
    const C=11
}

console.log(`
    a: ${a},//=8
    b: ${b},//=3
    C: ${C}//=10
`)
/*
=> Trong cùng 1 scope: 
 - var có thể khai báo lại biến và update lại giá trị nên a=5 => a=8, 
 - let k thể khai báo lại biến nên giá trị k thay đổi, 
 - const là hằng số nên k thể thay đổi giá trị

*/