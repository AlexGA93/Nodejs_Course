const os = require('os');

console.log(os.type()); // Windows_NT

// Returns the string path of the current user's home directory.
console.log(os.homedir());

// Returns the system uptime in number of seconds.
console.log(os.uptime());

// Returns information about the currently effective user
console.log(os.userInfo());

