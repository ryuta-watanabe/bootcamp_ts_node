console.log("top"); // 1

setTimeout(() => {
  console.log("timeout"); // 2
}, 0);

new Promise<void>((resolve) => {
  console.log("promise"); // 3

  setTimeout(() => {
    console.log("timeout-in-promise"); // 4
    resolve();
  });
}).then(() => {
  console.log("promise-then"); // 5
});

console.log("bottom"); // 6
