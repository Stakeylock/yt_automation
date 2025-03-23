
import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  className?: string;
}

const StatCard = ({ title, value, icon, change = 0, className }: StatCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md",
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">{value}</h3>
          
          {change !== undefined && (
            <div className="mt-2 flex items-center">
              {isPositive ? (
                <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span
                className={cn(
                  "text-xs font-medium",
                  isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {Math.abs(change)}% from last month
              </span>
            </div>
          )}
        </div>
        
        <div className="rounded-full p-3 bg-secondary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
