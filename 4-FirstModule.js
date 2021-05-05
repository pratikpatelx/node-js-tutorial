//CommonJS, every file is module (by default)
//Modules - Encapuslated code (only share minimum)

//local variable - only shared locally
const secret = "SUPER SECRET";
// global variables - share with the application
const john = "john";
const peter = "peter";

//share objects
module.exports = { john, peter };
