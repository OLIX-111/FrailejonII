"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-blue-600 text-lg leading-none">●</span>
          <span className="font-black text-xl text-gray-900 tracking-tight">ROMANA</span>
          <span className="text-[10px] text-gray-400 font-normal uppercase tracking-widest">Real Estate</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {["Proyectos ▾", "Propiedades", "Agentes", "Sobre Nosotros", "Contacto"].map((item) => (
            <li key={item}>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {item}
              </Link>
            </li>
          ))}
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
