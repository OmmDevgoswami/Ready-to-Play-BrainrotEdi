import React from "react"
import { useState } from "react"
import { VenueFinder } from "./VenueFinder.css"



import "./style.css";


export const MyPlugin = () => {
  return (
    <div id="app">
                    <div className="w-full max-w-[1200px] m-auto bg-black text-white shadow-lg rounded-lg">    <div className="flex justify-between items-center px-6 py-4 bg-green-500">
            <span className="text-white font-title text-xl">Ready to Play</span>
            <div className="flex justify-center w-full gap-3">
              <span className="material-symbols-outlined text-white">circle</span>
              <span className="material-symbols-outlined text-white">circle</span>
              <span className="material-symbols-outlined text-white">circle</span>
              <span className="material-symbols-outlined text-white">circle</span>
            </div>
          </div>
          <header className="flex justify-between px-6 py-4 bg-black text-white items-center">
            <span className="font-title text-2xl">Venue Finder</span>
          </header>
          <main className="p-6 grid grid-cols-3 gap-6 relative">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative flex items-center space-x-4 cursor-pointer group"
              >
                <div className="bg-gray-300 text-center py-4 px-6 rounded-md hover:bg-gray-400 relative group-hover:z-10">
                  Location - {index + 1}
                </div>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 bg-green-200 shadow-lg rounded-lg p-6 w-[260px] h-[200px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:z-10 flex flex-col items-center">
                 
                  <p className="text-sm text-center text-black mb-2">
                    A Brief Description of the Event
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {["Slot-1", "Slot-2", "Slot-3", "Slot-4"].map((slot, i) => (
                      <div
                        key={i}
                        className="bg-gray-300 text-center py-2 rounded-xs text-sm"
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </main>
          <footer className="flex justify-between items-center p-4 bg-green-500 relative">
            <div className="flex justify-center w-full gap-2">
              <span className="material-symbols-outlined text-green-950 cursor-pointer">circle</span>
              <span className="material-symbols-outlined text-green-950 cursor-pointer">circle</span>
              <span className="material-symbols-outlined text-green-950 cursor-pointer">circle</span>
              <span className="material-symbols-outlined text-green-950 cursor-pointer">circle</span>
            </div>
            <span className="material-symbols-outlined text-white cursor-pointer absolute right-6 bottom-4">
              star
            </span>
          </footer>
        </div>
                </div>
  )
}

