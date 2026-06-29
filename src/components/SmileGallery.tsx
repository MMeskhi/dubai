"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a1 1 0 00-2 0v1c-.46 0-.86.003-1.195.031-.395.032-.788.103-1.167.296A3 3 0 00.327 3.638C.134 4.016.063 4.41.031 4.805A9.31 9.31 0 00.003 5.5.5.5 0 00.5 6h17a.5.5 0 00.5-.5 9.31 9.31 0 00-.031-.695 3.78 3.78 0 00-.296-1.167 3 3 0 00-1.311-1.311 3.78 3.78 0 00-1.167-.296A13.36 13.36 0 0014 2V1a1 1 0 10-2 0v1H6V1zm12 7.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v5.339c0 .527 0 .982.031 1.356.032.395.103.788.296 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.376.031.83.031 1.357.031h9.677c.527 0 .982 0 1.356-.031a3.78 3.78 0 001.167-.296 3 3 0 001.311-1.311c.193-.379.264-.772.296-1.167.031-.374.031-.829.031-1.356V8.5z"
    />
  </svg>
);

export default function SmileGallery() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(
      Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)),
    );
  }, []);

  return (
    <section className="bg-white py-[100px]" id="gallery">
      <div className="container mx-auto px-6 flex items-center gap-[72px] max-[768px]:flex-col max-[768px]:px-8 max-[768px]:gap-10">
        <div className="w-[420px] flex flex-col items-start gap-6 shrink-0 max-[768px]:w-full max-[768px]:max-w-full">
          <div className="section-badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8 7.5C8 8.32843 7.32843 9 6.5 9C5.67157 9 5 8.32843 5 7.5C5 6.67157 5.67157 6 6.5 6C7.32843 6 8 6.67157 8 7.5ZM15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5ZM6.79686 11.3959C6.46468 10.9577 5.84043 10.8697 5.4 11.2001C4.95817 11.5314 4.86863 12.1582 5.2 12.6001L5.20101 12.6014L5.20216 12.6029L5.2049 12.6066L5.21211 12.616L5.23341 12.6432C5.25065 12.665 5.274 12.6939 5.30336 12.7289C5.362 12.7987 5.445 12.8934 5.55145 13.0045C5.76352 13.2258 6.07343 13.5172 6.47433 13.8088C7.27226 14.3891 8.47447 15.0001 10 15.0001C11.5255 15.0001 12.7277 14.3891 13.5257 13.8088C13.9266 13.5172 14.2365 13.2258 14.4485 13.0045C14.555 12.8934 14.638 12.7987 14.6966 12.7289C14.726 12.6939 14.7399 12.6771 14.7666 12.6432L14.774 12.6338L14.8 12.6001C15.1314 12.1582 15.0418 11.5314 14.6 11.2001C14.1596 10.8697 13.5353 10.9577 13.2031 11.3959L13.1985 11.4018C13.1925 11.4093 13.1812 11.4234 13.1647 11.4431C13.1315 11.4826 13.0778 11.5442 13.0046 11.6207C12.8573 11.7744 12.6359 11.9829 12.3493 12.1913C11.7723 12.611 10.9745 13.0001 10 13.0001C9.02553 13.0001 8.22773 12.611 7.65067 12.1913C7.36407 11.9829 7.14272 11.7744 6.99542 11.6207C6.92219 11.5442 6.86846 11.4826 6.83531 11.4431C6.81876 11.4234 6.80745 11.4093 6.8015 11.4018L6.79686 11.3959Z"
                fill="#CB7266"
              />
            </svg>
            <span>Smile Gallery</span>
          </div>
          <h2 className="font-heading text-[2.25rem] font-extrabold text-ink leading-tight m-0">
            <span className="text-accent">Smile Gallery:</span> Real
            Transformations, Visible Results
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Explore real patient transformations through interactive before and
            after visuals. Compare results side by side to see how precision
            dentistry, advanced technology, and personalized care come together
            to create natural, confident smiles.
          </p>
          <Link href="/#contact" className="btn-pill">
            <span>Book Consultation</span>
            <CalendarIcon />
          </Link>
        </div>

        <div className="flex-1">
          <div
            ref={containerRef}
            className="gallery__slider"
            onMouseMove={(e) => {
              if (isDragging.current) updatePosition(e.clientX);
            }}
            onMouseUp={() => {
              isDragging.current = false;
            }}
            onMouseLeave={() => {
              isDragging.current = false;
            }}
            onTouchMove={(e) => {
              if (isDragging.current) updatePosition(e.touches[0].clientX);
            }}
            onTouchEnd={() => {
              isDragging.current = false;
            }}
          >
            <img
              src="/images/media/after.png"
              alt="After treatment"
              className="gallery__img"
            />
            <div className="gallery__before" style={{ width: `${position}%` }}>
              <img
                src="/images/media/before.png"
                alt="Before treatment"
                className="gallery__img"
              />
            </div>
            <div className="gallery__divider" style={{ left: `${position}%` }}>
              <button
                className="gallery__handle"
                onMouseDown={() => {
                  isDragging.current = true;
                }}
                onTouchStart={() => {
                  isDragging.current = true;
                }}
                aria-label="Drag to compare before and after"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 16l-4-4 4-4M17 8l4 4-4 4" />
                </svg>
              </button>
            </div>
            <span className="gallery__label gallery__label--before">
              Before
            </span>
            <span className="gallery__label gallery__label--after">After</span>
          </div>
        </div>
      </div>
    </section>
  );
}
