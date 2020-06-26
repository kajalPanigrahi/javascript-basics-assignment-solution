let convert = (employees, key) => {

	if(!Array.isArray(employees)) {
		return null;
	}

    employees = [
        { id: 1, name: 'Ankit', role: 'Developer'},
        { id: 2, name: 'Pankhuri', role: 'Lead'},
        { id: 3, name: 'Anubha', role: 'QA'}
    ];

    let roleEmployees = employees.reduce((accumulator,employee) => {
    key = employee.role;

        if(!accumulator[key]) {
            accumulator[key] = [];
            accumulator[key] = employee;
        }
        return accumulator;
    },{});

    return roleEmployees;
};

module.exports = convert;