const JOI = require('joi');


exports.postSchema = JOI.object({
    groupName: JOI.string().required()
});

exports.putSchema = JOI.object({
    groupName: JOI.string().required()
});