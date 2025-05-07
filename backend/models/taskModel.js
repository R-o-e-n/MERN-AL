const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        text:{
            type: String,
            required: [true, "Vendos nje vlere per tekstin!!!"],
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Task", taskSchema);