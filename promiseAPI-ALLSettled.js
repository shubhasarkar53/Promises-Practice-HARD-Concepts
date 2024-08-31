// 1.Promise.allSettled()
// Result? --- Give us result irespective of any error or success as an array of result objects


//IMPORTANT!!!
// if every promise gives error still it will give result not show any 
// "AGREGATE ERROR"
// res:
// [
//     {
//         "status": "rejected",
//         "reason": "p1 rejected"
//     },
//     {
//         "status": "rejected",
//         "reason": "p2 rejected"
//     },
//     {
//         "status": "rejected",
//         "reason": "p3 rejected"
//     }
// ]


// lets see

const p1 = new Promise((resolve,reject)=>{
    // setTimeout(function(){
    //     resolve("p1 resolved")
    // },3000)
    setTimeout(function(){
        reject("p1 rejected")
    },3000)
})
const p2 = new Promise((resolve,reject)=>{
    // setTimeout(function(){
    //     resolve("p2 resolved")
    // },1000)
    setTimeout(function(){
        reject("p2 rejected")
    },1000)
})
const p3 = new Promise((resolve,reject)=>{
    // setTimeout(function(){
    //     resolve("p3 resolved")
    // },2000)


    // If it rejeted then the error will be also printed in the result array .like this
    // [
    //     {
    //         "status": "fulfilled",
    //         "value": "p1 resolved"
    //     },
    //     {
    //         "status": "fulfilled",
    //         "value": "p2 resolved"
    //     },
    //     {
    //         "status": "rejected",
    //         "reason": "p3 rejected"
    //     }
    // ]
    
    setTimeout(function(){          
        reject("p3 rejected")
    },2000)
})

const res = Promise.allSettled([p1,p2,p3]).then(function(data){
    console.log(data);
}).catch((err)=>{
    console.error(err)
    console.error
});


console.log(res);

