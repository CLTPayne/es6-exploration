// Callbacks
// A callback is a function that's executed after another function has finished executing
// Any function that's passed as an argument is called a callback
// They are a way to make sure that certain code doesn't execute before another process has finished (e.g an api or server call)

const doingHomework = (subject, callback) => {
  console.log(`Studing ${subject} at home!`);
  callback();
};

doingHomework('async JavaScript', () => {
  console.log(`Can't wait to feel confident with the topic`);
});

// OR define the callback out side of the function expression

const goal = () => {
  console.log(`Hoping to improve lots`)
};

doingHomework('neo4j', goal);
