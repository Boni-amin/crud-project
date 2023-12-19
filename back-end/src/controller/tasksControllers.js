const TaskModel = require('../Model/tasksModel')

// Create 
exports.createTask = async (req, res) => {
    let reqBody = req.body;
    try {
      const result = await TaskModel.create(reqBody);
        
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(500).json({ message: "filed to create student Data" });
      }
    } catch (er) {
      res.status(500).json({ message: er.message });
    }
  };



  // Delete
exports.deleteTask=async(req, res)=> {
  let id=req.params.id;
  let query={_id:id};
  try{
      let result=await TaskModel.deleteOne(query);
      res.status(200).json({status:"success",data:result})
  }
  catch (e) {
      res.status(500).json({status:"fail",data:e})
  }
}




// Update
exports.updateTask=async(req, res)=> {
  let id=req.params.id;
  let reqBody=req.body;
  let query={_id:id};
  try{
      let result=await TaskModel.updateOne(query,reqBody);
      res.status(200).json({status:"success",data:result})
  }
  catch (e) {
    res.status(500).json({ message: er.message });
  }
}


// Read
exports.listTask=async(req, res)=> {
  try{
      let result=await TaskModel.find();
      res.status(200).json({status:"success",data:result})
  }
  catch (e) {
    res.status(500).json({ message: er.message });
  }
}


exports.taskByID=async(req, res)=> {
  try{
      let id=req.params.id;
      let query={_id:id};
      let result=await TaskModel.find(query);
      res.status(200).json({status:"success",data:result})
  }
  catch (e) {
      res.status(200).json({status:"fail",data:e})
  }
}




