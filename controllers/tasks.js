const Task = require('../models/tasks');
const { asyncWrapper } = require('../middleware/async');

const getAllTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
    res.status(500).json({msg: err});
})

const getTask = asyncWrapper (async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID});
    if(!task)
        return res.status(404).json({msg:  `No task of ID ${taskID}`});
    res.status(200).json(task);
})

const createTask = asyncWrapper (async (req, res) => {
    const task = await new Task(req.body);
    await task.save();
    res.status(201).json({task});
}
)
const deleteTask = asyncWrapper (async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if(!task)
        return res.status(404).json({msg: `No task of ID ${taskID}`})
    res.status(200).json({task});
})

const modifyTask = asyncWrapper (async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true,
    });
    if(!task){
        return res.status(404).json({msg: `No task of ID ${taskID}`})
    }
    res.status(200).json({ task });
})



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    modifyTask
}