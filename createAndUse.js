//createOrder
//proccedToPayment
//showOrderSummary
//updateWallet


const cart = ["Shirt","Pant","Kurat","Pajama"]
const walletBalance = 50000;


const promise = createOrder(cart);

console.log(promise);

promise
.then(function (orderId){
    console.log(orderId)
    return orderId
    
})
.then(function(orderId){
    return proccedToPayment(orderId)
})
.then(function(data){
    console.log(data.message);
    console.log("RS. "+data.orderSummary);
    return data.orderSummary
})
.then(function(orderSummary){
    return showOrderSummary(orderSummary);
})
.then(function(orderSummary){
    
    console.log(orderSummary.spent)
    console.log(orderSummary.message)
    return orderSummary.spent
})
.then(function(orderSummary){
    return updateWallet(orderSummary,walletBalance)
})
.then(function(updatedBalance){
    console.log(updatedBalance);
})
.catch(function(err){
    console.log(err)
})



//promise Creation


 function cartValidate(cart){
    return true;
}


function orderIdValidate(orderID){
    return true;
}

function createOrder(cart){
    const pr = new Promise((resolve,reject) => {

        const validateCart = cartValidate(cart);

        if(!validateCart){
            reject("Cart is not valid!")
        }


        const orderId = Math.floor(Math.random()*1000000 + 1);
        if (orderId) {
            setTimeout(function(){
                resolve(orderId);
            },3000);
        }
        
    });

    return pr;
}

function proccedToPayment(orderId){
    const pr = new Promise((resolve,reject)=>{
        //validate orderId
        const validateOrderId = orderIdValidate();

        if(!validateOrderId){
            reject("order id not valid");
        }
        //proccced to payment
        //return total ammount

        if(orderId){
            resolve({
                message:"Payment Successfull",
                orderSummary: 12789
            })
        }

    })

    return pr;
}

function showOrderSummary(orderSummary){
    const pr = new Promise((resolve,reject)=>{
        if(orderSummary){
            resolve({
                message: "Total Ammount of the order is " + orderSummary,
                spent :  orderSummary
            });
        }
        reject("Something went wrong in showing Order Summary.")
    });
    return pr;
}


function updateWallet(orderSummary,walletBalance){


    const pr = new Promise((resolve,reject)=>{
        if(orderSummary>0){
            const updatedBalance = updateBalance(walletBalance,orderSummary);
            if(updatedBalance>-1){
                resolve("Current Wallet Balance is" + updatedBalance);
            }
            else{
                reject("Don't have much resources")
            }
        }
    });
    return pr;


}

function updateBalance(walletBalance,orderAmmount){
    if(walletBalance>=orderAmmount){
        return walletBalance-orderAmmount
    }else{
        return -1;
    }
}

