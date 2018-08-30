// Below console.log returns a reference error as tmp is not defined in the scope of the console.log.
// let has block scoping

function func() {
  if (true) {
    let tmp = 123;
  }
  console.log(tmp);
}

// Below console.log returns 123
// var has function level scoping

function func() {
  if (true) {
    var tmp = 123
  }
  console.log(tmp);
}

// Shadow variables (is possible to thanks to block scoping)

function func() {
  let foo = 5;
  if (true) {
    let foo = 10;
    console.log(foo);
  }
  console.log(foo);
}
