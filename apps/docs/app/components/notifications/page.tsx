import ComponentTemplate from "~/templates/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | Aviris UI",
  description:
    "A flexible notification system with animations and multiple notification types.",
};

export default function NotificationsPage() {
  return <ComponentTemplate componentId="notifications" />;
}
