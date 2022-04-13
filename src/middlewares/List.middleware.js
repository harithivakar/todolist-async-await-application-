const {postSchema, putSchema} = require('../schemas/requests/list.schema.js');
const ErrorUtil = require('../core/utilities/ErrorUtil.js');

module.exports = class ListMiddleware{
    static createListBody(req, res, next){
        const { error } = postSchema.validate(req.body);

        if(error){
            ErrorUtil.throwValidationError("Invalid request body", "INVALID_REQUEST_BODY");
        }

        next();
    }

    static updateListBody(req, res, next){
        const { error } = putSchema.validate(req.body);

        if(error){
            ErrorUtil.throwValidationError("Invalid request body", "INVALID_REQUEST_BODY");
        }

        // req.body.status = req.body.status.toLowerCase();

        next();
    }
}