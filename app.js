//------------ axios req ---------------
// const axios = require('axios');

// const url='http://jsonplaceholder.typicode.com/todos';
// axios.get(url)
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err))

//------------------- file path & stat -------------------
// const path = require('path');
// const fs = require('fs');

// console.log(fs.readFileSync("node.txt", "utf8"));
// fs.appendFile('node.txt',"Hello World", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(fs.readFileSync("node.txt", "utf8"));
//   }
// });
// fs.stat('node.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   stats.isFile(); // true
//   stats.isDirectory(); // false
//   stats.isSymbolicLink(); // false
//   console.log(stats.size); // 1024000 //= 1MB
// });

// const notes = 'node.txt';
// console.log(path.extname(notes));

//------------------- Buffer ----------------------

// const buf = Buffer.alloc(4);
// buf.write('Aksahy');
// console.log(buf);
// const buf = Buffer.from('Akshay');
//buf[1] = 111; // o in UTF-8
// console.log(buf[0], buf[1], buf[2], buf[3], buf[4], buf[5], );

// const buf = Buffer.from("ABCD");
// const bufcopy = Buffer.alloc(4); // allocate 4 bytes
// bufcopy.set(buf);
// console.log(buf.toString(), bufcopy.toString());

// -------------------- object ------------------------------
const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23,
      },
    }
  }
}
console.log(obj); //print till only 2 levels
console.log(JSON.stringify(obj, null, 2));