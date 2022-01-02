const ConversationModel = require("../models/ConversationModel");
const createConversation = async(req,res)=>{
    const conversation=new ConversationModel({
        members:[req.body.senderId,req.body.receiverId]
    })
    try {
        const saveConversation = await conversation.save();
        return res.status(200).json(saveConversation);
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}
const allMyConversations=async(req,res)=>{
    try {
        const conversations = await ConversationModel.find({
            members:{$in:[req.params.userId]}
        })
        return res.status(200).json(conversations)
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}
module.exports = { createConversation, allMyConversations };