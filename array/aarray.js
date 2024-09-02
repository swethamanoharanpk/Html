/*let num = [1,2,3,4,5];
let nums = num.forEach((number)=>{
    console.log(number+2);
})
console.log(nums);*/
let isActive = false;
let user = {
    name: "tom",
    age: 22,
    country: "india"
}
let myPromise = new Promise((resolve ,reject)=>{
    if(isActive){
        resolve(user);
    }
    else{
        reject("Data not found");
    }

});
myPromise.then((res)=>console.log(res)).catch((mes)=>console.log(mes))

