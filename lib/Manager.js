const Employee = require("./Employee");

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
