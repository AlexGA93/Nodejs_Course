// process
/**
 * Provides information about the Node.js process that is running.
 */
// console.log(process);

// If We use arguments i nthe terminal order
console.log(process.argv);
// example:         node ./app.js 6 7
// transformed to:  [node, ./app.js,  6,  7] with indexes {0, 1, 2, 3}

// terminal order: node ./app.js 6 hello
console.log(process.argv[2]);

// how much memory is being used
console.log(process.memoryUsage());