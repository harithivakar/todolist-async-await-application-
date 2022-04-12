const group = require('../model/groups.js');
const {getAllGroups, getGroupsByID, createGroup, updateGroup, removeGroups, createList} = require('../services/group.service.js');
const ValidationUtil = require('../core/utilities/ValidationUtil.js');

module.exports = class Group{

    static async getAllGroups(req,res){
        const AllGroup = await getAllGroups();
        res.json(AllGroup);
    }

    static async getGroupsByID(req,res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id, "ID");

        const GroupByID = await getGroupsByID(id);
        
        res.json(GroupByID);
    }

    static async createGroup(req,res){
        const {groupName} = req.body;

        ValidationUtil.isNullOrUndefined(groupName, "Group Name");
        ValidationUtil.isStringEmpty(groupName, "Group Name");

        const newgroup = await createGroup(req.body);

        res.status(200).location(`/groups/${newgroup._id}`);
        res.json({status:"Success"});
    }

    static async updateGroup(req,res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id, "ID");

        const {groupName} = req.body;

        ValidationUtil.isNullOrUndefined(groupName, "Group Name");
        ValidationUtil.isStringEmpty(groupName, "Group Name");

        await updateGroup(id, req.body);

        res.json({status: "Success"});
    }

    static async removeGroups(req,res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id, "ID");

        await removeGroups(id);
        
        res.json({status: "Success"})
    }

    static async createList(req, res){

        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id, "ID");

        const {listName} = req.body;
        const keys = Object.keys(req.body);

        if(keys.includes("listName")){
            ValidationUtil.isNullOrUndefined(listName, "List Name");
            ValidationUtil.isStringEmpty(listName, "List Name");
        }

        const list = await createList(req.params.id,req.body.listName);
        res.json(list);
    }
}