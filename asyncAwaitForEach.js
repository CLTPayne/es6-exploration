const waitFor = time => {
  return new Promise(result => setTimeout(result, time));
}

const dummyFunction = async () => {
  await [10, 20, 30].forEach(async item => {
    await waitFor(1);
    console.log(item)
  });
  console.log('Done')
}

dummyFunction()

console.log('Actually done!')

// Actually Done!
// Done
// 10
// 20
// 30
