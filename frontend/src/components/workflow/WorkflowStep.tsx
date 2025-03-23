
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WorkflowStepData, exampleResults } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface WorkflowStepProps {
  step: WorkflowStepData;
  isActive: boolean;
  onComplete: () => void;
}

const WorkflowStep = ({ step, isActive, onComplete }: WorkflowStepProps) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleGenerate = () => {
    setLoading(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      // @ts-ignore - using mock data
      setResults(exampleResults[step.id]);
      setLoading(false);
    }, 1500);
  };

  const renderResults = () => {
    if (!results) return null;

    if (Array.isArray(results)) {
      return (
        <div className="mt-4 space-y-2">
          {results.map((item, index) => (
            <div key={index} className="rounded-lg border bg-card p-3">
              <p>{item}</p>
            </div>
          ))}
        </div>
      );
    }

    if (typeof results === "object") {
      return (
        <div className="mt-4 rounded-lg border bg-card p-4">
          {Object.entries(results).map(([key, value]) => {
            if (Array.isArray(value)) {
              return (
                <div key={key} className="mb-4">
                  <h4 className="mb-2 font-medium capitalize">{key}:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {(value as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            
            return (
              <div key={key} className="mb-4">
                <h4 className="mb-2 font-medium capitalize">{key}:</h4>
                <p className="text-muted-foreground whitespace-pre-line">{value as string}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return <p>{results}</p>;
  };

  return (
    <div className={cn(
      "mb-6 rounded-xl border bg-card p-6 transition-all duration-300",
      isActive ? "shadow-md" : "opacity-70"
    )}>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <step.icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-medium">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      </div>
      
      {isActive && (
        <div className="animate-fade-in">
          {step.id === "ideation" || step.id === "thumbnail" || step.id === "filming" ? (
            <Input
              placeholder={step.inputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mb-4"
              disabled={loading || !!results}
            />
          ) : (
            <Textarea
              placeholder={step.inputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mb-4 min-h-24"
              disabled={loading || !!results}
            />
          )}
          
          {!results ? (
            <Button 
              onClick={handleGenerate} 
              disabled={!input || loading}
              className="w-full"
            >
              {loading ? "Generating..." : step.buttonText}
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => {
                  setResults(null);
                  setInput("");
                }}
                className="flex-1"
              >
                Reset
              </Button>
              <Button onClick={onComplete} className="flex-1">
                Next Step
              </Button>
            </div>
          )}
          
          {renderResults()}
        </div>
      )}
    </div>
  );
};

export default WorkflowStep;
