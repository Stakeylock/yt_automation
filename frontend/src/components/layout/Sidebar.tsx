
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  PlayCircle,
  Video,
  UserCircle,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      icon: Home, 
      name: "Dashboard", 
      path: "/" 
    },
    { 
      icon: Video, 
      name: "Video Workflow", 
      path: "/workflow" 
    },
    { 
      icon: PlayCircle, 
      name: "Trending", 
      path: "/trending" 
    },
    { 
      icon: UserCircle, 
      name: "Profile", 
      path: "/profile" 
    },
    { 
      icon: Settings, 
      name: "Settings", 
      path: "/settings" 
    },
  ];
  
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card shadow-sm transition-all duration-300">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Video className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">TrendWise</span>
        </Link>
      </div>
      
      <nav className="px-2 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
