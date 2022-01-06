const express = require('express');
const app = express()
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGOURL);
        app.listen(port, () => console.log('Server started'));
    } catch (error) {
        console.log(error);
    }
}

start();