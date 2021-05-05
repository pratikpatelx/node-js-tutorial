//OS module for interacting with OS and Server
//built in module so we don't have to install anything before hand
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
