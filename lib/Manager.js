const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber,email){
        super(name, id,officeNumber,email);
        // this.officeNumber=officeNumber;
    }

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    
    

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }


}

module.exports = Manager;
