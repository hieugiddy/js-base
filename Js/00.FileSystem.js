const fs=require('fs');

fs.writeFileSync("hello.txt","Hieugiddy");

var noidung=fs.readFileSync(__dirname + "/hello.txt");
console.log(noidung);//Tra ve kieu du lieu Buffer

console.log(noidung.toString());