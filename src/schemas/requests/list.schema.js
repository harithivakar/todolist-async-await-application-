const JOI = require('joi');


exports.postSchema = JOI.object({
    listName: JOI.string().required(),
    listType: JOI.string().required()
});

exports.putSchema = JOI.object({
    listName: JOI.string().required(),
    listType: JOI.string().required()
});