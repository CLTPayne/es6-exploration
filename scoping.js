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
