//Scope
function cha(){
    let a=0
 
    function con(){
       return ++a;
    }

    return con;
 }

 
 const func1=cha();

  
 //Khong the truy cap con() tu ben ngoai
 //console.log(con()) 
 console.log(cha()()) 

 //Nhung co the truy cap thong qua cha()
 console.log(func1());
 console.log(func1());

