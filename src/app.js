const express = require('express');

const ErrorUtil = require('./core/utilities/ErrorUtil.js');

const router = require("./routes/index.js");

const app = express();

// app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(router);

//Custom error handler middleware

app.use((err, req, res, next) => {
    const errorCode = err.code || 500;
    const errId = err.errId || "UNKNOWN";
    const errType = err.type || ErrorUtil.ERROR_MAPS.SERVER_ERRORS.SYSTEM_ERR.ERR_TYPE;

    res.status(errorCode).send(err.message);
    
})

module.exports = app;
