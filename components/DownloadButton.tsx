"use client";

import { Button } from "@/components/ui/button";
import { AiOutlineDownload } from "react-icons/ai";

type DownloadButtonProps = {
  fileUrl: string;
  fileName: string;
};

// Helper function to extract Google Drive File ID
const getGoogleDriveFileID = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? match[1] : null;
};

export default function DownloadButton({
  fileUrl,
  fileName,
}: DownloadButtonProps) {
  // Function to handle file download
  const handleDownload = () => {
    const fileID = getGoogleDriveFileID(fileUrl);
    if (fileID) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileID}`;
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${fileName}.pdf`; // Optional: Suggest a default file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Invalid Google Drive link.");
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="flex items-center justify-center bg-[#d9d9d9] font-medium text-primary hover:bg-[rgb(200,200,200)]"
    >
      <span>Download</span>
      <span className="text-2xl">
        <AiOutlineDownload size={22} />
      </span>
    </Button>
  );
}
