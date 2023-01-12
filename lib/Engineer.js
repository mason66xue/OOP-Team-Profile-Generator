const Employee = require("./Employee");


// build the class of Engineer under constructor function 
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github=github;
    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };

    getEmail(){
        this.email;
    };

    getGithub(){
        return this.github;
    };

    getRole(){
        return 'Engineer';
    };

    

}

module.exports = Engineer;
