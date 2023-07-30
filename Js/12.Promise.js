//sync la code duoc thuc hien tuan tu, tu tren xuong duoi
console.log(1)
console.log(2)

//async: bat dong bo, 
setTimeout(function(){
    console.log(1);
},100);
console.log(2);

//Noi dau
//Callback hell: Function goi callback, callback goi tiep callback hay function long function, cac cv phu thuoc nhau
//Pyramid of doom
function sleep(ms){
    return new Promise((ok, err)=>{
        if(ms>1000)
            err("Khong duoc ngu qua 1s");
        else
            ok(`Da ngu ${ms/1000}s`);
    });
}

sleep(1000)
    .then(data=>{
        console.log(1,data);
        return sleep(500);
    })
    .then(data=>{
        console.log(2,data);
        return sleep(2000);
    })
    .then(data=>{
        console.log(3,data);
    })
    .catch(err=>{
        console.error(err);
    })
    .finally(()=>{
        console.log('Finally');
    });
 
