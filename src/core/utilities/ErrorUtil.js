

module.exports = class ErrorUtil{

    static ERROR_MAPS = {
        CLIENT_ERRORS: {
            VALIDATION_ERR: {
                ERR_CODE: 400,
                ERR_TYPE: "VALIDATION_ERR"
            }
        },
        SERVER_ERRORS: {
            SYSTEM_ERR: {
                ERR_CODE: 500,
                ERR_TYPE: "SYSTEM_ERR"
            }
        }
    }; 

    static createError(msg, errId, code, type){
        
        const error = new Error(msg);
        error.code = code;
        error.errId = errId;
        error.type = type;

        return error;
    }

    static createValidationError(msg, errId){
        
        const VALIDATION_ERR = ErrorUtil.ERROR_MAPS.CLIENT_ERRORS.VALIDATION_ERR;

        return ErrorUtil.createError(msg, errId, VALIDATION_ERR.ERR_CODE,VALIDATION_ERR.ERR_TYPE);
    }

    static throwValidationError(msg, errId){

        throw ErrorUtil.createValidationError(msg, errId);
    }

}