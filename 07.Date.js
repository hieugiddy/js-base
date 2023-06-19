//khac nhau giua new Date() va Date()
var date= Date();
console.log(typeof date);

date= new Date();
console.log(typeof date);

//cac pthuc cua obj Date
console.log(date.getFullYear());
console.log(date.getMonth()+1); //+1 vi Month co gia tri tu 0-11
console.log(date.getDate());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
