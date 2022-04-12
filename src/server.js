const mongoose = require("mongoose");
require('dotenv').config();
require('express-async-errors');

const app = require("./app.js");

const init = (app) => {
    mongoose.connect(`${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`)
    app.listen(process.env.PORT, () => {
        console.log(`Server running @ ${process.env.PORT}`);
    });
};

init(app);