const input = [
    {
        name: "Billy Bob",
        profession: "Actor",
        age: 59
    },
    {
        name: "William Who",
        profession: "Actor",
        age: 16
    },
    {
        name: "Sarah Sue",
        profession: "Software Engineer",
        age: 29
    },
    {
        name: "Jane Joe",
        profession: "Actor",
        age: 34
    },
    {
        name: "Indie I",
        profession: "Software Engineer",
        age: 31
    },
]

const groupPeopleByProfession = people => {
	const grouped = {};
	for (const person of people) {
		if (!grouped[person.profession]) {
			grouped[person.profession] = [
				person.name
			];
		} else {
			grouped[person.profession].push(
				person.name
			);
		}
	}
    return grouped;
}

// console.log(groupPeopleByProfession(input))

// { Actor: [ 'Billy Bob', 'Jane Joe', 'William Who' ],
//   'Software Engineer': [ 'Sarah Sue', 'Indie I' ] }

const refactorGroupPeopleByProfession = people => {
    return people.reduce((grouped, person) => {
        if (!grouped[person.profession]) {
            grouped[person.profession] = [
                person.name
            ]
        } else {
            grouped[person.profession].push(
                person.name
            )
        }
        return grouped;
    }, {})
}
// console.log(refactorGroupPeopleByProfession(input))

// const reducePersonByProfession = input => (
//     input
//        .reduce((acc, { name: n, profession: p }) => ({ ...acc, [p]: [...acc[p], n] })
//        , input.reduce((acc, {profession}) => ({ ...acc, [profession]:[] }), {}))
//   );
// console.log(reducePersonByProfession(input))

// the inital value for the first reduce is the output of the second reduce
// const groupedPersonByProfession = input => (
//     input
//         .reduce((acc, { name: n, profession: p }) => {
//             return { ...acc, [p]: [...acc[p], n] }
//         }, 
//             input.reduce((acc, {profession}) => {
//                 return { ...acc, [profession]: [] }
//             }, {}))
// )

const groupedPersonByProfession = people => {
    // second param of reduce is a destructuring of the profession out of the current value
    const intialValue = people.reduce((acc, { profession }) => {
        return { ...acc, [profession]: [] }
    }, {})
    // console.log(intialValue) // { Actor: [], 'Software Engineer': [] }
    // second param of reduce is a destructuring of the name and profession out of the current value
    // spread operator in object literals over rides the prevoius value for a property if the same property is present     
    // acc starts of as the initalValue you pass it, then single return value of each iteration through the people array                                                                                                                                                                                                                                                                                                                                                           
    return people.reduce((acc, { name, profession }) => {
        return { ...acc, [profession]:  [...acc[profession], name]}
    }, intialValue)
} 

console.log(groupedPersonByProfession(input))