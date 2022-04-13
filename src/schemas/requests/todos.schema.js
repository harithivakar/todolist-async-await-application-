const JOI = require('joi');


exports.postSchema = JOI.object({
    name: JOI.string().required()
});

exports.putSchema = JOI.object({
    name: JOI.string().required(),
    status: JOI.string().required()
});