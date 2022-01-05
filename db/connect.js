const mongoose = require('mongoose');

connectionString =
  "mongodb+srv://karnikkanojia:1406@taskmanager.ljbks.mongodb.net/taskmanager?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => process.stdout.write('DB connected'))
    .catch((err) => process.stderr.write('Not connected DB\n'));
}

module.exports = { connectDB };
