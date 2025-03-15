"use client";

import * as React from "react";

import {
  ArchiveIcon,
  CodeIcon,
  ExcelIcon,
  PDFIcon,
  PowerPointIcon,
  TextIcon,
  WordIcon,
} from "../icons";
import { File, UploadCloud, X } from "lucide-react";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { cn } from "../../lib/utils";
import { useDropzone } from "react-dropzone";

// Import icons individually to avoid potential path issues

export type FileStatus = "idle" | "uploading" | "success" | "error";

export interface FileWithPreview extends File {
  preview: string;
  id: string;
  status: FileStatus;
  progress: number;
  errorMessage?: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

// Shared utility functions
const getFileIcon = (file: FileWithPreview) => {
  if (file.type.startsWith("image/"))
    return (
      <img
        src={file.preview}
        alt={file.name}
        className="h-full w-full rounded-md object-cover"
      />
    );
  return (
    <FileTypeIcon type={file.type} className="h-5 w-5 text-muted-foreground" />
  );
};

const FileTypeIcon = ({
  type,
  className,
}: {
  type: string;
  className?: string;
}) => {
  // Document types
  if (type.includes("pdf")) {
    return <PDFIcon className={className} />;
  }

  if (
    type.includes("msword") ||
    type.includes("wordprocessingml") ||
    type.includes("doc") ||
    type.includes("docx")
  ) {
    return <WordIcon className={className} />;
  }

  if (
    type.includes("spreadsheet") ||
    type.includes("excel") ||
    type.includes("xls")
  ) {
    return <ExcelIcon className={className} />;
  }

  if (
    type.includes("presentation") ||
    type.includes("powerpoint") ||
    type.includes("ppt")
  ) {
    return <PowerPointIcon className={className} />;
  }

  // Archive types
  if (
    type.includes("zip") ||
    type.includes("rar") ||
    type.includes("7z") ||
    type.includes("tar") ||
    type.includes("gz")
  ) {
    return <ArchiveIcon className={className} />;
  }

  // Code files
  if (
    type.includes("javascript") ||
    type.includes("typescript") ||
    type.includes("json") ||
    type.includes("html") ||
    type.includes("css")
  ) {
    return <CodeIcon className={className} />;
  }

  // Text files
  if (
    type.includes("text") ||
    type.includes("txt") ||
    type.includes("rtf") ||
    type.includes("md")
  ) {
    return <TextIcon className={className} />;
  }

  // Default file icon for unknown types
  return <File className={className} />;
};

// --------------------------------
// FileUpload Component
// --------------------------------

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of files allowed */
  maxFiles?: number;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Accepted file types */
  accept?: Record<string, string[]>;
  /** Disable the upload zone */
  disabled?: boolean;
  /** Currently selected files */
  value?: FileWithPreview[];
  /** Called when files are added or removed */
  onFilesChange?: (files: FileWithPreview[]) => void;
  /** Custom content for the upload zone */
  children?: React.ReactNode;
  /** Custom icon component */
  icon?: React.ReactNode;
  /** Primary text in upload zone */
  primaryText?: string;
  /** Secondary text in upload zone */
  secondaryText?: string;
  /** Hide the file count */
  hideFileCount?: boolean;
}

export function FileUpload({
  maxFiles = 5,
  maxSize = 1024 * 1024 * 1024, // 1GB
  accept = {
    "image/*": [],
    "application/pdf": [],
    "application/zip": [],
  },
  disabled = false,
  value,
  onFilesChange,
  children,
  icon = <UploadCloud className="h-8 w-8 text-primary" />,
  primaryText = "Drop your files here or browse",
  secondaryText = "Max file size up to 1 GB",
  hideFileCount = true,
  className,
  ...props
}: FileUploadProps) {
  const files = value || [];

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (files.length + acceptedFiles.length > maxFiles) {
        console.error(`You can only upload up to ${maxFiles} files`);
        return;
      }

      const newFiles = acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
        id: crypto.randomUUID(),
        status: "uploading" as FileStatus,
        progress: 0,
        // Explicitly preserve File properties
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      })) as FileWithPreview[];

      const updatedFiles = [...files, ...newFiles];
      onFilesChange?.(updatedFiles);

      // Simulate upload progress for each file
      newFiles.forEach((file) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 5;
          if (progress >= 100) {
            clearInterval(interval);
            const updatedFile = {
              ...file,
              status: "success" as FileStatus,
              progress: 100,
            };
            onFilesChange?.(
              updatedFiles.map((f) => (f.id === file.id ? updatedFile : f)),
            );
          } else {
            const updatedFile = { ...file, progress };
            onFilesChange?.(
              updatedFiles.map((f) => (f.id === file.id ? updatedFile : f)),
            );
          }
        }, 100);
      });
    },
    [files, maxFiles, onFilesChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    maxFiles: maxFiles - files.length,
    accept,
    disabled: disabled || files.length >= maxFiles,
  });

  // Clean up previews when component unmounts
  React.useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div
        {...getRootProps()}
        className={cn(
          "relative flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-background p-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/10",
          isDragActive && "border-primary/50 bg-primary/5",
          disabled && "cursor-not-allowed opacity-60",
          className,
        )}
        {...props}
      >
        <input {...getInputProps()} />

        {children || (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              {icon}
            </div>

            <div className="flex flex-col space-y-1">
              <p className="text-base font-medium">
                {isDragActive ? "Drop the files here" : primaryText}
              </p>
              <p className="text-sm text-muted-foreground">{secondaryText}</p>
            </div>
          </div>
        )}
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-medium">Uploads</h3>
          <FileList
            files={files}
            onRemove={
              onFilesChange &&
              ((file) => {
                const newFiles = files.filter((f) => f.id !== file.id);
                onFilesChange(newFiles);
              })
            }
          />
        </div>
      )}
    </div>
  );
}

// --------------------------------
// FileList Component
// --------------------------------

export interface FileListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Files to display */
  files: FileWithPreview[];
  /** Called when a file is removed */
  onRemove?: (file: FileWithPreview) => void;
  /** Whether the list is in a loading state */
  isLoading?: boolean;
  /** Custom renderer for file items */
  renderFile?: (file: FileWithPreview) => React.ReactNode;
  /** Custom renderer for the remove button */
  renderRemoveButton?: (file: FileWithPreview) => React.ReactNode;
  /** Custom renderer for the progress indicator */
  renderProgress?: (file: FileWithPreview) => React.ReactNode;
  /** Hide the remove button */
  hideRemoveButton?: boolean;
}

export function FileList({
  files,
  onRemove,
  isLoading,
  renderFile,
  // renderRemoveButton,
  // renderProgress,
  hideRemoveButton = false,
  className,
  ...props
}: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {files.map((file) =>
        renderFile ? (
          renderFile(file)
        ) : (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-lg border bg-background p-3 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-muted/30 font-medium text-xs">
                {getFileIcon(file)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(1)} MB
                </p>
                {file.status === "uploading" && (
                  <>
                    <Progress value={file.progress} className="h-1 mt-2" />
                    {console.log("Progress:", file.progress)}
                  </>
                )}
              </div>
            </div>

            {!hideRemoveButton && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 ml-2"
                onClick={() => onRemove?.(file)}
                disabled={isLoading}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            )}
          </div>
        ),
      )}
    </div>
  );
}
