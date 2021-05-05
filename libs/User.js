const ConfigStore = require('configstore');

class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.userStore = new ConfigStore('NOTESAPP_USERS');
    }

    createUser() {
        if(this.userStore.get(this.username))
            throw new Error('User already exists')
        this.userStore.set(this.username, this.password);
    }

    deleteUser() {
        if(this.userStore.get(this.username) !== this.password)
            throw new Error('Wrong username/password');
        this.userStore.delete(this.username);
    }
}

module.exports = User;