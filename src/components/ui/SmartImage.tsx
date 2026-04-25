"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SmartImage({
  src,
  alt,
  sizes,
  priority,
  className,
  imageClassName,
  fallback,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("absolute inset-0", className)}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
          onError={() => setFailed(true)}
        />
      ) : null}
      {failed ? <div className="absolute inset-0 h-full w-full">{fallback}</div> : null}
    </div>
  );
}
