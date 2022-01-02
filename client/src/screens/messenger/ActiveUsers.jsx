import React from "react";

const ActiveUsers = ()=>{
    return (
        <div className="col-span-1 h-full overflow-scroll bg-indigo-100">
            <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                <div className="shrink-0 relative">
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="h-3 w-3 rounded-full ring-3 bg-green-500 absolute top-0"></div>
                </div>
                <div>
                    <div className="text-small font-medium text-black">ChitChat</div>
                </div>
            </div>
            <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                <div className="shrink-0 relative">
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="h-3 w-3 rounded-full ring-3 bg-gray-500 absolute top-0"></div>
                </div>
                <div>
                    <div className="text-small font-medium text-black">ChitChat</div>
                </div>
            </div>
        </div>
    );
}
export default ActiveUsers;