const express = require('express');

const List = require('../controllers/List.controller.js');

const router = express.Router();

router.get("/",List.getAllList);
router.get("/:id",List.getListByID);
router.post("/",List.createList);
router.put("/:id",List.updateList);
router.delete("/:id",List.removeList);



module.exports = router;