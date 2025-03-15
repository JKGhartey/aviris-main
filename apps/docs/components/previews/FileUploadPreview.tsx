import {
  FileUpload,
  FileWithPreview,
} from "@aviris/ui/components/core/FileUpload";

import { useState } from "react";

export const FileUploadPreview = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const handleFilesChange = (newFiles: FileWithPreview[]) => {
    setFiles(newFiles);
    newFiles
      .filter((file) => file.status === "idle")
      .forEach((file) => {
        const updatedFile = { ...file, status: "uploading" as const };
        setFiles((prev) =>
          prev.map((f) => (f.id === file.id ? updatedFile : f)),
        );

        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          if (progress <= 100) {
            setFiles((prev) =>
              prev.map((f) => (f.id === file.id ? { ...f, progress } : f)),
            );
          } else {
            clearInterval(interval);
            setFiles((prev) =>
              prev.map((f) =>
                f.id === file.id
                  ? { ...f, status: "success" as const, progress: 100 }
                  : f,
              ),
            );
          }
        }, 500);
      });
  };

  return (
    <FileUpload
      value={files}
      onFilesChange={handleFilesChange}
      maxFiles={3}
      maxSize={5 * 1024 * 1024}
      accept={{
        "image/*": [],
        "application/pdf": [],
      }}
    />
  );
};
