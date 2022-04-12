const list = require('../model/list.js');
const {getAllList, getListByID, createList, updateList, removeList} = require('../services/list.service.js');
const ValidationUtil = require('../core/utilities/ValidationUtil.js');

module.exports = class List {
    static async getAllList(req, res){
        const allList = await getAllList();
        res.json(allList);
    }

    static async getListByID(req, res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id, "ID");

        const singleList = await getListByID(id);
        res.json(singleList);
    }

    static async createList(req,res){
        const newList = await createList(req.body);
        const {listName, listType} = req.body;
        
        ValidationUtil.isNullOrUndefined(listName, "List Name");
        ValidationUtil.isStringEmpty(listName, "List Name");
        
        ValidationUtil.isNullOrUndefined(listType, "List Type");
        ValidationUtil.isStringEmpty(listType, "List Type");

        res.status(200).location(`/lists/${newList._id}`);
        res.json({status:"Success"});
    }

    static async updateList(req, res){
        const {id} = req.params;
        const {listName, listType} = req.body;
        const keys = Object.keys(req.body);

        ValidationUtil.isNullOrUndefined(id, "id");

        if(keys.includes("listName")){
            ValidationUtil.isNullOrUndefined(listName, "List Name");
            ValidationUtil.isStringEmpty(listName, "List Name");
        }

        if(keys.includes("listType")){
            ValidationUtil.isNullOrUndefined(listType, "List Type");
            ValidationUtil.isStringEmpty(listType, "List Type");
        }

        await updateList(id, req.params);
        res.json({status: "Success"});
    }

    static async removeList(req, res){
        const {id} = req.params;

        ValidationUtil.isNullOrUndefined(id, "ID");

        await removeList(id);
        res.json({status: "Success"});
    }
}
