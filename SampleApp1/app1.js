const fs = require('fs');
const os = require('os');

console.log('User info');
console.log(os.userInfo())
console.log(`logged in user is ${os.userInfo().username}`)

fs.appendFile('test.txt','hello world!\n',(err) => {
    if(err)
        console.log(err);
});