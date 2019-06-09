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

console.log(refactorGroupPeopleByProfession(input))