"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface TeamImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  width?: number;
  height?: number;
  className?: string;
}

export function TeamImage({
  src,
  alt,
  fallbackSrc,
  width = 200,
  height = 200,
  className = "",
}: TeamImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  
  // Reset error state if src changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
    />
  );
} 