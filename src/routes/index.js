const express = require('express');


const todos = require('./todos.js');
const lists = require('./lists.js');
const groups = require('./groups.js');

const router = express.Router();

router.use("/todos",todos);

router.use("/lists", lists);

router.use("/groups", groups);

module.exports = router;
