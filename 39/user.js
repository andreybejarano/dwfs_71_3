const fs = require('fs');

const UserModule = require('./user_module');

const user = new UserModule();
const user2 = new UserModule();
user2.setName('Vera');
user2.setLastname('Orduna');

const fullname = user.getFullname();
const fullname2 = user2.getFullname();

console.log(fullname);
console.log(fullname2);

fs.writeFile('./user1.txt', fullname, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Archivo usuario 1 creado');
});

fs.writeFile('./user2.txt', fullname2, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Archivo usuario 2 creado');
});