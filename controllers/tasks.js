const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }
    catch(err) {
        res.status(500).json({msg: err});
    }
}

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        if(!task)
            return req.status(404).json({msg:  `No task of ID ${taskID}`});
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({msg: err});
    }
}

const createTask = async (req, res) => {
    try{
        const task = await new Task(req.body);
        task.save();
        res.status(201).json({task});
    }
    catch(err) {
        res.status(500).json({msg: err});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task)
            return res.status(404).json({msg: `No task of ID ${taskID}`})
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({msg: err});
    }
}

const modifyTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        });
        if(!task)
            return res.status(404).json({msg: `No task of ID ${taskID}`})
    } catch (err) {
        res.send(500).json({msg: err});
    }
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    modifyTask
}