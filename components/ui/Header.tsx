"use client"
import React, { useState, useEffect } from "react";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs"
import { HeaderLogo } from "./Header-logo"
import {Navigation} from "./Navigation"
import { Loader2 } from "lucide-react"
import { WelcomeMsg } from "./WelcomeMsg"
import SearchComponent from './SearchComponent';
import { useGetNewsQuery, usePostKpiMutation } from "../../app/state/api";


type Props = {
    component:React.ComponentType
};

export const Header = (props: Props) =>{
    const [selectedItem, setSelectedItem] = useState(null);
    const [ticker, setTicker] = useState("");

    const [postKpi] = usePostKpiMutation();
    const { data, error, isLoading } = useGetNewsQuery(ticker, { skip: !ticker });

    const handleSearch = (term: string) => {
        console.log("Search term from Header:", term);
        setTicker(term); // This is where you set the ticker
        console.log("Search term from Header:", data);
    };
    
      useEffect(() => {
        if (data && data.feed.length > 0) {
          const foundItem = data.feed.find(item =>
            item.ticker_sentiment.some(tickerObj => tickerObj.ticker === ticker)
          );
          setSelectedItem(foundItem);
        }
      }, [data, ticker]);

    return (
        <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
               <div className="w-full flex items-center justify-between mb-14">
                <div className="flex items-center lg:gap-x-16">
                    <HeaderLogo/>
                    <Navigation/>
                </div>
                <ClerkLoaded> <UserButton afterSignOutUrl="/"/></ClerkLoaded>
               
                <ClerkLoading>
                    <Loader2 className="size-8 animate-spin text-slate-400"/>
                </ClerkLoading>
               </div>
               <WelcomeMsg/>
               {/* <SearchComponent onSearch={handleSearch} /> */}

               <br/>
            </div>
        </header>
    )
}