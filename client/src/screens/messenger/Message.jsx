import React,{useState,useEffect} from "react";
import { Fragment } from "react";
import { getUserById } from "../../Api";
import {format} from "timeago.js"
const Message = ({ own, message, loggedInUser },ref)=>{
    const [user, setUser] = useState(null)
    useEffect(() => {
        getUserById(message.sender).then(res => {
            setUser(res)
        })
    }, [setUser])
    return(
    <Fragment>
                {
                    own ? (<div className="col-span-5 my-8" ref={ref}>
                        <div className="flex items-center gap-2">
                            <img
                                className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                src={loggedInUser?.avater}
                                alt=""
                            />
                            <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">{message?.text}</div>
                        </div>
                    <div className="text-right">{format(message.createdAt)}</div>
                </div>) : (<div className="col-end-2 col-start-7 rounded-xl px-2 my-8" ref={ref}>
                        <div className="flex items-center gap-2">
                            <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full text-right">{message?.text}</div>
                            <img
                                className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                src={user?.avater}
                                alt=""
                            />
                        </div>
                        <div className="text-left">{format(message.createdAt)}</div>

                    </div>)
                }
    </Fragment>
            
    )
}
const forwardRef = React.forwardRef(Message)




export default forwardRef;