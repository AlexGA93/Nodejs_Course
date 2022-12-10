function salute(name) {
  return `Hello ${name}`;
}

function HelloWorld(){
  return 'Hello World!';
}


// export this function
// module.exports.salute_module = salute;

// export multiple funcions
module.exports = {
  salute_fucntion: salute,
  hello_world_function: HelloWorld
};