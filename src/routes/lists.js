const express = require('express');

const List = require('../controllers/List.controller.js');

const ListMiddleware = require('../middlewares/List.middleware.js');

const router = express.Router();

router.get("/",List.getAllList);
router.get("/:id",List.getListByID);
router.post("/",ListMiddleware.createListBody,List.createList);
router.put("/:id",ListMiddleware.updateListBody,List.updateList);
router.delete("/:id",List.removeList);



module.exports = router;