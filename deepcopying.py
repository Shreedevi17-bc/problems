//deep coping and shallow coping
let user={
    name: "shreedevi",
    age: 22,
    address:{city:"bangalore",state:"karnataka"}

}
function processObjectFunc({...obj})
{
    obj.address.state="karnat";
    return obj;
}
console.log(user);
console.log(processObjectFunc(user));

let user1={
    name:"shreedevi",
    age:22,
    address:{city:"banglore",state:"karnataka"}
}
function deepcopyuser1(obj){
    const deepcopy=JSON.parse(JSON.stringify(obj));
    deepcopy.address.state="Karnat";
    return deepcopy;

}
console.log(user1);
console.log(deepcopyuser1(user1));
