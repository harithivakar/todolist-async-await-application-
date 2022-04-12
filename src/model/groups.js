const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    listIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List"
    }]
});

const Group = mongoose.model("Group",groupSchema);

module.exports = Group;