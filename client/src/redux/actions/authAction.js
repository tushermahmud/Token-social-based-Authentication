import {
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  CLEAR_PROFILE,
  LOADING,
} from "../types/types";
import { toast } from "react-toastify";
import axios from "axios";

//register the user action
const register =
  ({ name, email, password, mobile }) =>
  async (dispatch) => {
      debugger
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        name,
        email,
        password,
        mobile,
      });
      if(!response.data.error){
        toast.success(response.data.message);
        dispatch({
          type: LOADING,
          payload: false,
        });
      }else{
          toast.error(response.data.error);
          dispatch({
            type: LOADING,
            payload: false,
          });
      }
      
    } catch (error) {
      toast.error(error.message);
      console.log(error)
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };


//activate user action
const activate = (token,history)=>async(dispatch)=>{
  try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/activation`,
        { token }
      );
      console.log(response);
      debugger
      if(!response.data.error){
        toast.success(response.data.message);
          dispatch({
            type:LOADING,
            payload:false,
        })
        history.push("/login")
      }else{
        toast.error(response.data.error)
        dispatch({
          type: LOADING,
          payload: false,
        });
      }

  } catch (error) {
    toast.error(error.message)
    dispatch({
      type: LOADING,
      payload: false,
    });
  }

}

//user login action
const login=({email,password},history)=>async(dispatch)=>{
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    let response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {email,password});
    console.log(response);
    if(!response.data.error){
      dispatch({
        type:LOGIN_SUCCESS,
        payload:response.data
      })
      toast.success(response.data.message);
      dispatch({
        type: LOADING,
        payload: false,
      });
      history.push("/")
    }else{
      toast.error(response.data.error);
    }
    
  } catch (error) {
    toast.error(error.message)
  }
}

//forgot password
const forgotPassword=(email)=>async(dispatch)=>{
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    let response = await axios.put(`${process.env.REACT_APP_API_URL}/auth//forgot-password`,{email} );
    if(!response.data.error){
      toast.success(response.data.message);
      dispatch({
        type: LOADING,
        payload: false,
      });
    }else{
      toast.error(response.data.error);
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
    console.log(response);
  } catch (error) {
      toast.error(error.message);
      dispatch({
        type: LOADING,
        payload: false,
      });
  }
}


//reset password
const resetPassword=(password,token,history)=>async(dispatch)=>{
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/auth/password/reset`, {newPassword: password,resetPasswordLink: token})
    if (!response.data.error) {
      toast.success(response.data.message);
      dispatch({
        type: LOADING,
        payload: false,
      });
      history.push('/login')
    } else {
      toast.error(response.data.error);
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  } catch (error) {
      toast.error(error.message);
      dispatch({
        type: LOADING,
        payload: false,
      });
  }
}



export { register, activate, login, forgotPassword, resetPassword };
