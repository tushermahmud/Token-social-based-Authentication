import React, { useState, useEffect } from 'react';
import authSvg from '../assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';
const Home = ({ match }) => {
    

    return (
        <div className='bg-gray-100 text-gray-900 mx-auto'>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-5 h-screen">
                <div className="col-span-1 h-full overflow-scroll">
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />                        
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                    <div className="p-6 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4">
                        <div className="shrink-0">
                            <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">ChitChat</div>
                            <p className="text-gray-500">You have a new message!</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 h-screen relative">
                    <div className="grid grid-cols-6 h-full overflow-scroll pb-20">
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-5 my-8">
                            <div className="flex items-center gap-2">
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="rounded-xl px-2 text-white bg-indigo-500 py-3 w-full">My text</div>
                            </div>
                        </div>
                        <div className="col-end-2 col-start-7 rounded-xl px-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-xl px-2 text-black-100 bg-gray-300 py-3 w-full">My text</div>
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-3 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* <div className="">
                            ME
                        </div>
                        <div className="">
                            You
                        </div> */}
                    </div>
                    <div className="w-full absolute bottom-0 font-bold z-999">
                        <div className="">
                            <div className="mt-5">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={1}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-xl px-3 py-3"
                                    placeholder="you@example.com"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="fixed">
                            
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-1 h-full overflow-scroll">
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                    <div className="p-3 w-full mx-auto bg-white border-2 shadow-lg flex items-center space-x-4  overscroll-y-auto">
                        <div className="shrink-0">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-3 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-small font-medium text-black">ChitChat</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className=''>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Welcome To Our chat app
                        </h1>
                    </div>
                </div>
                <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
                    <div
                        className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${authSvg})` }}
                    ></div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;