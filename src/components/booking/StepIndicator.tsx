import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  completed: boolean;
  active: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
}

const StepIndicator = ({ steps }: StepIndicatorProps) => {
  return (
    <div className="mb-12">
      <div className="relative flex items-center justify-between">
        {/* Progress Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-full bg-border">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out origin-left"
            style={{ 
              transform: `scaleX(${steps.filter(s => s.completed).length / (steps.length - 1)})`,
            }}
          />
        </div>
        
        {/* Steps */}
        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col items-center gap-3 z-10">
            <div
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-300",
                step.completed
                  ? "bg-gradient-to-br from-primary to-secondary text-white shadow-glow scale-110"
                  : step.active
                  ? "bg-primary/10 text-primary border-2 border-primary animate-pulse-glow"
                  : "bg-background text-muted-foreground border-2 border-border"
              )}
            >
              {step.completed ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <span className="text-lg">{step.number}</span>
              )}
            </div>
            <span
              className={cn(
                "text-sm font-medium transition-colors absolute top-16 whitespace-nowrap",
                step.completed || step.active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
