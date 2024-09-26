console.log("Step 1: In global scope");

// setTimeout(() => console.log("Step 2: In setTimeout"), 0);

new Promise((resolve) => {
  resolve(console.log("Step 3: In promise constructor"));
}).then(() => console.log("Step 4: In then"));

// macro
Promise;
    //micro = [console.log]

    ===
    (resolve) => "Step 3";
    ===
    process.nextTick
    ===
// Macro  
then;
===
(resolve) => "Step 4";
===
process.nextTick
===


setTimeout(() => console.log("Step 5: In setTimeout"));

function a (){}


a();

new Promise((resolve) => {
  resolve(console.log("Step 2.1: In promise constructor"));
}).then(() => {
  console.log("Step 3.1: In then");
  setTimeout(() => console.log('Step 4.1: In setTimeout (inside of "then")'));
});

//















// setTimeout(() => console.log("Step 5: In setTimeout"));

new Promise((resolve) => {
  resolve(console.log("Step 2.1: In promise constructor"));
}).then(() => {
  console.log("Step 3.1: In then");
  setTimeout(() => console.log('Step 4.1: In setTimeout (inside of "then")'));
});

// 1. All sync operations
// 2. All microtasks
// 3. All macrotasks
