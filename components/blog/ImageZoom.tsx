"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { createPortal } from "react-dom";
import { CloseIcon } from "../icons";
import styles from "../../styles/ImageZoom.module.css";

export default function ImageZoom({
  src,
  alt,
  className,
  width,
  height,
  priority,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.zoomTrigger}
        onClick={() => setOpen(true)}
        aria-label={`View image larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          priority={priority}
          unoptimized
        />
      </button>

      {open &&
        createPortal(
          <div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <div
              className={styles.dialog}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                aria-label="Close image view"
                onClick={() => setOpen(false)}
                autoFocus
              >
                <CloseIcon />
              </button>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={styles.dialogImage}
                unoptimized
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
