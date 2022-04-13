const {postSchema, putSchema} = require('../schemas/requests/group.schema.js');
const ErrorUtil = require('../core/utilities/ErrorUtil.js');

module.exports = class GroupMiddleware{
    static createGroupBody(req, res, next){
        const { error } = postSchema.validate(req.body);

        if(error){
            ErrorUtil.throwValidationError("Invalid request body", "INVALID_REQUEST_BODY");
        }

        next();
    }

    static updateGroupBody(req, res, next){
        const { error } = putSchema.validate(req.body);

        if(error){
            ErrorUtil.throwValidationError("Invalid request body", "INVALID_REQUEST_BODY");
        }


        next();
    }
}