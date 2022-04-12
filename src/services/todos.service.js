const List = require("../model/list.js");
const Todo = require("../model/todos.js");

exports.getAllTodos = async () => {
    const allTodos = await Todo.find({}).exec();

    if(!allTodos){
        throw new Error("Something went wrong!");
    }

    return allTodos;
}

exports.getTodoByID = async (id) => {
    const singletodo = await Todo.findById(id);

    if(!singletodo){
        throw new Error(`Couldn't find todo with id# ${id}`);
    }

    return singletodo;
}

exports.createTodo = async (name) => {

    const list = await List.findOne({
        listName: "All tasks"
    });

    if(!list){
        throw new Error("Default list not found. Please create default list.");
    }

    const newTodo = new Todo();
    newTodo.todo = name;
    newTodo.status = "pending";
    newTodo.listIds.push(list._id);

    await newTodo.save();

    if(!newTodo){
        throw new Error("Todo creation failed");
    }

    return newTodo;
}


exports.updateTodo = async (id,data) => {
    
    const {name, status} = data;
    const updatetodo = await Todo.findById(id);
    
    if(!updatetodo){
        throw new Error(`Couldn't find todo with id# ${id}`);
    }

    updatetodo.todo = name ? name : todo.todo;
    updatetodo.status = status ? status : todo.status;
    await updatetodo.save();

    return updatetodo;
}

exports.removeTodo = async (id) => {
    
    const removetodo = await Todo.findByIdAndDelete(id)
    
    return removetodo;
}