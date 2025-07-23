import React from 'react';
import { User, Settings, Palette, DollarSign, FileText, Headphones, LogOut, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const AccountMenu = () => {
    const navigate =useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4 gap-10">
        <button onClick={() => navigate(-1)} className="text-gray-600 mr-4">
          <ArrowLeft/>
        </button>
        <h2 className="text-lg font-semibold">Account</h2>
      </div>
      <div className="space-y-5">
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left">
          <User className="w-6 h-6 text-blue-500 mr-3" />
          Personal Information
        </button>
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left">
          <Settings className="w-6 h-6 text-blue-500 mr-3" />
          Account Settings
        </button>
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left">
          <Palette className="w-6 h-6 text-blue-500 mr-3" />
          Themes
        </button>
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left">
          <DollarSign className="w-6 h-6 text-blue-500 mr-3" />
          Payment Currency
        </button>
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left">
          <FileText className="w-6 h-6 text-blue-500 mr-3" />
          Travel Documents
        </button>
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left">
          <Headphones className="w-6 h-6 text-blue-500 mr-3" />
          Help & Support
        </button>
        <button className="w-full bg-white p-4 rounded-lg flex items-center text-left mt-6">
          <LogOut className="w-6 h-6 text-blue-500 mr-3" />
          Close Account
        </button>
      </div>
    </div>
  );
};

export default AccountMenu;