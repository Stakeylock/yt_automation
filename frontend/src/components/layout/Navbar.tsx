
import React from "react";
import { Bell, Search, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-16 border-b bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search for videos, trends, ideas..."
            className="h-10 w-full rounded-full border bg-secondary pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </button>
          
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
