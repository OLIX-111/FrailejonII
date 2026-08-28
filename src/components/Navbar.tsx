"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const proyectos = [
  { label: "Frailejón Village",      href: "https://frailejon-village.vercel.app/" },
  { label: "Costa Mar",              href: "https://costa-mar-1.vercel.app/" },
  { label: "Stone Towers III",       href: "https://stonetowers-iii.vercel.app/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-[110px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Lromana con COLOR) (1).png"
            alt="La Romana Real Estate"
            width={220}
            height={100}
            className="object-contain"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {/* Proyectos dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="text-sm font-medium text-gray-300 hover:text-blue-400 cursor-pointer transition-colors">
              Proyectos ▾
            </span>
            {open && (
              <div className="absolute top-full left-0 mt-3 bg-[#1a1a1a] shadow-lg rounded-xl py-2 min-w-[210px] z-50">
                {proyectos.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-[#2a2a2a] hover:text-blue-400 transition-colors"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a
              href="https://propiedades.lromanarealestate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Propiedades
            </a>
          </li>
          <li>
            <a
              href="https://lromanarealestate.com/agentes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Agentes
            </a>
          </li>
          <li>
            <a
              href="https://www.lromanarealestate.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <Link href="#contacto" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="#contacto"
              className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Empezar Búsqueda
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
