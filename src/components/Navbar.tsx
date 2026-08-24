"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Lromana con COLOR) (1).png"
            alt="La Romana Real Estate"
            width={160}
            height={48}
            className="object-contain"
            priority
          />
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
