const group = require('../model/groups.js');
const {getAllGroups, getGroupsByID, createGroup, updateGroup, removeGroups, createList} = require('../services/group.service.js');


module.exports = class Group{

    static async getAllGroups(req,res){
        const AllGroup = await getAllGroups();
        res.json(AllGroup);
    }

    static async getGroupsByID(req,res){
        const {id} = req.params;
        const GroupByID = await getGroupsByID(id);
        
        res.json(GroupByID);
    }

    static async createGroup(req,res){
        
        const newgroup = await createGroup(req.body);

        res.status(200).location(`/groups/${newgroup._id}`);
        res.json({status:"Success"});
    }

    static async updateGroup(req,res){
        const {id} = req.params;
        const {groupName} = req.body;

        await updateGroup(id, req.body);

        res.json({status: "Success"});
    }

    static async removeGroups(req,res){
        const {id} = req.params;
        await removeGroups(id);
        
        res.json({status: "Success"})
    }

    static async createList(req, res){
        const list = await createList(req.params.id,req.body.listName);
        res.json(list);
    }
}