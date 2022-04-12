const todo = require("../model/todos.js");
const {getAllTodos,getTodoByID,createTodo,updateTodo,removeTodo} = require('../services/todos.service.js');
const ValidationUtil = require('../core/utilities/ValidationUtil.js');

module.exports = class Todo{

    static async getAllTodos(req,res){
       const allTodos = await getAllTodos();
        res.json(allTodos);
    }

    static async getTodoByID(req,res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id,"ID");

        const todoByID = await getTodoByID(id);
        res.json(todoByID);
    }

    static async createTodo(req,res){
        const {name} = req.body;
        
        ValidationUtil.isNullOrUndefined(name, "Name");
        ValidationUtil.isStringEmpty(name, "Name");

        const newTodo = await createTodo(name);
        res.status(200).location(`/todos/${newTodo._id}`);
        res.json({status:"Success"});
    }

    static async updateTodo(req,res){
        const {id} = req.params;
        const {name, status} = req.body;
        const keys = Object.keys(req.body);

        ValidationUtil.isNullOrUndefined(id, "ID");
        
        if(keys.includes("name")){
            ValidationUtil.isNullOrUndefined(name, "Name");
            ValidationUtil.isStringEmpty(name, "Name");
        }

        if(keys.includes("status")){
            ValidationUtil.isNullOrUndefined(status, "Status");
            ValidationUtil.isStringEmpty(status, "Status");
        }

        await updateTodo(id,);

        res.json({status: "Success"});
        
    }

    static async removeTodo(req,res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id,"ID");

        await removeTodo(id);
        res.json({status: "Success"});
        
    }
}