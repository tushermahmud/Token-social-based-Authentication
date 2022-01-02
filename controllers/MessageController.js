const MessageModel = require("../models/MessageModel");

const createMessage = async(req,res)=>{
    const newMessage = new MessageModel(req.body);
    try {
        const savedMeaage = await newMessage.save();
        return res.status(200).json(savedMeaage)
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}
const getMessagesByConversationId = async(req,res)=>{
    try {
        const messages = await MessageModel.find({
          conversationId: req.params.conversationId,
        });
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
    
}

module.exports = { createMessage, getMessagesByConversationId };