const router = require("express").Router();
const {
  createMessage,
  getMessagesByConversationId,
} = require("../../controllers/MessageController");
const authCheck=require("../../middlewares/auth")


router.post("/create-messages", authCheck,createMessage);
router.get("/:conversationId", authCheck, getMessagesByConversationId);


module.exports=router