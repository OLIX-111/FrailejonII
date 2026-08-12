"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", correo: "", mensaje: "" });

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Nombre y Apellido"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        className="bg-white text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b5cc18] placeholder:text-gray-400"
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
        className="bg-white text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b5cc18] placeholder:text-gray-400"
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={form.correo}
        onChange={(e) => setForm({ ...form, correo: e.target.value })}
        className="bg-white text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b5cc18] placeholder:text-gray-400"
      />
      <textarea
        placeholder="Mensaje — Explícanos en detalle..."
        rows={5}
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        className="bg-white text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b5cc18] placeholder:text-gray-400 resize-none"
      />
      <button
        type="submit"
        className="bg-[#b5cc18] text-black font-bold py-3 rounded-full hover:bg-[#8fa012] transition-colors"
      >
        Enviar mi mensaje
      </button>
    </form>
  );
}
