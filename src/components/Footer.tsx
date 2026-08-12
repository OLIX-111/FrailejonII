import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080c12] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[3px] text-gray-400 mb-5">Navegación</h4>
            <ul className="space-y-3">
              {["Inicio", "Nosotros", "Propiedades", "Contacto", "Agentes 360", "Política de Privacidad", "Términos y Condiciones"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-[#b5cc18] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[3px] text-gray-400 mb-5">Agentes 360</h4>
            <ul className="space-y-3">
              {["Freisy Carolina", "Yuderkis Pilier"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-[#b5cc18] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[3px] text-gray-400 mb-5">Proyectos</h4>
            <ul className="space-y-3">
              {["Costa Mar", "Stone Tower 3", "Frailejon Village", "Ver propiedades"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-[#b5cc18] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-8">
          © 2025 L&apos; Romana Real Estate. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
