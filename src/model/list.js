const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
    listName: {
        type: String,
        required: true
    },
    listType: {
        type: String,
        required: true
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    }
});

const List = mongoose.model("List",listSchema);

module.exports = List;