const router = require("express").Router();
const authCheck = require("../../middlewares/auth");
const {createConversation,allMyConversations}=require("../../controllers/ConversationController")


router.post("/create-conversation", authCheck, createConversation);
router.get("/:userId", authCheck, allMyConversations);

module.exports=router