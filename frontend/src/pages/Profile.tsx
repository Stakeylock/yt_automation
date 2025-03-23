
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Link, Youtube } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import { channelStats } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const Profile = () => {
  return (
    <div className="px-6 pt-6">
      <h1 className="mb-6 text-2xl font-bold">Profile</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-1 space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-secondary">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-primary-foreground shadow-sm">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              
              <h2 className="text-xl font-semibold">Alex Johnson</h2>
              <p className="text-sm text-muted-foreground">YouTube Creator</p>
              
              <div className="mt-4 flex w-full items-center gap-2">
                <Button className="flex items-center gap-2 w-full" size="sm">
                  <Youtube className="h-4 w-4" />
                  Connect YouTube
                </Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">Social Links</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Youtube className="h-5 w-5 text-youtube" />
                <Input 
                  placeholder="YouTube Channel URL" 
                  defaultValue="https://youtube.com/c/alexjohnson"
                />
              </div>
              <div className="flex items-center gap-3">
                <Link className="h-5 w-5" />
                <Input 
                  placeholder="Website URL" 
                  defaultValue="https://alexjohnson.com"
                />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">Channel Statistics</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {channelStats.map((stat) => (
                <StatCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={<stat.icon className="h-5 w-5" />}
                  className={stat.color}
                />
              ))}
            </div>
          </div>
          
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">Account Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First Name
                  </label>
                  <Input defaultValue="Alex" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>
                  <Input defaultValue="Johnson" />
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <Input defaultValue="alex@example.com" type="email" />
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Channel Name
                  </label>
                  <Input defaultValue="Alex Johnson" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Channel Category
                  </label>
                  <Input defaultValue="Technology & Education" />
                </div>
              </div>
              
              <Button className="w-full">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
