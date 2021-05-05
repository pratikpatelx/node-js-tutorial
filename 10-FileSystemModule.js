//FS module
//There are 2 types of FS modules
//1.ASynchronously(Non Blocking)
//2.Synchronously(Blocking)

//Synchronous;
const { readFileSync, writeFileSync } = require("fs");
console.log("start");

//read two files
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
// console.log(first, second);

//write to files
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting next task");

//Asynchronous
// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });
