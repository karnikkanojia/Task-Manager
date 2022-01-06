const express = require('express');
const app = express()
const port = 3000;
const tasks = require('./routes/tasks');
const notfound = require('./middleware/notfound');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        connectDB(process.env.MONGOURL)
            .then((db) => {
                process.stdout.write("DB Connected\n");
                process.on('SIGINT', () => {
                    db.connection.close(() => {
                        process.stdout.write("Mongoose Connection Closing");
                        process.exit(0);
                    });
                })
            })
            .catch((err) => console.log(`DB not connected ${err}`));
        app.listen(port, () => console.log('Server started'));
        
    } catch (error) {
        console.log(error);
    }
}

start();