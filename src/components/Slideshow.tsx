"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const imagenes = [
  { src: "/render 1.png",        alt: "Render Altos de Frailejón" },
  { src: "/atardecer.png",       alt: "Atardecer Altos de Frailejón" },
  { src: "/Frailejon 8.png",     alt: "Frailejón Village" },
  { src: "/la estancia.jpeg",    alt: "La Estancia Golf & Country Club" },
  { src: "/la estancia 2.0.jpeg", alt: "La Estancia" },
  { src: "/capitan kid.jpeg",    alt: "Capitan Kid" },
  { src: "/Hilton.jpeg",         alt: "Hotel Hilton" },
  { src: "/aeropuerto.jpeg",     alt: "Aeropuerto La Romana" },
];

export default function Slideshow() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % imagenes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[580px] rounded-xl overflow-hidden hidden md:block">
      {imagenes.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === actual ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActual(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === actual ? "bg-[#b5cc18] w-5" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
