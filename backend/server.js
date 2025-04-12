const express=require('express');
const dotenv=require("dotenv").config();
//const port=8000;
const app=express();

const port = process.env.PORT || 5000;

app.use('/api/tasks' ,  require('./routes/taskRoutes'));

app.listen(port, () => console.log(`Server is running on port ${port}`));