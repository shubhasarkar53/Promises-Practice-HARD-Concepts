// 1.Promise.all()
// Result? --- All success or nothing , throw error

// lets see

const p1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("p1 resolved")
    },3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("p2 resolved")
    },1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("p3 resolved")
    },2000)


    // If it rejeted the whole result will be an error
    // and the code stops here

    
    // setTimeout(function(){          
    //     reject("p3 rejected")
    // },2000)
})

const res = Promise.all([p1,p2,p3]).then(function(data){
    console.log(data);
}).catch((err)=>{
    console.error(err)
    console.error
});


console.log(res);

