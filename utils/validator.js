const validator = {
    isRequired : (data) => {
        if(!data || data.length == 0)
            return 'This is a required field';
        return true;
    },
    cofirmPassword : (pwd, repwd) => {
        if(pwd !== repwd)
            throw new Error('Password do not match')
        return true; 
    }
}

module.exports = validator;