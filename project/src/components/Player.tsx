import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const Player = () => {
  return (
    <div className="h-24 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
          alt="Album cover"
          className="h-14 w-14 rounded"
        />
        <div className="ml-4">
          <div className="text-white text-sm">Song Title</div>
          <div className="text-gray-400 text-xs">Artist Name</div>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="bg-white rounded-full p-2 hover:scale-105 transition">
            <Play className="h-5 w-5 text-black" fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full mt-2 flex items-center">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="mx-2 flex-grow">
            <div className="h-1 bg-gray-600 rounded-full">
              <div className="h-1 w-1/3 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/3">
        <Volume2 className="h-5 w-5 text-gray-400" />
        <div className="w-24 ml-2">
          <div className="h-1 bg-gray-600 rounded-full">
            <div className="h-1 w-2/3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;