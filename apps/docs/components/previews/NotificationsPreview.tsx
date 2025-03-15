import { Notifications } from "@aviris/ui/components/core/Notifications";
import { toast } from "sonner";
import { useState } from "react";

export function NotificationsPreview() {
  const [show, setShow] = useState(true);

  return (
    <div className="space-y-4">
      <Notifications show={show} />
      <div className="flex gap-4">
        <button
          onClick={() => {
            setShow(!show);
            toast.success(
              show ? "Notifications hidden" : "Notifications shown",
            );
          }}
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          {show ? "Hide" : "Show"} Notifications
        </button>
        <button
          onClick={() => {
            toast.info("This is a test notification");
          }}
          className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/90"
        >
          Show Test Notification
        </button>
      </div>
    </div>
  );
}
