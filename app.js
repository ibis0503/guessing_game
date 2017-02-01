// var userName = prompt ('Give me the name');
// console.log ('line 2: username', userName);

var arr = ['Scott', 25, 'banana', true, undefined, 'boom'];
//
// for (var i = 0; i < arr.length ; i++) {
//   console.log (arr[i]); //arr at i or arr sub i
// }
//
// for (var j = arr.length -1; j >= 0; j--) {
//   //log each element in the arr from the last to [0]
//   console.log (arr[j]); //arr at i or arr sub i
// }

// Lets talk about counters
var counter = 0;

  for (var k = 0; k < arr.length; k++) {
    counter = counter + 2;
    // counter = 0 + 2
    // counter = 2
    // 2
  }
console.log('counter', counter);

  for (var k = 0; k < arr.length; k++) {
    counter += 2;
    // counter = counter + 1;
    // counter += 1;
    // counter++; .. postfix invremental
    // counter; // prefix incremental
  }
console.log('counter', counter);

// While Loops!!
while (true) {
  // do some stuff
}

do {
  // run at least once!
  // do some stuff
} while(true)
