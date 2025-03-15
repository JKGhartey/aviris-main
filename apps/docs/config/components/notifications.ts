import { ComponentDoc } from "../types";

export const notificationsConfig: ComponentDoc = {
  name: "Notifications",
  description:
    "A flexible notification system with animations and multiple notification types.",
  status: "stable",
  examples: [
    {
      title: "Basic Example",
      description: "A simple notification component with default settings.",
      code: `import { Notifications } from "@aviris/ui/components/notifications"

export default function NotificationsExample() {
  return (
    <Notifications />
  )
}`,
    },
    {
      title: "Advanced Example",
      description:
        "Notifications with custom settings and different positions.",
      code: `import { Notifications, useNotifications } from "@aviris/ui/components/notifications"

export default function AdvancedNotifications() {
  const { showNotification } = useNotifications();

  return (
    <div className="space-y-4">
      <Notifications
        position="top-right"
        theme="light"
        duration={5000}
        richColors
        expandOnHover
      />
      
      <div className="space-x-2">
        <button
          onClick={() => showNotification("Success!", {
            type: "success",
            title: "Operation completed",
            description: "Your changes have been saved successfully."
          })}
        >
          Show Success
        </button>
        
        <button
          onClick={() => showNotification("Error!", {
            type: "error",
            title: "Operation failed",
            description: "Something went wrong. Please try again."
          })}
        >
          Show Error
        </button>
        
        <button
          onClick={() => showNotification("Info", {
            type: "info",
            title: "New update",
            description: "A new version is available."
          })}
        >
          Show Info
        </button>
      </div>
    </div>
  )
}`,
    },
  ],
  props: [
    {
      name: "show",
      type: "boolean",
      default: "true",
      description: "Whether to show the notifications",
    },
    {
      name: "position",
      type: '"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"',
      default: '"top-right"',
      description: "Position of the notifications",
    },
    {
      name: "theme",
      type: '"light" | "dark" | "system"',
      default: '"system"',
      description: "Theme of the notifications",
    },
    {
      name: "duration",
      type: "number",
      default: "4000",
      description: "Duration of the notifications in milliseconds",
    },
    {
      name: "closeButton",
      type: "boolean",
      default: "true",
      description: "Whether to show close button",
    },
    {
      name: "showProgress",
      type: "boolean",
      default: "true",
      description: "Whether to show progress bar",
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      default: "true",
      description: "Whether to pause on hover",
    },
    {
      name: "expandOnHover",
      type: "boolean",
      default: "true",
      description: "Whether to expand on hover",
    },
    {
      name: "richColors",
      type: "boolean",
      default: "true",
      description: "Whether to use rich colors",
    },
    {
      name: "invert",
      type: "boolean",
      default: "false",
      description: "Whether to invert colors",
    },
  ],
};
