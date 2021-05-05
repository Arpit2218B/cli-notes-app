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
        const noteStore = new ConfigStore('NOTESAPP_NOTE');
        noteStore.delete(this.username);
    }

    changePassword(newPassword) {
        if(this.userStore.get(this.username) !== this.password)
            throw new Error('Wrong username/password');
        this.userStore.set(this.username, newPassword);
    }

    createNote(note) {
        if(this.userStore.get(this.username) !== this.password)
            throw new Error('Wrong username/password');
        const noteStore = new ConfigStore('NOTESAPP_NOTE');
        let oldNote = noteStore.get(this.username);
        let newNote = oldNote ? oldNote + '\n' + note : note;
        noteStore.set(this.username, newNote);
    }

    viewNote() {
        if(this.userStore.get(this.username) !== this.password)
            throw new Error('Wrong username/password');
        const noteStore = new ConfigStore('NOTESAPP_NOTE');
        let note = noteStore.get(this.username);
        return note ? note : 'No notes present'
    }
}

module.exports = User;