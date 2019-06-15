const data = {
    "Anna Jones": ["A Modern Cook's Year", "A Modern Way To Cook"],
    "Yotam Ottolenghi": ["Simple", "Jerusalem"],
    "Magnus Nilsson": ["The Nordic Baking Book"]
}

// Old school but more performant?
for (let i = 0; i < Object.keys(data).length; i++) {
    const [author, books] = Object.entries(data)[i];
    console.log(`${author} has written: ${books.join(', ')}`);
}

// The data must be an array-like structure - String, Array, Set...
for (const [author, books] of Object.entries(data)) {
    console.log(`${author} has written: ${books.join(', ')}`);
}

// Warning you cant await inside a forEach
Object.entries(data).forEach(([author, books]) => {
    console.log(`${author} has written: ${books.join(', ')}`);
})

// Returns an array - handy if you have promises to execute
Object.entries(data).map(([author, books]) => {
    console.log(`${author} has written: ${books.join(', ')}`);
})


// throws a TypeError as an Object (aka data) is not iterable by default
for (const [author, books] of data) { 
    console.log(`${author} has written: ${books}`)
}