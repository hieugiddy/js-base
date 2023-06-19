const arr=['hieu','hoa',true, false,'hieu'];
const arr1=['abc'];

//duyet mang bang for of
for(let i of arr){
    console.log(i);
}

//toString
console.log(arr.toString());

//Noi mang
console.log(arr.concat(arr1));

//Chuyen mang thanh chuoi
console.log(arr.join(', '))

//tim ptu
console.log(arr1.includes('abc'));

//vi tri ptu
console.log(arr.indexOf('hoa'));

//isArray
console.log(Array.isArray(arr));

//get key of array
const iterator = arr.keys();

for (let key of iterator) {
  console.log(key);
}

//xac dinh vi tri cuoi cung cua ptu
console.log(arr.lastIndexOf('hieu'));

//xoa ptu cuoi cung, va lay gia tri vua xoa
console.log(arr.pop()); // Expected output: "hieu"

console.log(arr); //mat ptu hieu

console.log(arr.shift()); // xoa ptu dau tien cua mang


//them ptu vao cuoi
const count = arr.push('cows');
console.log(count); // do dai moi cua mang
console.log(arr);

console.log(arr.unshift('abc','123')); // them ptu vao dau mang, tra ve do dai moi cua mang


//sao chep 1 mang, cat mang
const a= arr.slice(); //sao cheo toan bo mang
a=arr.slice(1); //sao chep mang tu vi tri index 1 -> het
a=arr.slice(0,2); //cat mang tu index 0 -> 2
console.log(a);

//Xoa ptu
const xoa= arr.splice(0,1); //Start index: 0, sl ptu muon xoa: 1
console.log(xoa);


//----COI TIEP PHAN 2-----