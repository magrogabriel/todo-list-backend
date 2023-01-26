//Import mongoose to create new Schema
const mongoose = require('mongoose');

//create Schema
const TodoItemSchema = new mongoose.Schema({
    item: {
        type:String,
        required: true
    }
})

//exporting this Schema
module.exports = mongoose.model('todo', TodoItemSchema);