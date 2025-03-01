"use client";

import * as React from "react";
import { useCallback, useState } from "react";
import { cn } from "../../lib/utils";
import { Upload, X, FileIcon, ImageIcon, AlertCircle } from "lucide-react";

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accept specific file types */
  accept?: string;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Whether to allow multiple file selection */
  multiple?: boolean;
  /** Callback when files are added */
  onFilesAdded?: (files: File[]) => void;
  /** Callback when a file is removed */
  onFileRemoved?: (file: File) => void;
  /** Whether to show preview for images */
  showPreview?: boolean;
  /** Custom validation function */
  validate?: (file: File) => string | null;
}

export interface FileWithPreview extends File {
  preview?: string;
}

export const useFileUpload = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (
    file: File,
    maxSize?: number,
    validate?: (file: File) => string | null,
  ) => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${Math.round(maxSize / 1024 / 1024)}MB limit`;
    }
    if (validate) {
      return validate(file);
    }
    return null;
  };

  const addFiles = useCallback(
    (newFiles: FileWithPreview[], maxFiles?: number) => {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        newFiles.forEach((file) => {
          if (!maxFiles || updatedFiles.length < maxFiles) {
            if (file.type.startsWith("image/")) {
              file.preview = URL.createObjectURL(file);
            }
            updatedFiles.push(file);
          }
        });
        return updatedFiles;
      });
    },
    [],
  );

  const removeFile = useCallback((fileToRemove: File) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file !== fileToRemove);
      if ((fileToRemove as FileWithPreview).preview) {
        URL.revokeObjectURL((fileToRemove as FileWithPreview).preview!);
      }
      return updatedFiles;
    });
  }, []);

  return {
    files,
    error,
    isDragging,
    setError,
    setIsDragging,
    addFiles,
    removeFile,
    validateFile,
  };
};

const FilePreview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    file: FileWithPreview;
    onRemove: () => void;
  }
>(({ file, onRemove, className, ...props }, ref) => {
  const isImage = file.type.startsWith("image/");

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center gap-2 rounded-md border bg-background p-2",
        className,
      )}
      {...props}
    >
      {isImage && file.preview ? (
        <img
          src={file.preview}
          alt={file.name}
          className="h-10 w-10 rounded-md object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
          {isImage ? (
            <ImageIcon className="h-5 w-5 text-muted-foreground" />
          ) : (
            <FileIcon className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-medium">{file.name}</p>
        <p className="text-xs text-muted-foreground">
          {Math.round(file.size / 1024)}KB
        </p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="rounded-md p-1 hover:bg-muted"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Remove file</span>
      </button>
    </div>
  );
});

FilePreview.displayName = "FilePreview";

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept,
      maxSize,
      maxFiles = 1,
      multiple = false,
      onFilesAdded,
      onFileRemoved,
      showPreview = true,
      validate,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      files,
      error,
      isDragging,
      setError,
      setIsDragging,
      addFiles,
      removeFile,
      validateFile,
    } = useFileUpload();

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      setError(null);

      const droppedFiles = Array.from(e.dataTransfer.files);
      if (!multiple && droppedFiles.length > 1) {
        setError("Only one file can be uploaded at a time");
        return;
      }

      const validFiles: FileWithPreview[] = [];
      droppedFiles.forEach((file) => {
        const error = validateFile(file, maxSize, validate);
        if (error) {
          setError(error);
        } else {
          validFiles.push(file);
        }
      });

      if (validFiles.length > 0) {
        addFiles(validFiles, maxFiles);
        onFilesAdded?.(validFiles);
      }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);
      const validFiles: FileWithPreview[] = [];

      selectedFiles.forEach((file) => {
        const error = validateFile(file, maxSize, validate);
        if (error) {
          setError(error);
        } else {
          validFiles.push(file);
        }
      });

      if (validFiles.length > 0) {
        addFiles(validFiles, maxFiles);
        onFilesAdded?.(validFiles);
      }
    };

    const handleRemove = (file: File) => {
      removeFile(file);
      onFileRemoved?.(file);
    };

    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors",
            isDragging
              ? "border-primary/50 bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5",
          )}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <Upload className="h-10 w-10 text-muted-foreground" />
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">
                Drag & drop your files here, or{" "}
                <label className="cursor-pointer text-primary hover:underline">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileSelect}
                  />
                </label>
              </p>
              <p className="text-xs text-muted-foreground">
                {multiple
                  ? `Upload up to ${maxFiles} files`
                  : "Upload a single file"}
                {maxSize &&
                  ` (max ${Math.round(maxSize / 1024 / 1024)}MB per file)`}
              </p>
              {accept && (
                <p className="text-xs text-muted-foreground">
                  Accepted formats: {accept}
                </p>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}

        {showPreview && files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <FilePreview
                key={file.name}
                file={file}
                onRemove={() => handleRemove(file)}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

FileUpload.displayName = "FileUpload";
