import {
  FileList,
  FileUpload,
  FileWithPreview,
} from "@aviris/ui/components/core/FileUpload";

import { Button } from "@aviris/ui/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

export function FileUploadPreview() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    if (files.length === 0 || isUploading) return;

    setIsUploading(true);

    try {
      // Simulate upload progress with smoother animation
      const uploadPromise = new Promise<void>((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
          // Slower initial progress, faster towards the end
          const increment = progress < 50 ? 2 : 4;
          progress += increment;

          setFiles((prev) =>
            prev.map((file) => ({
              ...file,
              status: "uploading" as const,
              progress: Math.min(progress, 98), // Cap at 98% until complete
            })),
          );

          if (progress >= 98) {
            clearInterval(interval);
            resolve();
          }
        }, 150); // Slower interval for smoother animation
      });

      await uploadPromise;

      // Set final progress and success state
      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: "success" as const,
          progress: 100,
        })),
      );

      toast.success("Files uploaded successfully");
    } catch (error) {
      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: "error" as const,
          progress: 0,
          errorMessage: "Upload failed",
        })),
      );
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = (file: FileWithPreview) => {
    setFiles((prev) => {
      const newFiles = prev.filter((f) => f.id !== file.id);
      toast.info("File removed");
      return newFiles;
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <FileUpload
          maxFiles={5}
          maxSize={5 * 1024 * 1024} // 5MB
          accept={{
            "image/*": [],
            "application/pdf": [],
          }}
          value={files}
          onFilesChange={setFiles}
          disabled={isUploading}
          primaryText="Drop your files here"
          secondaryText="Supports images and PDFs up to 5MB"
        />

        {files.length > 0 && (
          <div className="space-y-4">
            <FileList
              files={files}
              onRemove={handleRemove}
              isLoading={isUploading}
              renderProgress={(file) => (
                <div className="w-32">
                  <div className="mb-1 text-xs text-muted-foreground">
                    {file.progress}%
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                </div>
              )}
            />
            <Button
              onClick={handleUpload}
              disabled={isUploading || files.length === 0}
              className="w-full"
            >
              {isUploading ? "Uploading..." : "Upload Files"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
