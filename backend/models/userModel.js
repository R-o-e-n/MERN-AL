const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
{
name: {
type: String,
required: [true, "Duhet emri"],
},
email: {
type: String,
required: [true, 'Duhet emaili'],
unique: true,
},
password: {
type: String,
required: [true, "Duhet Fjalekalimi"],
},
},
{ timestamps: true }
)
module.exports = mongoose.model('User', userSchema)