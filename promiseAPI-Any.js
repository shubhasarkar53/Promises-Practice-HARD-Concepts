// 1.Promise.any()
// Result? --- Give the first settled SUCCESS 🍏✅ Promise Result 
// "THE SUCCESS SEEKER API"

//IMPORTANT!!!
// if every promise gives error it will show
// "AGREGATE ERROR"

// 🛑🙌💚
//ONly this API shows AggregateError: 🛑 All promises were rejected
// 🛑🙌💚


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

    setTimeout(function(){          
        reject("p3 rejected")
    },2000)
})

const res = Promise.any([p1,p2,p3]).then(function(data){
    console.log(data);
}).catch((err)=>{
    console.error(err)
    console.error
});


console.log(res);

