const express=require('express');
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv=require("dotenv").config();

const connectDB = require("./connect/database");
//const port=8000;
const app=express();
connectDB();
const port = process.env.PORT || 5000;

app.use('/api/tasks' ,  require('./routes/taskRoutes'));
app.use(errorHandler);
app.listen(port, () => console.log(`Server is running on port ${port}`));