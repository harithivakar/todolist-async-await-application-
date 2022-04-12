const List = require('../model/list.js');

exports.getAllList = async () => {
    const allList = await List.find({}).exec();

    if (!allList) {
        throw new Error("Something went wrong!");
    }

    return allList;
}

exports.getListByID = async (id) => {
    
    const singleList = await List.findById(id)
    if (!singleList) {
        throw new Error(`Couldn't find list with id# ${id}`);
    }

    return singleList;
    
}

exports.createList = async (data) => {
    const {listName,listType} = data;
    const newList = new List({listName, listType});
    await newList.save()

    if(!newList){
        throw new Error("List creation failed");
    }
    
    return newList;
}

exports.updateList = async (id, data) => {
    
    const {listName,listType} = data;
    const updatedList = {};

    if(listName){
        updatedList.listName = listName;
    }

    if(listType){
        updatedList.listType = listType; 
    }

    List.findByIdAndUpdate(id, {$set:updatedList});
    
    return updatedList;
}

exports.removeList = async (id) => {

    const removeList = await List.findByIdAndDelete(id);
}