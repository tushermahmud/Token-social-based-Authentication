import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {connect} from "react-redux";
import { getUserById } from "../../Api";
const Chats = ({ auth, conversation, loggedInUserId})=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const friendId = conversation.members.find(friend=>friend!==loggedInUserId)
        getUserById(friendId).then(res=>{
            setUser(res)
        })
    }, [setUser])
    return user&&(
            <Fragment>
                <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <img
                            className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                            src={user.avater}
                            alt=""
                        />
                    </div>
                    <div>
                    <div className="text-l font-medium text-black capitalize">{user.name}</div>
                        <p className="text-gray-500">You have a new message!</p>
                    </div>
                </div>
            </Fragment>
                
    )
}
const mapStateToProps = (state)=>({
    auth: state.auth
})
export default connect(mapStateToProps)(Chats);