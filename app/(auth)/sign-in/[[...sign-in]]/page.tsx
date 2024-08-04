"use client";


import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { useState } from "react";
import { useGetNewsQuery, usePostKpiMutation, useGetKpisQuery, usePostEmailForSubscribeMutation, usePostEmailForMessageMutation } from "../../../state/api";

export default function Page() {
  // State to manage the email input and response message
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [postEmailForSubscribe, { isLoading }] = usePostEmailForSubscribeMutation();
  const [PostEmailForMessage] = usePostEmailForMessageMutation();



  // Handle form submission
  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Use the mutation to send the email to the backend
      const data = await postEmailForSubscribe({ email }).unwrap();
      const dataformessage = await PostEmailForMessage({ email }).unwrap();
      // Update the response message and show success animation
      setResponseMessage("You are successfully waitlisted for the most exciting stock news!");
      setShowSuccess(true);
      
      // Hide the success message after a delay
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // Hide message after 5 seconds

      setEmail(""); // Clear input field after submission
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full bg-blue-600 flex flex-col items-center justify-center px-4 py-16 space-y-8 relative">
        {/* Ticker Tape */}
        <div className="ticker-tape absolute top-0 w-full bg-black text-white">
          <div className="ticker-tape-inner">
            <span className="ticker-item">AAPL: $150.25 +1.50% |</span>
            <span className="ticker-item">GOOGL: $2725.50 -0.25% |</span>
            <span className="ticker-item">MSFT: $300.00 +0.75% |</span>
            <span className="ticker-item">AMZN: $3450.75 +0.55% |</span>
            <span className="ticker-item">TSLA: $680.50 -2.25% |</span>
            <span className="ticker-item">FB: $350.75 +0.45% |</span>
            <span className="ticker-item">NFLX: $520.00 -0.35% |</span>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-white font-bold text-2xl mb-2">
            Your Stock Newsletter
          </h2>
          <p className="text-white text-lg italic">
            All your financial updates in one place
          </p>
        </div>

        <p className="text-white text-center">
          Subscribe to get the latest updates and insights directly to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col items-center space-y-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 w-full max-w-md"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-bold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>

         {/* Animated Response Message */}
         {responseMessage && (
          <p className={`text-white text-center mt-4 ${showSuccess ? 'fade-in' : 'fade-out'}`}>
            {responseMessage}
          </p>
        )}
      </div>

      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        {/* <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Also you can customize your news letter according to your likings</h1>
          <p>Login to your account to view the Dashboard</p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
        </div> */}
        * Your dashboard to customize your interests <br />
        ---------------------------------------------
        <br />
        Functionality currently under contruction
      </div>

      <style jsx>{`
        .ticker-tape {
          overflow: hidden;
          white-space: nowrap;
          padding: 10px 0;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          background-color: black;
          z-index: 10;
        }

        .ticker-tape-inner {
          display: inline-block;
          animation: ticker 30s linear infinite;
        }

        .ticker-item {
          display: inline-block;
          padding-right: 20px;
          font-size: 14px;
        }

        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
