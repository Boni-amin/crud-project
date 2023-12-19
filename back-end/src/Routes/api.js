const express = require('express');
const router = express.Router();

const Tas = require('../controller/tasksControllers');





//to create Data 
router.post('/create-task', Tas.createTask);
router.get("/delete-task/:id",Tas.deleteTask);
router.post("/update-task/:id",Tas.updateTask);
router.get("/list-task",Tas.listTask);
router.get("/task-by-id/:id",Tas.taskByID);



module.exports= router;