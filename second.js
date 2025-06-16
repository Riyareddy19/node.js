//module wrapper function
// (function (exports, require, module, __filename, __dirname){

//create an object
riya = {
  firstName: "Riya",
  lastName: "Reddy Kasireddy",
  language: "node"
}
console.log(exports, require, module, __filename, __dirname);
module.exports = riya;

// })