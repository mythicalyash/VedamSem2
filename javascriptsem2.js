// 1 function dec

// function greet(a=100){
//     for(let i = 0;i<arguments.length;i++){
//         console.log("argument",arguments[i]);
//     }   
//     console.log("parameter:",arguments);
// }
// greet();
// greet(1);
// greet(0,1,2,3,"ABc");





// const price = 500;
// let total = 0;

// let bill = (quantity)=>{
//     if(quantity>=10){
//         total = (quantity*price)-(50*quantity);
//         let gst =  (18*total)/100; 
//         total = total+gst;
//     }else{
//          total = (quantity*price);
//         let gst = (18*total)/100;       
//         total = total+gst;
//     }
//     return total;
// }
// console.log("total:" , bill(10));


// let x = 10;
// function outer(){
//   let x = 20;
//    function inner(){
//     console.log(x);
//    }
// }

// inner();


// print 1-5 using setTimeout and setInterval only

// let print = ()=>{
//    let count = 1;
//    const interval = setInterval((c) => {
//      console.log(count);
//      count++;
//      if (count > 5) {
//        clearInterval(interval);
//      }
//    }, 2000);
// }
// print();

const cart = ["apple","mango"];

const promise = createOrder(cart);

console.log(promise);


promise.then(function(OrderId){
  console.log(OrderId);
}).catch(function(err){
  console.log(err.message);
});


function createOrder(cart){
  function validateCart(){
    return false;
  }
  const pr = new Promise(function(resolve,reject){
    if(!validateCart()){
      setTimeout(function(){
        const err = new Error("Cart is empty lol");
        reject(err);
      },2000); 
    } else {
      const OrderId = '110823';
      setTimeout(function(){
        resolve(OrderId);
      },5000);
    }
  });
  return pr;
}

