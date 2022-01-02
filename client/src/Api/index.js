import axios from "axios";
import {getCookie} from "../helpers/auth";
import { toast } from "react-toastify";

const getUserById = async(userId)=>{
    const token = getCookie("token");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${userId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (!response.data.error) {
        return response.data;
      }
    } catch (error) {
      toast.error(error.message);
    }
}
const getMessagesByConversationId = async (conversationId) => {
  const token = getCookie("token");
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/messages/${conversationId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (!response.data.error) {
      return response.data;
    }
  } catch (error) {
    toast.error(error.message);
  }
};
const getConversation=async(userId)=>{
    const token = getCookie("token");
    try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/conversation/${userId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if(!response.data.error){
            return response.data
        }
    } catch (error) {
        toast.error(error.message)
    }
}
const createNewMessage=async(data)=>{
    const token = getCookie("token");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/messages/create-messages`,data,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (!response.data.error) {
        return response.data;
      }
    } catch (error) {
      toast.error(error.message);
    }
}
 export {
   getConversation,
   getUserById,
   getMessagesByConversationId,
   createNewMessage,
 };
