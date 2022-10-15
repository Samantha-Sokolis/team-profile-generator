class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//Methods below that will return user input for each category
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
//Return basic Employee information
    getRole() {
        return "Employee"
    }
}

module.exports = {generateHtml};