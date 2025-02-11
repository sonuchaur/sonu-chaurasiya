import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <div className="text-white text-2xl font-bold mb-8">Spotify</div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Home className="h-6 w-6 mr-4" />
            Home
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Search className="h-6 w-6 mr-4" />
            Search
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Library className="h-6 w-6 mr-4" />
            Your Library
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <button className="flex items-center text-gray-300 hover:text-white">
            <Plus className="h-6 w-6 mr-4" />
            Create Playlist
          </button>
          <button className="flex items-center text-gray-300 hover:text-white">
            <Heart className="h-6 w-6 mr-4" />
            Liked Songs
          </button>
        </div>
      </div>
      
      <div className="mt-auto p-6">
        <div className="text-xs text-gray-400 hover:underline cursor-pointer">
          Cookies Policy
        </div>
        <div className="text-xs text-gray-400 hover:underline cursor-pointer mt-2">
          Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Sidebar;