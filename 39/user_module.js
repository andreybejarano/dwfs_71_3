class User {
    name = 'Andrey';
    lastname = 'Bejarano';
    email = 'andreybejarano@gmail.com';

    getFullname() {
        return `${this.name} ${this.lastname}`;
    }

    setName(name) {
        this.name = name;
    }

    setLastname(lastname) {
        this.lastname = lastname;
    }
}

module.exports = User;