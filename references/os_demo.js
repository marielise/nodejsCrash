const os = require("os");

//os
console.log(os.platform()); //=>darwin (mac os)

// System arch
console.log(os.arch()); //x64

//Cpus
console.log(os.cpus());

// memmory
console.log(`Free mem ${os.freemem()} over ${os.totalmem()}`);

console.log(os.homedir());

console.log(os.hostname());
