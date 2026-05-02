import { motion } from "motion/react";
import React, { useState } from "react";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Usaremos Formspree como solución gratuita y robusta para sitios estáticos
      // El usuario debe reemplazar 'tu_form_id' con su ID real de Formspree despues de registrarse
      const response = await fetch("https://formspree.io/f/tu_form_id", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
