import { motion } from "motion/react";
import React, { useState } from "react";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulación de envío - Aquí el usuario puede conectar su Webhook de Make.com
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Datos capturados para automatización:", data);

    // Simulamos un delay de red
    setTimeout(() => {
      setStatus("success");
      // Reset después de 3 segundos
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <motion.form
      id="contact-form-balam"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto space-y-6 text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="user_name" className="text-primary text-[10px] uppercase tracking-widest font-bold">Nombre Completo</label>
          <input
            required
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Ej. Balam Jaguar"
            className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-bone placeholder:text-bone/20 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="user_email" className="text-primary text-[10px] uppercase tracking-widest font-bold">Correo Electrónico</label>
          <input
            required
            type="email"
            id="user_email"
            name="user_email"
            placeholder="balam@produccion.com"
            className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-bone placeholder:text-bone/20 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="user_message" className="text-primary text-[10px] uppercase tracking-widest font-bold">Proyecto / Consulta</label>
        <textarea
          required
          id="user_message"
          name="user_message"
          rows={5}
          placeholder="Cuéntanos tu visión cinematográfica..."
          className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-bone placeholder:text-bone/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
        ></textarea>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          disabled={status !== "idle"}
          type="submit"
          className="group relative flex items-center justify-center gap-3 bg-primary text-void font-bold py-4 px-12 rounded-full overflow-hidden transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          {status === "idle" && (
            <>
              <span className="uppercase tracking-tighter">Enviar Solicitud</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
          {status === "submitting" && <span className="animate-pulse uppercase tracking-tighter">Procesando...</span>}
          {status === "success" && <span className="uppercase tracking-tighter">¡Mensaje Enviado!</span>}
        </button>
        
        {status === "success" && (
          <p className="text-jade font-medium text-sm">Nuestros guardianes han recibido tu mensaje.</p>
        )}
      </div>
    </motion.form>
  );
};
