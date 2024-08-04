"use client"

import {useUser} from "@clerk/nextjs"

export const WelcomeMsg = ()=>{
    const {user, isLoaded} =useUser();
return (
    <div className="space-y-2 mb-4">
        <h2 className="text-1xl lg:text-4xl text-white font-medium" >Hi 👋 {isLoaded? " ": "User"}{user?.firstName}</h2>
        <p className="text-sm lg:text-base text-[#89b6fd]">
            Welcome to your research Dashboard
        </p>
    </div>
)
}