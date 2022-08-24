// Write your solution in this file!
const employee = {name: `Sam`, streetAddress: `11 Broadway`};

function updateEmployeeWithKeyAndValue(employee, key, value){
    
    const newEmployee = {...employee};
    newEmployee[key]= value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress, value){
    
    employee[streetAddress]= value;
    return employee;
   
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;  

}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}
