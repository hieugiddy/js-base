function fnc(a,b=0){
    return [a,b];
 }
const sum=(function(a,b){
    return a+b;
})(); //anmonyous function

//Ham sum duoc goi la bien, vi functinon tu chay

 console.log(fnc(4))
 console.log(fnc(4,1))