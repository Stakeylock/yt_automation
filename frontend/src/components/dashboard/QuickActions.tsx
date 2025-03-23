
import React from "react";
import { Link } from "react-router-dom";
import { quickActions } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const QuickActions = () => {
  return (
    <section className="mb-8 animate-fade-in">
      <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            to={action.path}
            className={cn(
              "group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md",
              action.color
            )}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <action.icon className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="mb-1 text-lg font-medium">{action.title}</h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
