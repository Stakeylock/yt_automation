
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";

const Settings = () => {
  return (
    <div className="px-6 pt-6">
      <h1 className="mb-6 text-2xl font-bold">Settings</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Appearance</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="theme">Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Select your preferred theme
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Sun className="h-4 w-4" />
                <Switch id="theme" />
                <Moon className="h-4 w-4" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="accent-color">Accent Color</Label>
              <Select defaultValue="blue">
                <SelectTrigger id="accent-color">
                  <SelectValue placeholder="Select accent color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="font-size">Font Size</Label>
              <Select defaultValue="medium">
                <SelectTrigger id="font-size">
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Notifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications via email
                </p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="trending-alerts">Trending Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about trending topics
                </p>
              </div>
              <Switch id="trending-alerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="performance-updates">Performance Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about your video performance
                </p>
              </div>
              <Switch id="performance-updates" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="new-features">New Features</Label>
                <p className="text-sm text-muted-foreground">
                  Be the first to know about new features
                </p>
              </div>
              <Switch id="new-features" />
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">AI Model Settings</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ai-model">AI Model</Label>
              <Select defaultValue="gpt4">
                <SelectTrigger id="ai-model">
                  <SelectValue placeholder="Select AI model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt4">GPT-4 (Recommended)</SelectItem>
                  <SelectItem value="gpt3">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude">Claude 2</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                More advanced models may use more credits
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="creativity">Creativity Level</Label>
              <Input
                id="creativity"
                type="range"
                min="0"
                max="100"
                defaultValue="70"
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Conservative</span>
                <span>Balanced</span>
                <span>Creative</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="api-key">Custom OpenAI API Key (Optional)</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="sk-..."
              />
              <p className="text-xs text-muted-foreground">
                Use your own API key for reduced costs and higher limits
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Privacy & Security</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-collection">Data Collection</Label>
                <p className="text-sm text-muted-foreground">
                  Allow anonymous usage data collection to improve the platform
                </p>
              </div>
              <Switch id="data-collection" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch id="two-factor" />
            </div>
            
            <div className="mt-6">
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
              <p className="mt-2 text-xs text-muted-foreground text-center">
                This action is irreversible and will delete all your data
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button className="px-8">Save All Settings</Button>
      </div>
    </div>
  );
};

export default Settings;
