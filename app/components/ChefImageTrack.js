"use client";
import { useRef, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
  "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
];

export default function ChefImageTrack() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const targetPercentage = useRef(0);
  const isDragging = useRef(false);
  const animFrame = useRef();
  const maxClamp = useRef(0); // Dinamik clamp

  // Clamp'i dinamik olarak güncelle
  const updateClamp = () => {
    if (!trackRef.current || !containerRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    if (trackWidth <= containerWidth) {
      maxClamp.current = 0;
    } else {
      maxClamp.current = -((trackWidth - containerWidth) / trackWidth) * 100;
    }
    // Clamp mevcut pozisyonu da
    const current = parseFloat(trackRef.current.dataset.percentage || "0");
    if (current < maxClamp.current) {
      trackRef.current.dataset.percentage = maxClamp.current;
      trackRef.current.style.transform = `translate(${maxClamp.current}%, 0)`;
      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + maxClamp.current}% center`;
      }
    }
  };

  useEffect(() => {
    updateClamp();
    window.addEventListener("resize", updateClamp);
    return () => window.removeEventListener("resize", updateClamp);
  }, []);

  // Mouse/touch down
  const handleOnDown = (e) => {
    isDragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    trackRef.current.dataset.mouseDownAt = x;
    trackRef.current.dataset.prevPercentage =
      trackRef.current.dataset.percentage || "0";
    cancelAnimationFrame(animFrame.current);
    animFrame.current = requestAnimationFrame(updateTrack);
  };

  // Mouse/touch up
  const handleOnUp = () => {
    isDragging.current = false;
    trackRef.current.dataset.mouseDownAt = "0";
    trackRef.current.dataset.prevPercentage =
      trackRef.current.dataset.percentage || "0";
    const next = parseFloat(trackRef.current.dataset.percentage || "0");
    trackRef.current.animate(
      { transform: `translate(${next}%, 0)` },
      { duration: 1.2, fill: "forwards", easing: "cubic-bezier(0.4,0,0.2,1)" }
    );
    for (const image of trackRef.current.getElementsByClassName("image")) {
      image.animate(
        { objectPosition: `${100 + next}% center` },
        { duration: 1.2, fill: "forwards", easing: "cubic-bezier(0.4,0,0.2,1)" }
      );
    }
    cancelAnimationFrame(animFrame.current);
    animFrame.current = null;
  };

  // Mouse/touch move: sadece targetPercentage güncellenir
  const handleOnMove = (e) => {
    if (
      !isDragging.current ||
      !trackRef.current.dataset.mouseDownAt ||
      trackRef.current.dataset.mouseDownAt === "0"
    )
      return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - x;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const prev = parseFloat(trackRef.current.dataset.prevPercentage || "0");
    let next = prev + percentage;
    next = Math.max(Math.min(next, 0), maxClamp.current);
    targetPercentage.current = next;
  };

  // requestAnimationFrame ile track ve img'leri güncelle
  const updateTrack = () => {
    if (trackRef.current) {
      const next = targetPercentage.current;
      trackRef.current.dataset.percentage = next;
      trackRef.current.style.transform = `translate(${next}%, 0)`;
      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + next}% center`;
      }
    }
    if (isDragging.current) {
      animFrame.current = requestAnimationFrame(updateTrack);
    }
  };

  // Eventleri window'a bağla
  useEffect(() => {
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchmove", handleOnMove);
    window.addEventListener("touchend", handleOnUp);
    return () => {
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchmove", handleOnMove);
      window.removeEventListener("touchend", handleOnUp);
    };
  }, []);

  // Başlangıç pozisyonu ve dataset
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage = "0";
      trackRef.current.dataset.percentage = "0";
      trackRef.current.style.transform = `translate(0%, 0)`;
      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.style.objectPosition = `100% center`;
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "40vh",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden",
        background: "transparent",
        zIndex: 1,
        padding: 0,
        margin: 0,
      }}
      onMouseDown={handleOnDown}
      onTouchStart={handleOnDown}
    >
      <div
        id="image-track"
        ref={trackRef}
        style={{
          display: "flex",
          gap: "4vmin",
          position: "relative",
          left: 0,
          top: 0,
          transform: "translate(0%, 0)",
          userSelect: "none",
          transition: "none",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            className="image"
            src={src}
            draggable="false"
            style={{
              width: "40vmin",
              height: "56vmin",
              objectFit: "cover",
              objectPosition: "100% center",
              borderRadius: "1.2rem",
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
              transition: "none",
            }}
            alt="Chef gallery"
          />
        ))}
      </div>
    </div>
  );
}
