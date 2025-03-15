import { Notifications } from "@aviris/ui/components/core/Notifications";
import { toast } from "sonner";

export const NotificationsPreview = () => (
  <>
    <Notifications />
    <div className="mt-4 flex gap-2">
      <button
        onClick={() =>
          toast.info("New message", {
            description: "You have a new message from John Doe",
          })
        }
        className="rounded-md bg-primary px-3 py-2 text-sm text-white"
      >
        Show Info
      </button>
      <button
        onClick={() =>
          toast.success("Success", {
            description: "Your changes have been saved",
          })
        }
        className="rounded-md bg-primary px-3 py-2 text-sm text-white"
      >
        Show Success
      </button>
    </div>
  </>
);
