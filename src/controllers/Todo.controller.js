const todo = require("../model/todos.js");
const {getAllTodos,getTodoByID,createTodo,updateTodo,removeTodo} = require('../services/todos.service.js');

module.exports = class Todo{

    static async getAllTodos(req,res){
       const allTodos = await getAllTodos();
        res.json(allTodos);
    }

    static async getTodoByID(req,res){
        const {id} = req.params;
        const todoByID = await getTodoByID(id);
        res.json(todoByID);
    }

    static async createTodo(req,res){
        const {name} = req.body;
        
        const newTodo = await createTodo(name);
        res.status(200).location(`/todos/${newTodo._id}`);
        res.json({status:"Success"});
    }

    static async updateTodo(req,res){
        const {id} = req.params;
        await updateTodo(id,req.body);

        res.json({status: "Success"});
        
    }

    static async removeTodo(req,res){
        const {id} = req.params;
        await removeTodo(id);
        res.json({status: "Success"});
        
    }
}