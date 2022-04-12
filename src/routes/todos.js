const express = require('express');

const Todo = require('../controllers/Todo.controller.js');

const router = express.Router();

router.get("/",Todo.getAllTodos);
router.get("/:id",Todo.getTodoByID);
router.post("/",Todo.createTodo);
router.put("/:id",Todo.updateTodo);
router.delete("/:id",Todo.removeTodo);


module.exports = router;