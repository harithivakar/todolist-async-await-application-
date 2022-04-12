const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    todo: String,
    status: String,
    listIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List"
    }]
});

const Todo = mongoose.model("Todos",todolistSchema);

module.exports = Todo;