
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { workflowSteps } from "@/lib/mockData";
import WorkflowStep from "@/components/workflow/WorkflowStep";
import { toast } from "sonner";

const VideoWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepComplete = () => {
    if (!completedSteps.includes(activeStep)) {
      setCompletedSteps([...completedSteps, activeStep]);
    }
    
    if (activeStep < workflowSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleDownload = () => {
    toast.success("Document generated! Downloading...");
    // In a real application, this would generate and download a document
  };

  return (
    <div className="px-6 pt-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Video Production Workflow</h1>
        {completedSteps.length > 0 && (
          <Button 
            onClick={handleDownload}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Document
          </Button>
        )}
      </div>
      
      <div className="space-y-6">
        {workflowSteps.map((step, index) => (
          <WorkflowStep
            key={step.id}
            step={step}
            isActive={activeStep === index || completedSteps.includes(index)}
            onComplete={handleStepComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoWorkflow;
