/****************************************************
 * PROMISES PRACTICE WORKSHEET
 * --------------------------------------------------
 * Online Food Delivery App
 *
 * You are building an online food delivery app.
 * Every operation (server call) takes time.
 * JavaScript does NOT wait, so we use PROMISES.
 *
 * DO NOT use async / await.
 * Use only Promise, then, catch.
 ****************************************************/

/* ==================================================
   TASK 1
   ==================================================

   
   When the user opens the app, we must check
   if the restaurant is open.

   This check:
   - Takes time (API call)
   - Cannot block the app
   - Returns a PROMISE for future result
*/

let isOpen = true;

/*
 TODO:
 1. Create a function checkRestaurantStatus()
 2. Return a Promise
 3. After 1 second:
    - resolve "Restaurant is Open" if isOpen === true
    - reject "Restaurant is Closed" otherwise
*/

function checkRestaurantStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOpen) {
        resolve("Restaurant is Open");
      } else {
        reject("Restaurant is Closed");
      }
    }, 1000);
  });
}

/* ==================================================
   TASK 2
   ==================================================

   
   If the restaurant is open:
   1. Fetch Menu
   2. Place Order
   3. Assign Delivery Partner

   Each step depends on the previous step.
*/

/*
 TODO:
 getMenu()
 - return Promise
 - resolve ["Burger", "Pizza"]
*/

function getMenu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Burger", "Pizza"]);
    }, 1000);
  });
}

/*
 TODO:
 placeOrder(menu)
 - return Promise
 - resolve "Order Placed"
*/
function placeOrder(menu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order Placed");
    }, 1000);
  });
}

/*
 TODO:
 assignDelivery(orderStatus)
 - return Promise
 - resolve "Delivery Partner Assigned"
*/
function assignDelivery(orderStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delivery Partner Assigned");
    }, 3000);
  });
}

/* ==================================================
   TASK 3
   ==================================================

   
   Run the complete flow in correct order.

   EXPECTED FLOW:
   Restaurant is Open
   Menu fetched
   Order Placed
   Delivery Partner Assigned
*/

/*
 TODO:
 1. Chain all functions
 2. Print output at each step
 3. Handle errors at the end
*/

// WRITE YOUR CODE HERE
checkRestaurantStatus()
  .then((status) => {
    console.log(status);
    return getMenu();
  })
  .then((menu) => {
    console.log("Menu fetched:", menu);
    return placeOrder(menu);
  })
  .then((orderStatus) => {
    console.log(orderStatus);
    return assignDelivery(orderStatus);
  })
  .then((deliveryStatus) => {
    console.log(deliveryStatus);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/* ==================================================
   TASK 4
   ================================================== */

//    Payment may fail due to insufficient balance.
// */

/*
 TODO:
 makePayment(amount)
 - return Promise
 - resolve "Payment Successful" if amount <= 500
 - reject "Payment Failed" if amount > 500
*/

function makePayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= 500) {
        resolve("Payment Successful");
      } else {
        reject("Payment Failed");
      }
    }, 4000);
  });
}

/* ==================================================
   TASK 5
   ==================================================

   
   If payment fails, delivery should NOT be assigned.
*/


// checkRestaurantStatus()
//   .then(() => getMenu())
//   .then(menu => placeOrder(menu))
//   .then(() => makePayment(600))
//   .then(payment => assignDelivery(payment))
//   .then(result => console.log(result))
//   .catch(error => console.error("Error:", error));

/* ==================================================
   TASK 6
   ==================================================

   
   If payment fails, user selects
   "Cash on Delivery" and continues.
*/


/*
 TODO:
 1. Catch payment error
 2. Recover with "Cash on Delivery Selected"
 3. Continue delivery assignment
*/

// WRITE YOUR CODE HERE
checkRestaurantStatus()
  .then(() => getMenu())
  .then((menu) => placeOrder(menu))
  .then(() => makePayment(300))
  .then((payment) => assignDelivery(payment))
  .then((result) => console.log(result))
  .catch((error) => console.log("Error:", error));

/* ==================================================
   REFLECTION QUESTIONS (WRITE ANSWERS)
   ==================================================

 1. Why must every .then() return something?
     Every .then() must return something to maintain the chain of promises. 
     If a .then() doesn't return a promise, it implicitly returns undefined, 
     which can break the chain and cause unexpected behavior.
 2. What happens if you forget to return a Promise?
     If you forget to return a Promise, the next .then() in the chain 
     will receive undefined instead of the expected resolved value, 
     potentially causing errors or incorrect execution flow.

 3. Why does .catch() handle errors from any step?
     .catch() handles errors from any step in the promise chain 
     because it catches any rejection that occurs in any previous .then() 
     or even in the initial promise itself.

 4. How does this approach avoid callback hell?
     This approach avoids callback hell by using promises and 
     chaining them together with .then(), making the code more readable and
      easier to manage compared to nested callbacks.

 =================================================== */
