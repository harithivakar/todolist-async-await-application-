const ErrorUtil = require("./ErrorUtil.js");

module.exports = class ValidationUtil {
    static isNullOrUndefined(value, key){
        if(value === null || value === undefined || value === "undefined" || value === "null"){
            ErrorUtil.throwValidationError(`${key} is null or undefined`,"VALIDATION_ERR");
        }
    }

    static isStringEmpty(value, key){
        if(value === ""){
            ErrorUtil.throwValidationError(`${key} is empty`,"VALIDATION_ERR");
        }
    }

    
}