const khoaHc=[
    {
        id:1,
        name:"Nodejs",
        coin:100
    },
    {
        id:1,
        name:"Reactjs",
        coin:0
    },
    {
        id:1,
        name:"React Native",
        coin:0
    },
    {
        id:1,
        name:"Python",
        coin:400
    },
    {
        id:1,
        name:"Go lang",
        coin:500
    }
];

//forEach
khoaHc.forEach(function(item,index){
    console.log(index, item);
});

//every
//Co phai tat ca khoa hc deu mien phi phai k? (Coin=0 la free)
let isFree=khoaHc.every(function(item,index){
    //ung dung trong web khoa hc: Ktra da hoc bai 1 chua, neu hoc bai 1 roi => moi cho hc bai 2
    return item.coin===0; //chi can co 1 item co coin!=0 la tra ve false
});
console.log(`isFree: ${isFree}`);

//some
//Ktra co khoa hc nao free k? (Coin=0 la free)
let isFree1=khoaHc.some(function(item,index){
    //Chi can co it nhat 1 item thoa dk, la tra ve true
    return item.coin===0;
});
console.log(`isFree: ${isFree1}`);

//find
let kh=khoaHc.find(function(item,index){
    //Chi can co it nhat 1 item thoa dk, la tra ve true
    return item.name==="Nodejs"; //tra ve undefine neu k tim thay
});
console.log(`Course: ${kh}`);

//filter
//filter ra nhung khoa hc free
let free=khoaHc.filter(function(item,index){
    //Chi can co it nhat 1 item thoa dk, la tra ve true
    return item.coin===0; //tra ve undefine neu k tim thay
});
console.log(`Course: ${free}`);

//map, tao ra 1 mang moi
function customKH(item,index, arrHienTai){
    console.log(arrHienTai);
    return {
        index: index,
        id:item.id,
        name:`Khoa hoc: ${item.name}`,
        coin:`Gia: ${item.coin}$`
    };
}
let customKhoahc=khoaHc.map(customKH);
console.log(customKhoahc);

//render View (MVC)
function convertHtml(item,index){
    return `<h2>${item.name}</h2>`;
}
let render=khoaHc.map(convertHtml);
console.log(render.join(''));


//reducer
let tong=khoaHc.reduce(function(total,itemValue,itemIndex,arrHienTai){
    return total+itemValue.coin;
},0); //reduce(hamReduce,bienKhoiTao);
//Neu k co gia tri khoi tao, thi tu dong lay obj dau tien
console.log(tong);

//Lam phang mang
var deptArr=[1,2,[3,4],5,6,[7,8,9]];
var flatArr=deptArr.reduce(function(arrPhang,item){
    return arrPhang.concat(item)
},[]);

console.log(flatArr);


//Lay cac khoa hc dua vao 1 mang moi
const dsKhoaHoc=[
    {
        name:"Frontend",
        ds:[
            {
                id:1,
                title: "Css, html"
            },
            {
                id:2,
                title: "React js"
            }
        ]
    },
    {
        name: "Backend",
        ds:[
            {
                id:1,
                title:"Java"
            },
            {
                id:2,
                title:"Nodejs"
            }
        ]
    }
];

var newToppic=dsKhoaHoc.reduce(function(dsKH,topic){
    return dsKH.concat(topic.ds);
},[]);

console.log(newToppic);