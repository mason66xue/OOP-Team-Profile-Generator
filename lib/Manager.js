const Employee = require("./Employee");

//build manager under contructor function 
class Manager extends Employee {
    constructor(name, id, email,officeNumber){
        super(name, id,email);
        this.officeNumber=officeNumber;
    }

    getName(){
        return this.name;
    };

    getOfficeNumber(){
        return this.officeNumber;
    };

    
    

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }


}

module.exports = Manager;
