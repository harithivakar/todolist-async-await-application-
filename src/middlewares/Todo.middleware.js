const {postSchema, putSchema} = require('../schemas/requests/todos.schema.js');
const ErrorUtil = require('../core/utilities/ErrorUtil.js');

module.exports = class TodoMiddleware{
    static createTodoBody(req, res, next){
        const { error } = postSchema.validate(req.body);

        if(error){
            ErrorUtil.throwValidationError("Invalid request body", "INVALID_REQUEST_BODY");
        }

        next();
    }

    static updateTodoBody(req, res, next){
        const { error } = putSchema.validate(req.body);

        if(error){
            ErrorUtil.throwValidationError("Invalid request body", "INVALID_REQUEST_BODY");
        }

        req.body.status = req.body.status.toLowerCase();

        next();
    }
}