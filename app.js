pgp = require('pg-promise')
client = pgp()
db = client(process.env.DATABASE_URL + '?ssl=true')

db.any('select * from users')
    .then(function(data) {
        console.log('success!')
        console.log(data)
    })
    .catch(function(error) {
        // error;
        console.log('fail')
        console.log(error)
    });
