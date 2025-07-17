import React from "react";
import { House, MessageSquare, Download, User } from "lucide-react";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = React.useState("home");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {/* House */}
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "home" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <House
            size={24}
            className={activeTab === "home" ? "fill-blue-500" : ""}
          />
          <span className="text-xs mt-1">House</span>
        </button>

        {/* Chat */}
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "chat" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <MessageSquare
            size={24}
            className={activeTab === "chat" ? "fill-blue-500" : ""}
          />
          <span className="text-xs mt-1">Chat</span>
        </button>

        {/* Saved */}
        <button
          onClick={() => setActiveTab("saved")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "saved" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Download
            size={24}
            className={activeTab === "saved" ? "fill-blue-500" : ""}
          />
          <span className="text-xs mt-1">Saved</span>
        </button>

        {/* Account */}
        <button
          onClick={() => setActiveTab("account")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "account" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <User
            size={24}
            className={activeTab === "account" ? "fill-blue-500" : ""}
          />
          <span className="text-xs mt-1">Account</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;