const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel');



const getTasks =  asyncHandler(async (req,res) => {
    const tasks = await Task.find({user: req.user.id});
    res.status(200).json(tasks);
})

const setTask = asyncHandler(async (req,res) => {
    if(!req.body || !req.body.text){
		res.status(400);
        throw new Error('Te lutem vendos nje tekst');
	}
    const task = await Task.create({text: req.body. text , user: req.user.id })
    res.status(200).json({message : 'U krijua Tasku'});
    
})

const updateTask =  asyncHandler(async (req,res) => {
    const task = await Task.findByld(req.params.id);

    if (!task) {
    res.status(400);
    throw new Error('Task nuk gjendet');

    }
    
   
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res. status(200).json(updatedTask);
    //res.status(200).json({message : `Task: ${req.params.id} updated.`});
});

const deleteTask =  asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
    res.status(400);
    throw new Error('Task nuk gjendet');

    }

    const user =  await User.findById(req.user.id)
    if (!user){
        res.status(401);
        throw new Error('Perdoruesi nuk ekziston');
    }

    if (task.user.toString() != user.id){
        res.status(401);
        throw new Error('Perdoruesi nuk ka akses per te fshire')
    }

    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
    //res.status(200).json({message : `Task: ${req.params.id} deleted.`})
});


module.exports = {getTasks , setTask , updateTask , deleteTask}





