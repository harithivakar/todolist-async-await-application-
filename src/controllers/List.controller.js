const list = require('../model/list.js');
const {getAllList, getListByID, createList, updateList, removeList} = require('../services/list.service.js');

module.exports = class List {
    static async getAllList(req, res){
        const allList = await getAllList();
        res.json(allList);
    }

    static async getListByID(req, res){
        const {id} = req.params;
        const singleList = await getListByID(id);
        res.json(singleList);
    }

    static async createList(req,res){
        const newList = await createList(req.body);
        res.status(200).location(`/lists/${newList._id}`);
        res.json({status:"Success"});
    }

    static async updateList(req, res){
        const {id} = req.params;
        await updateList(id, req.params);
        res.json({status: "Success"});
    }

    static async removeList(req, res){
        const {id} = req.params;
        await removeList(id);
        res.json({status: "Success"});
    }
}
