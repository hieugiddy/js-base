//Nối 2 mảng, bằng kỹ thuật rải phần tử
const arr1=['a',1,2]
const arr2=[3,2,1]
const arr=[...arr1,...arr2]

console.log(arr);

//Nối obj, ứng dụng trong việc lấy data api, nối json với nhau
var obj1={
    name:"hieu"
}
var obj2={
    age:23
}

var obj={
    ...obj1,
    ...obj2
}

console.log(obj)

//Spread Override
var defaultApi={
    api: "abc.com",
    version: 1.0,
    other:'other'
}

var customApi={
    ...defaultApi,
    api: 'hieu.com'
}

console.log(customApi);