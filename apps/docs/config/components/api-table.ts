import { ComponentDoc } from "../types";

export const apiTableConfig: ComponentDoc = {
  name: "API Table",
  description:
    "A component for displaying API documentation and properties in a clean, organized table format.",
  status: "stable",
  examples: [
    {
      title: "Default",
      description:
        "A basic API table showing component properties with default values.",
      code: '<ApiTable title="Dialog Component API" description="Core properties for the Dialog component" properties={[{"name":"open","type":"boolean","defaultValue":"false","description":"Controls the open state of the dialog."},{"name":"onOpenChange","type":"(open: boolean) => void","defaultValue":"undefined","description":"Callback fired when the open state changes."},{"name":"modal","type":"boolean","defaultValue":"true","description":"Whether to render the dialog as a modal that blocks interactions with the rest of the app."}]} />',
    },
    {
      title: "Without Default Values",
      description:
        "API table showing event handlers and callbacks without default values.",
      code: `<ApiTable
  title="DataGrid Events"
  description="Event handlers for the DataGrid component"
  properties={[{
    name: "onRowClick",
    type: "(row: Row, event: MouseEvent) => void",
    description: "Called when a row is clicked in the grid."
  }, {
    name: "onSelectionChange",
    type: "(selectedRows: Row[]) => void",
    description: "Called when the selection state changes."
  }, {
    name: "onSortChange",
    type: "(column: Column, direction: 'asc' | 'desc') => void",
    description: "Called when a column's sort direction changes."
  }, {
    name: "onFilterChange",
    type: "(column: Column, value: any) => void",
    description: "Called when a column's filter value changes."
  }, {
    name: "onPageChange",
    type: "(page: number) => void",
    description: "Called when the current page changes."
  }]}
  showDefault={false}
/>`,
    },
    {
      title: "With Complex Types",
      description:
        "API table displaying complex TypeScript types and nested interfaces.",
      code: `<ApiTable
  title="Form Field Props"
  description="Configuration for form field components"
  properties={[{
    name: "field",
    type: \`{
  name: string;
  value: any;
  onChange: (value: any) => void;
  onBlur: () => void;
  error?: string;
}\`,
    description: "Form field control object containing value and handlers."
  }, {
    name: "validation",
    type: \`{
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
}\`,
    defaultValue: "{}",
    description: "Validation rules for the field."
  }, {
    name: "format",
    type: \`{
  parse?: (value: string) => any;
  format?: (value: any) => string;
  placeholder?: string;
  mask?: string;
}\`,
    defaultValue: "{}",
    description: "Value formatting and parsing options."
  }, {
    name: "appearance",
    type: \`{
  variant?: 'outline' | 'filled' | 'standard';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}\`,
    defaultValue: "{ variant: 'outline', size: 'md' }",
    description: "Visual appearance configuration."
  }]}
/>`,
    },
  ],
  props: [
    {
      name: "title",
      type: "string",
      description: "The title displayed above the table.",
      default: "undefined",
    },
    {
      name: "description",
      type: "string",
      description: "Optional description text displayed below the title.",
      default: "undefined",
    },
    {
      name: "properties",
      type: "Property[]",
      description: "Array of properties to display in the table.",
      default: "[]",
      required: true,
    },
    {
      name: "showDefault",
      type: "boolean",
      description: "Whether to show the default value column.",
      default: "true",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the container.",
      default: "undefined",
    },
  ],
  metadata: {
    sourceUrl: "components/core/APITable.tsx",
    package: "@aviris/ui",
  },
};
