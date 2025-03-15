"use client";

import * as React from "react";

import { AlertCircle, CheckCircle, File, UploadCloud, X } from "lucide-react";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { cn } from "../../lib/utils";
import { useDropzone } from "react-dropzone";

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
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = {
    "image/*": [],
    "application/pdf": [],
  },
  disabled = false,
  value,
  onFilesChange,
  children,
  icon = <UploadCloud className="h-6 w-6 text-primary" />,
  primaryText,
  secondaryText = "or click to browse files",
  hideFileCount = false,
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
        status: "idle" as FileStatus,
        progress: 0,
        // Explicitly preserve File properties
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      })) as FileWithPreview[];

      const updatedFiles = [...files, ...newFiles];
      onFilesChange?.(updatedFiles);
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
    <div
      {...getRootProps()}
      className={cn(
        "relative flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-6 text-center transition-colors hover:border-primary/50",
        isDragActive && "border-primary/50 bg-primary/5",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
      {...props}
    >
      <input {...getInputProps()} />

      {children || (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>

          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">
              {isDragActive
                ? "Drop the files here"
                : primaryText || "Drag & drop files here"}
            </p>
            <p className="text-xs text-muted-foreground">{secondaryText}</p>
          </div>

          {!hideFileCount && files.length > 0 && (
            <p className="text-xs text-muted-foreground">
              {files.length} of {maxFiles} files selected
            </p>
          )}
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
  renderRemoveButton,
  renderProgress,
  hideRemoveButton = false,
  className,
  ...props
}: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {files.map((file) =>
        renderFile ? (
          renderFile(file)
        ) : (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-background">
                {file.type && file.type.startsWith("image/") ? (
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="h-full w-full rounded-md object-cover"
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview);
                    }}
                  />
                ) : (
                  <File className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="truncate text-sm font-medium">{file.name}</p>
                  {file.status === "success" && (
                    <CheckCircle className="h-4 w-4 text-success" />
                  )}
                  {file.status === "error" && (
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>

            {file.status === "uploading" ? (
              renderProgress ? (
                renderProgress(file)
              ) : (
                <Progress value={file.progress} className="h-2 w-20" />
              )
            ) : !hideRemoveButton ? (
              renderRemoveButton ? (
                renderRemoveButton(file)
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onRemove?.(file)}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              )
            ) : null}
          </div>
        ),
      )}
    </div>
  );
}
