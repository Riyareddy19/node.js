// //Common JS
// const simple2 = require('./moduleSecond.mjs');
// simple2();

// //Es 6
// import {simple} from "./moduleSecond.mjs"
// simple();

// import {simple2 as simple} from "./moduleSecond.mjs"
// simple();

// import simple23 from "./moduleSecond.mjs"
// simple23();

import * as a2 from "./moduleSecond.mjs"
console.log(a2);
console.log(a2.simple4());
