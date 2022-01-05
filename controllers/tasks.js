const getAllTasks = (req, res) => {
    res.send('Items');
}

const getTask = (req, res) => {
    res.send('Task number');
}

const createTask = (req, res) => {
    res.send('Task created');
    console.log(req.headers);
}

const deleteTask = (req, res) => {
    res.send('Task Deleted');
}

const modifyTask = (req, res) => {
    res.send(req.params);
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    modifyTask
}