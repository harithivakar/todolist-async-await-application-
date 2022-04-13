const express = require('express');

const Groups = require('../controllers/Group.controller.js');

const GroupMiddleware = require('../middlewares/Group.middleware.js');

const router = express.Router();

router.get("/",Groups.getAllGroups);
router.get("/:id",Groups.getGroupsByID);
router.post("/",GroupMiddleware.createGroupBody,Groups.createGroup);
router.put("/:id",GroupMiddleware.updateGroupBody,Groups.updateGroup);
router.delete("/:id",Groups.removeGroups);

router.post("/:id/lists",Groups.createList);

module.exports = router;