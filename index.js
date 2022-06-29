// Write your solution in this file!

// define employee
const employee = {
    name : "Bob",
    address: "11 Broadway",
};

// reset or destructive situations
beforeEach(function () {
    for(const key in employee){
        delete employee[key];
    }
    return employee.name = 'Sam';
});

// create function that will return an employee with the original key 
// value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;

    return newEmployee;
}

// destructively update the employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

// non destructive deletion of employee
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;

}

// destructive deletion from employer
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
}

