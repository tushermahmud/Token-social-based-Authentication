import React, { useState, useEffect, Fragment, useRef } from 'react';
import authSvg from '../../assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';
import Chats from './Chats';
import Message from './Message';
import ActiveUsers from './ActiveUsers';
import {connect} from "react-redux"
import { getConversation,getMessagesByConversationId,createNewMessage } from '../../Api';
import {io} from "socket.io-client"
const Messenger = ({ match,auth }) => {
    const [conversations, setConversations] = useState(null);
    const [currentChat,setCurrentChat]=useState(null)
    const [messages, setMessages] = useState(null)
    const [newMessage,setNewMessage]=useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        socket.current = io(process.env.REACT_APP_SOCKET_URL);
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);
    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", auth?.user?._id);
        socket.current.on("getUsers", (users) => {
            console.log(users)
            // setOnlineUsers(
            //     user.followings.filter((f) => users.some((u) => u.userId === f))
            // );
        });
    }, [auth]);
    useEffect(() => {
        scrollRef&&scrollRef?.current?.scrollIntoView({behavior:"smooth"});
        if (auth.user){
            getConversation(auth.user._id).then(res => {
                setConversations(res)
            });
        }
    }, [auth, setConversations, currentChat, messages ])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        debugger
        let data = {
            conversationId: currentChat._id,
            sender: auth.user._id,
            text: newMessage,
            images:[],
            videos:[]
        }
        //console.log(currentChat)

        const receiverId = currentChat.members.find(
            (member) => member !== auth.user._id
        );

        socket.current.emit("sendMessage", {
            senderId: auth.user._id,
            receiverId,
            text: newMessage,
        });
        createNewMessage(data).then(res=>{
            setMessages([...messages, res])
        })
        
        console.log(messages)
    }

    const setCurrentChatHandler = (conversation)=>{
        setCurrentChat(conversation);
        console.log(conversation)
        getMessagesByConversationId(conversation._id).then(res=>{
            setMessages(res);
        })
        scrollRef && scrollRef?.current?.scrollIntoView({ behavior: "smooth" });

    }
    return !auth.isAuthenticated ? (<Fragment>
        <div className="border border-blue-500 shadow rounded-md p-4 max-w-sm w-full mx-auto h-screen w-screen">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-500 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-gray-500 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-gray-500 rounded col-span-2"></div>
                            <div className="h-2 bg-gray-500 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-gray-500 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>) : (
        <div className='bg-gray-100 text-gray-900 mx-auto'>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-5 h-screen">
                <div className="col-span-1 overflow-scroll shadow-5-m bg-indigo-100">
                    {conversations&&conversations.map(conversation=>(
                        <div onClick={() => setCurrentChatHandler(conversation)} key={conversation._id}>
                            <Chats  conversation={conversation} loggedInUserId={auth.user._id} />
                        </div>
                    ))}
                </div>
                <div className="col-span-2 h-screen relative">
                        <div className="grid grid-cols-6 h-full overflow-scroll pb-20">
                            {currentChat ? (messages && messages.map((message) => (<Message ref={scrollRef} message={message} own={message.sender === auth.user._id} loggedInUser={auth.user} key={message._id}/>))
                            ) :(<div className="col-span-6 my-8 text-center">Open a Conversation To Start a Chat</div>)}
                    </div>
                        <div className="w-full absolute bottom-0 font-bold z-999 bg-gray-100">
                            <div className="">
                                <div className="mt-0 flex justify-between items-center">
                                    <textarea
                                        onChange={(e)=>setNewMessage(e.target.value)}
                                        value={newMessage}
                                        id="about"
                                        name="about"
                                        rows={1}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-xl px-3 py-3 mb-2"
                                        placeholder="you@example.com"
                                    />
                                    <div className="ml-3">
                                        <button
                                            onClick={handleSubmit}
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                                                 
                                </div>
                            </div>
                        </div>
                </div>
                <ActiveUsers/>
            </div>
        </div>
    );
};
const mapStateToProps=(state)=>({
    auth:state.auth
})
export default connect(mapStateToProps)(Messenger);