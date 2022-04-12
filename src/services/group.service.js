const Group = require('../model/groups.js');
const List = require('../model/list.js');

exports.getAllGroups = async () => {
    const allGroups = await Group.find({}).exec();

    if(!allGroups){
        throw new Error("Couldn't retrieve groups");
    }

    return allGroups;
}

exports.getGroupsByID = async (id) => {
    const getGroupByID = await Group.findById(id)

    if(!getGroupByID){
        throw new Error(`Couldn't find group with id# ${id}`);
    }

    return getGroupByID;
}

exports.createGroup = async (data) => {

    const {groupName} = data
    const newgroup = new Group({groupName});

    await newgroup.save();

    if(!newgroup){
        throw new Error(`Group Creation failed`);
    }

    return newgroup;
}

exports.updateGroup = async (id, data) => {
    const {groupName} = data;
    const updatedgroup = {};

    if(groupName){
        updatedgroup.groupName = groupName;
    }

    await Group.findByIdAndUpdate(id, {$set:updatedgroup})

    if(!updatedgroup){
        throw new Error(`Group Creation failed`);
    }

    return updatedgroup;
}


exports.removeGroups = async (id) => {

    await Group.findByIdAndDelete(id);

}


exports.createList = async (groupId,listName) => {
    const group = await Group.findById(groupId)

    if(!group){
        throw new Error("Group does not exist");
    }

    const list = await List.create({
        listName: listName,
        listType: "child",
        groupId: group._id
    });

    group.listIds.push(list._id);
    group.save();

    return list;
    
}