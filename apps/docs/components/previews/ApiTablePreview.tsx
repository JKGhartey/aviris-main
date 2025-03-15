import { ApiTable } from "@aviris/ui/components/core/APITable";

const API_TABLE_PROPERTIES = [
  {
    name: "id",
    type: "string",
    description: "Unique identifier for the resource",
    defaultValue: "undefined",
  },
  {
    name: "title",
    type: "string",
    description: "Title of the resource",
    defaultValue: "undefined",
  },
  {
    name: "description",
    type: "string",
    description: "Detailed description of the resource",
    defaultValue: "undefined",
  },
  {
    name: "createdAt",
    type: "Date",
    description: "When the resource was created",
    defaultValue: "undefined",
  },
];

export const ApiTablePreview = () => (
  <ApiTable properties={API_TABLE_PROPERTIES} />
);
