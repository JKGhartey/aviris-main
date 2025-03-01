import { ComponentDoc } from "../types";

export const fileUploadConfig: ComponentDoc = {
  name: "File Upload",
  description:
    "A versatile file upload component with drag and drop support, file validation, and progress tracking.",
  status: "stable",
  examples: [
    {
      title: "Basic Example",
      description: "A simple file upload component that accepts image files.",
      code: `import { FileUpload } from "@aviris/ui/components/file-upload"

export default function FileUploadExample() {
  return (
    <FileUpload
      accept="image/*"
      maxSize={5000000}
      onUpload={(files) => console.log(files)}
    />
  )
}`,
    },
    {
      title: "Advanced Example",
      description: "File upload with validation and multiple file support.",
      code: `import { FileUpload } from "@aviris/ui/components/file-upload"

export default function AdvancedFileUpload() {
  return (
    <FileUpload
      accept=".pdf,.doc,.docx"
      maxSize={10000000}
      multiple={true}
      onUpload={(files) => handleFiles(files)}
      validation={{
        maxFiles: 3,
        allowedTypes: ['application/pdf', 'application/msword']
      }}
    />
  )
}`,
    },
  ],
  props: [
    {
      name: "accept",
      type: "string",
      default: "undefined",
      description: "File types to accept (e.g., 'image/*', '.pdf')",
    },
    {
      name: "maxSize",
      type: "number",
      default: "undefined",
      description: "Maximum file size in bytes",
    },
    {
      name: "multiple",
      type: "boolean",
      default: "false",
      description: "Allow multiple file selection",
    },
    {
      name: "onUpload",
      type: "(files: File[]) => void",
      default: "undefined",
      description: "Callback function when files are uploaded",
      required: true,
    },
  ],
};
