const express = require('express');

const Todo = require('../controllers/Todo.controller.js');
const TodoMiddleware = require('../middlewares/Todo.middleware.js');

const router = express.Router();

router.get("/",Todo.getAllTodos);
router.get("/:id",Todo.getTodoByID);
router.post("/",TodoMiddleware.createTodoBody,Todo.createTodo);
router.put("/:id",TodoMiddleware.updateTodoBody,Todo.updateTodo);
router.delete("/:id",Todo.removeTodo);


module.exports = router;