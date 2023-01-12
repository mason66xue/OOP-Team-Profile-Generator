class Employee {
    // buil the constructor function for employee
constructor(name, id, email){
    this.name=name;
    this.id=id;
    this.email=email;
}

// set the getName method
getName(){
    return this.name;
}

//set getId method
getId(){
    return this.id;
}
// set getEmail method
getEmail(){
    return this.email;
}
//set getRole method 
getRole(){
    return 'Employee';
}

}

module.exports = Employee;
