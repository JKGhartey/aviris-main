import { ComponentDoc } from "../types";

export const fileUploadConfig: ComponentDoc = {
  name: "File Upload",
  description:
    "A versatile file upload component with drag and drop support, file validation, and preview capabilities.",
  status: "stable",
  examples: [
    {
      title: "Image Upload",
      description:
        "A file upload component configured for image files with preview support.",
      code: `import { FileUpload } from "@aviris/ui/components/core/FileUpload"
import { useState } from "react"

export default function ImageUploadExample() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileUpload
      accept="image/*"
      maxSize={5000000}
      multiple={true}
      maxFiles={5}
      showPreview={true}
      validate={(file) => {
        if (!file.type.startsWith("image/")) {
          return "Only image files are allowed"
        }
        return null
      }}
      onFilesAdded={(newFiles) => {
        setFiles((prev) => [...prev, ...newFiles])
      }}
      onFileRemoved={(file) => {
        setFiles((prev) => prev.filter((f) => f !== file))
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
      name: "maxFiles",
      type: "number",
      default: "undefined",
      description: "Maximum number of files that can be uploaded",
    },
    {
      name: "showPreview",
      type: "boolean",
      default: "false",
      description: "Whether to show preview for image files",
    },
    {
      name: "validate",
      type: "(file: File) => string | null",
      default: "undefined",
      description:
        "Custom validation function that returns an error message or null",
    },
    {
      name: "onFilesAdded",
      type: "(files: File[]) => void",
      default: "undefined",
      description: "Callback when files are added",
      required: true,
    },
    {
      name: "onFileRemoved",
      type: "(file: File) => void",
      default: "undefined",
      description: "Callback when a file is removed",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes",
    },
  ],
  metadata: {
    sourceUrl: "components/core/FileUpload.tsx",
    package: "@aviris/ui",
  },
};
