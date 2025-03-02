import { cn } from "@aviris/ui/lib/utils";

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Steps({ children, className }: StepsProps) {
  return <div className={cn("space-y-8", className)}>{children}</div>;
}

function Step({ title, children, className }: StepProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

Steps.Step = Step;

export { Steps };
