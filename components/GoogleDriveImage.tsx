import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface GoogleDriveImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

function getGoogleDriveDirectLink(url: string) {
  const fileId = url.match(/\/d\/(.+?)\/view/)?.[1];
  if (!fileId) {
    return "image/messi.jpg";
  }
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

const GoogleDriveImage: React.FC<GoogleDriveImageProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(() => {
    try {
      return getGoogleDriveDirectLink(src);
    } catch (error) {
      console.error("Error processing Google Drive URL:", error);
      return fallbackSrc || "";
    }
  });

  const handleError = () => {
    console.error("Error loading image from Google Drive");
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  if (!imgSrc) {
    return <div>Error loading image</div>;
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      unoptimized
    />
  );
};

export default GoogleDriveImage;
