import {
  AlertTriangle,
  Bell,
  Check,
  Info,
  Loader2,
  Sparkles,
  X,
} from "lucide-react";
import {
  Notifications,
  useNotifications,
} from "@aviris/ui/components/core/Notifications";

import { Button } from "@aviris/ui/components/ui/button";
import { useState } from "react";

type Position =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export function NotificationsPreview() {
  const { showNotification } = useNotifications();
  const [position, setPosition] = useState<Position>("top-right");

  const positions: Position[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const formatPositionLabel = (pos: Position) =>
    pos
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const showSuccessNotification = () => {
    showNotification("Success!", {
      type: "success",
      description: "Your action was completed successfully.",
      icon: <Check className="h-5 w-5" />,
    });
  };

  const showErrorNotification = () => {
    showNotification("Error!", {
      type: "error",
      description: "Something went wrong. Please try again.",
      action: {
        label: "Retry",
        onClick: () => console.log("Retrying..."),
      },
    });
  };

  const showInfoNotification = () => {
    showNotification("Information", {
      type: "info",
      description: "Here's some useful information for you.",
    });
  };

  const showWarningNotification = () => {
    showNotification("Warning!", {
      type: "warning",
      description: "Please be careful with this action.",
    });
  };

  const showLoadingNotification = () => {
    showNotification("Loading...", {
      type: "loading",
      promise: new Promise((resolve) => setTimeout(resolve, 2000)),
      description: "Your data is being processed.",
    });
  };

  const showCustomNotification = () => {
    showNotification("Custom Notification", {
      type: "custom",
      description: "This is a custom styled notification.",
      icon: <Sparkles className="h-6 w-6 text-primary animate-pulse" />,
      action: {
        label: "Cool!",
        onClick: () => console.log("Custom action clicked"),
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Position Toggle */}
      <div className="space-y-4">
        <span className="text-sm font-medium">Position:</span>
        <div className="grid grid-cols-3 gap-2">
          {positions.map((pos) => (
            <Button
              key={pos}
              variant={position === pos ? "default" : "outline"}
              size="sm"
              onClick={() => setPosition(pos)}
              className="flex items-center justify-center gap-2"
            >
              <Bell
                className={`h-4 w-4 ${position === pos ? "text-primary-foreground" : "text-muted-foreground"}`}
              />
              {formatPositionLabel(pos)}
            </Button>
          ))}
        </div>
      </div>

      {/* Notifications Component */}
      <Notifications position={position} theme="system" richColors />

      {/* Notification Examples */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Button
          onClick={showSuccessNotification}
          className="flex items-center gap-2"
          variant="outline"
        >
          <Check className="h-4 w-4" />
          Success
        </Button>
        <Button
          onClick={showErrorNotification}
          className="flex items-center gap-2"
          variant="outline"
        >
          <X className="h-4 w-4" />
          Error
        </Button>
        <Button
          onClick={showInfoNotification}
          className="flex items-center gap-2"
          variant="outline"
        >
          <Info className="h-4 w-4" />
          Info
        </Button>
        <Button
          onClick={showWarningNotification}
          className="flex items-center gap-2"
          variant="outline"
        >
          <AlertTriangle className="h-4 w-4" />
          Warning
        </Button>
        <Button
          onClick={showLoadingNotification}
          className="flex items-center gap-2"
          variant="outline"
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading
        </Button>
        <Button
          onClick={showCustomNotification}
          className="flex items-center gap-2"
          variant="outline"
        >
          <Sparkles className="h-4 w-4" />
          Custom
        </Button>
      </div>

      {/* Code Example */}
      <div className="rounded-lg border bg-muted/50 p-4">
        <pre className="text-sm">
          <code>{`// Example usage with different positions
<Notifications 
  position="${position}"
  theme="system"
  richColors
/>

// Show a notification
showNotification("Success!", {
  type: "success",
  description: "Your action was completed successfully.",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
});`}</code>
        </pre>
      </div>
    </div>
  );
}
