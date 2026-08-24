import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Slideshow from "@/components/Slideshow";

/* ── Datos ── */
const modelos = [
  {
    nivel: 1,
    tipo: "Apartamento",
    camas: 1,
    banos: 2,
    metros: "70 m²",
    img: "/render 1.png",
    descripcion: "Estacionamiento para un vehículo, recibidor, sala de estar, comedor, cocina modular moderna de alta calidad, habitaciones con baño y vestidor (WC), baño de visitas y área de servicio.",
  },
  {
    nivel: 2,
    tipo: "Apartamento",
    camas: 2,
    banos: 2,
    metros: "85 m²",
    img: "/atardecer.png",
    descripcion: "Estacionamiento para un vehículo, vestíbulo de entrada, sala de estar, comedor, cocina modular moderna y de alta calidad, habitaciones con baño y vestidor (WC), baño de visitas y área de servicio.",
  },
  {
    nivel: 3,
    tipo: "Apartamento · Terraza",
    camas: 3,
    banos: 3,
    metros: "70–85 m² + Terraza 90 m²",
    img: "/Frailejon 8.png",
    descripcion: "1er Nivel: Estacionamiento, patio, vestíbulo, sala de estar, estudio, comedor, baño de visita. 2do Nivel: 4 habitaciones, terraza, cocina, gazebo, piscina, jardín y áreas verdes.",
  },
];

const atractivos = [
  { nombre: "Capitan Kid",  tipo: "Restaurante (a 15 minutos)", img: "/capitan kid.jpeg" },
  { nombre: "Hotel Hilton", tipo: "Hotel (a 15 minutos)",       img: "/Hilton.jpeg" },
  { nombre: "Aeropuerto",   tipo: "Aeropuerto (a 6 minutos)",   img: "/aeropuerto.jpeg" },
];

const razones = [
  {
    icon: "📍",
    titulo: "Ubicación Estratégica",
    texto: "A solo 6 minutos del Aeropuerto Internacional de La Romana y a 3 minutos de arenas blancas y aguas turquesas. Casa de Campo Resort & Villas a 6 minutos y Playa Dominicus Bayahibe a 19 minutos.",
  },
  {
    icon: "⛳",
    titulo: "Campo de Golf Pete Dye",
    texto: "A 10 minutos, disfruta de un campo de golf de más de 7,300 m con 9 ó 18 hoyos en La Estancia, diseñado por Pete Dye — uno de los arquitectos de golf más reconocidos del mundo — con vistas al majestuoso Río Chavón.",
  },
  {
    icon: "📈",
    titulo: "Inversión Inteligente",
    texto: "Con modelo de negocio condominio, Frailejón Village asegura retorno de inversión a corto, mediano y largo plazo, respaldado por la alta demanda turística de La Romana y las amenidades de clase mundial de La Estancia.",
  },
];

const amenidades = [
  "Seguridad Integral 24/7",
  "Campo de Golf (9 y 18 hoyos – Pete Dye)",
  "Terraza 19",
  "Club Social y Deportivo",
  "Cancha de Tennis",
  "Museo de Tabaco",
];

