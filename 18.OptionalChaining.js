const json={
    name:"hhmm",
    cat:{
        name:"Meo",
        cat1:{
            name:"Meo 1",
            cat2:{
                name:"Meo 2",
                cat3:{
                    name: "Meo 3"
                }
            }
        }
    }
}

if(
    //json.cat &&
    //json.cat.cat1 &&
    //json.cat.cat1.cat2 &&
    //json.cat.cat1.cat2.cat3
    json?.cat?.cat1?.cat2?.cat3
){
    console.log(json.cat.cat1.cat2.cat3.name);
}

//obj['cat']?.['cat2']
//obj.arr[0]?.[1]
//obj.getName?.(123)  : check function co ton tai hay k