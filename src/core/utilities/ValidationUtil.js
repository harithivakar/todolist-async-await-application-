module.exports = class ValidationUtil {
    static isNullOrUndefined(value, key){
        if(value === null || value === undefined || value === "undefined" || value === "null"){
            throw new Error(`${key} is null or undefined`);
        }
    }

    static isStringEmpty(value, key){
        if(value === ""){
            throw new Error(`${key} is empty`);
        }
    }

    
}