/* ── Page ── */
export default function Page() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/10dH0gY4dJY?autoplay=1&mute=1&loop=1&playlist=10dH0gY4dJY&controls=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]"
          style={{ border: "none", pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-6xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg">
            Descubre el Hogar<br />Donde Tus Sueños Cobran Vida
          </h1>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="#modelos"
              className="bg-[#b5cc18] text-black font-bold px-8 py-3.5 rounded-md hover:bg-[#8fa012] transition-colors"
            >
              Explorar Modelos
            </Link>
            <Link
              href="#contacto"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors"
            >
              Solicitar Más Información
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO QUOTE ── */}
      <section className="bg-[#0d0d0d] py-24 px-6 text-center">
        <p className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold leading-relaxed">
          Descubre una comunidad única de villas de lujo ubicadas en La Estancia Golf &amp; Country
          Club, donde el diseño minimalista tropical y el entorno paradisíaco se combinan para
          ofrecerte un estilo de vida incomparable.
        </p>
      </section>

      {/* ── IMAGEN LA ESTANCIA ── */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/la estancia.jpeg"
          alt="La Estancia Golf & Country Club"
          fill
          className="object-cover"
        />
      </div>

      {/* ── REFUGIO NATURAL ── */}
      <section className="bg-[#161616] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">El proyecto</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
              Un Refugio Natural en La Estancia Golf &amp; Country Club
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ubicado en el corazón de la exclusiva comunidad de La Estancia, Frailejón Village ofrece
              un entorno que fusiona naturaleza y sofisticación. Rodeado por la exuberante vegetación
              de la región y con vistas panorámicas al majestuoso río Chavón, este destino es un
              santuario para quienes buscan equilibrio entre el lujo y la tranquilidad.
            </p>
            <p className="text-gray-400 leading-relaxed">
              La Estancia es más que un residencial, es una experiencia de vida que se complementa con
              un campo de golf de clase mundial, senderos naturales y un ambiente diseñado para el
              descanso absoluto.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Ubicación</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
              Un Estilo de Vida Exclusivo con Conexión a Todo
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Frailejón Village goza de una ubicación privilegiada a solo minutos de algunos de los
              destinos más emblemáticos del Caribe. A pocos minutos del Aeropuerto Internacional de La
              Romana, y con acceso a playas paradisíacas como Bayahibe e Isla Saona.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Además, la cercanía con Casa de Campo y el icónico Altos de Chavón brinda una oferta
              cultural y gastronómica de primer nivel, asegurando que cada día esté lleno de nuevas
              experiencias.
            </p>
          </div>
        </div>
      </section>

      {/* ── IMAGEN LA ESTANCIA 2.0 ── */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/la estancia 2.0.jpeg"
          alt="La Estancia Golf & Country Club"
          fill
          className="object-cover"
        />
      </div>

      {/* ── INVERSIÓN ── */}
      <section className="bg-[#0d0d0d] overflow-hidden mt-16 md:mt-24">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[360px] md:h-auto md:min-h-[540px]">
            <Image
              src="/vista aerea.png"
              alt="Villa Frailejón Village"
              fill
              className="object-cover"
            />
          </div>
          <div className="py-20 px-8 md:px-14 lg:px-20 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Inversión</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
              Una Inversión que Crece Contigo
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Ubicado en el exclusivo Estancia Golf &amp; Country Club, Frailejón Village redefine el
              lujo en La Romana. Este proyecto residencial combina diseño minimalista tropical con
              espacios amplios y amenidades premium para ofrecerte un estilo de vida inigualable en
              armonía con la naturaleza.
            </p>
          </div>
        </div>
      </section>

      {/* ── ¿POR QUÉ ELEGIR? ── */}
      <section className="bg-[#161616] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Ventajas</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              ¿Por Qué Elegir Frailejón Village?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Descubre las razones que hacen de Frailejón Village el lugar ideal para vivir o invertir.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {razones.map((r) => (
              <div key={r.titulo} className="flex gap-5 items-start">
                <div className="w-20 h-20 min-w-20 bg-[#b5cc18] flex items-center justify-center text-4xl text-black">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{r.titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENIDADES ── */}
      <section className="bg-[#0d0d0d] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="py-20 px-8 md:px-14 lg:px-20 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Lo que incluye</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Amenidades de Clase Mundial
            </h2>
            <ul className="space-y-4 mb-8">
              {amenidades.map((a) => (
                <li key={a} className="flex items-center gap-3 font-medium">
                  <span className="w-7 h-7 min-w-7 rounded-full bg-[#b5cc18] text-black text-sm font-black flex items-center justify-center">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <Link
              href="#modelos"
              className="inline-block border-2 border-[#b5cc18] text-[#b5cc18] font-bold px-7 py-3 rounded-full hover:bg-[#b5cc18] hover:text-black transition-colors"
            >
              Modelos del proyecto
            </Link>
          </div>
          <div className="relative h-[360px] md:h-auto md:min-h-[540px]">
            <Image
              src="/Terraza.png"
              alt="Amenidades Frailejón Village"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── MODELOS ── */}
      <section id="modelos" className="bg-[#161616] pt-24 pb-40">
        <div className="w-full">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Catálogo</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-3">Modelos del proyecto</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Villas con estilos y configuraciones variadas que se adaptan a tus necesidades,
              priorizando elegancia y confort.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {modelos.map((m) => (
              <div
                key={m.nivel}
                className="bg-[#1e1e1e] overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={m.img}
                    alt={`Modelo Altos de Frailejón Nivel ${m.nivel}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#b5cc18] text-black text-xs font-bold px-3 py-1 rounded-full">
                    En venta
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#b5cc18] text-black text-xs font-extrabold px-3 py-1 rounded-full">USD $</span>
                    <span className="text-sm font-semibold">3,000 Para Reservar</span>
                  </div>
                  <h3 className="font-bold text-base mb-1">
                    Modelo Altos de Frailejón{" "}
                    <span className="text-[#b5cc18]">· Nivel {m.nivel}</span>
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{m.tipo}</p>
                  <div className="flex gap-3 text-gray-400 text-sm flex-wrap mb-3">
                    <span>🛏 {m.camas} hab.</span>
                    <span>🛁 {m.banos} baños</span>
                    <span>📐 {m.metros}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2">{m.descripcion}</p>
                  <p className="text-[#b5cc18] text-xs font-semibold">🌿 Vistas Área Verde</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN DE PAGO ── */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="w-full">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Financiamiento</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-3">Plan de Pago</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              ¡Reserva ahora y paga el inicial como tu bolsillo te lo permita!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Etapa 1 */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#b5cc18]/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#b5cc18] text-black text-xs font-extrabold px-3 py-1 rounded-full">ETAPA 1</span>
                <span className="text-gray-400 text-sm">Entrega en 24 meses</span>
              </div>
              <ul className="space-y-5">
                {[
                  { paso: "Reserva", detalle: "US$ 3,000" },
                  { paso: "10% – Firma del contrato", detalle: "30 días" },
                  { paso: "30% – Durante construcción", detalle: "24 meses" },
                  { paso: "60% – Contra entrega", detalle: "Al recibir la propiedad" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-7 h-7 min-w-7 rounded-full bg-[#b5cc18] text-black text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{item.paso}</p>
                      <p className="text-gray-400 text-sm">{item.detalle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Etapa 2 */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white/15 text-white text-xs font-extrabold px-3 py-1 rounded-full">ETAPA 2</span>
                <span className="text-gray-400 text-sm">Entrega en 36 meses</span>
              </div>
              <ul className="space-y-5">
                {[
                  { paso: "Reserva", detalle: "US$ 3,000" },
                  { paso: "10% – Firma del contrato", detalle: "30 días" },
                  { paso: "30% – Durante construcción", detalle: "36 meses" },
                  { paso: "60% – Contra entrega", detalle: "Al recibir la propiedad" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-7 h-7 min-w-7 rounded-full bg-white/20 text-white text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{item.paso}</p>
                      <p className="text-gray-400 text-sm">{item.detalle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-8">* Algunas condiciones aplican.</p>
        </div>
      </section>

      {/* ── ATRACTIVOS CERCANOS ── */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="w-full">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Alrededor</p>
            <h2 className="text-5xl md:text-7xl font-bold">Atractivos Cerca de ti</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {atractivos.map((a) => (
              <div key={a.nombre} className="relative h-[420px] overflow-hidden group">
                <Image
                  src={a.img}
                  alt={a.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.6] saturate-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a7c00]/60 via-[#b5cc18]/25 via-50% to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-bold text-lg">{a.nombre}</h3>
                  <p className="text-gray-300 text-sm">{a.tipo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROXIMIDADES ── */}
      <section className="bg-[#161616] py-24">
        <div className="w-full">
          <div className="text-center mb-12 px-6">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Conectividad</p>
            <h2 className="text-5xl md:text-7xl font-bold">A Minutos de Todo</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { lugar: "Aeropuerto Int'l La Romana", tiempo: "6 min" },
              { lugar: "Casa de Campo Resort & Villas", tiempo: "6 min" },
              { lugar: "Playa Minitas", tiempo: "14 min" },
              { lugar: "Terminal de Cruceros", tiempo: "14 min" },
              { lugar: "Playa Dominicus – Bayahibe", tiempo: "19 min" },
              { lugar: "Playa Caleta", tiempo: "25 min" },
              { lugar: "Jumbo (Supermercado)", tiempo: "13 min" },
              { lugar: "Aeropuerto Int'l Punta Cana", tiempo: "45 min" },
            ].map((p) => (
              <div key={p.lugar} className="bg-[#1e1e1e] rounded-xl p-8 flex flex-col gap-2">
                <span className="text-[#b5cc18] text-4xl font-extrabold">{p.tiempo}</span>
                <span className="text-gray-300 text-base leading-snug">{p.lugar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="bg-[#161616] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="py-20 px-8 md:px-14 lg:px-20">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b5cc18] mb-3">Agenda una visita</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
              Agenda tu Visita a Frailejón Village
            </h2>
            <p className="text-gray-400 mb-8">
              Descubre en persona el lujo y la exclusividad que ofrecemos. Completa el formulario y
              programa una cita con nuestro equipo.
            </p>
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#b5cc18] text-lg mt-0.5">📞</span>
                <span>+1 (484) 473-1113</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b5cc18] text-lg mt-0.5">✉</span>
                <span>info@lromanarealestate.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b5cc18] text-lg mt-0.5">📌</span>
                <span>Reparto Torres Calle 4ta #5. La Romana. República Dominicana.</span>
              </div>
            </div>
            <ContactForm />
          </div>
          <Slideshow />
        </div>
      </section>

      <Footer />
    </>
  );
}
