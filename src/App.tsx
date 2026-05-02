import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Check, Send, X } from "lucide-react";
import { WordsPullUp, WordsPullUpMultiStyle } from "./components/MotionText";
import { ScrollRevealText } from "./components/ScrollRevealText";
import { ContactForm } from "./components/ContactForm";

const MisericordiaModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-void/90 backdrop-blur-xl cursor-pointer"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-primary"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-8 md:p-16 lg:p-20 space-y-24">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-1 border border-primary/20 rounded-full inline-block">Producción Pionera</span>
                      <h2 className="font-display text-4xl md:text-7xl text-bone leading-tight">Misericordia <br /><span className="text-primary">Inesperada</span></h2>
                      <p className="text-bone/80 text-lg md:text-xl font-light italic leading-relaxed">
                        "Una experiencia sonora y visual que explora la resiliencia humana en el desolador escenario de un circo abandonado."
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:gap-8 text-[10px] md:text-xs">
                      <div className="space-y-1">
                        <p className="text-primary font-bold uppercase tracking-widest">Escritura y Dirección</p>
                        <p className="text-bone text-base md:text-lg font-display">Arc Guimel (Guillermo Arce)</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-primary font-bold uppercase tracking-widest">Dirección Artística</p>
                        <p className="text-bone text-base md:text-lg font-display">Gustavo Ostrich</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-primary font-bold uppercase tracking-widest">Co-Producción Ejecutiva</p>
                        <p className="text-bone text-base md:text-lg font-display text-primary/80">MilenioTres Producciones®</p>
                        <p className="text-[9px] text-bone/40">(J. Julio Barrutia)</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-primary font-bold uppercase tracking-widest">Género</p>
                        <p className="text-bone text-base md:text-lg font-display">Drama Psic / R. Mágico</p>
                      </div>
                    </div>

                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                      <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Sinopsis del Génesis</h4>
                      <p className="text-bone/60 leading-relaxed text-sm">
                        Representando la vida como un circo donde solo se puede iluminar con la luz de los cambios. En el <strong className="text-bone">Circo Valentía</strong>, la voluntad encare a la desdicha y la tristeza rete a la felicidad a cruzar por la cuerda floja de la vida. Valentina y el <strong className="text-bone">Señor Sísifo</strong> orquestarán sentimientos puros en esta historia de amor, tragedia y locura.
                      </p>
                      <div className="flex items-center gap-4 text-jade font-bold text-[10px] tracking-widest uppercase mt-4">
                        <span>~90 Minutos</span>
                        <span className="w-1 h-1 bg-jade rounded-full"></span>
                        <span>Duelo & Redención</span>
                        <span className="w-1 h-1 bg-jade rounded-full"></span>
                        <span>Adultos +15</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                    <video 
                      autoPlay loop muted playsInline
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                      src="/videos/MisericordiaInesperada_001.mp4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 space-y-4">
                      <div className="flex gap-2">
                        <span className="bg-primary text-void text-[10px] font-black uppercase px-3 py-1 rounded-full">Obra Teatral</span>
                        <span className="bg-bone text-void text-[10px] font-black uppercase px-3 py-1 rounded-full">Drama</span>
                      </div>
                      <p className="text-bone font-display text-xl uppercase tracking-tighter">"Para edificar los sueños, los cambios parten desde el pensamiento."</p>
                    </div>
                  </div>
                </div>

                {/* Galería de Personajes Section inside Modal */}
                <div className="space-y-12">
                  <div className="text-center space-y-2">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">El Elenco del Ritual</span>
                    <h3 className="font-display text-3xl md:text-5xl text-bone">Galería de Personajes</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Eddy", desc: "Payaso de 26-32 años, vestuario negro y amarillo (abejas). Cuidador del Circo Valentía.", accent: "Refugio" },
                      { name: "Ambrosía", desc: "Espectro alto de semblante pesado. El brazo largo que busca atrapar la muerte de extremo a extremo.", accent: "La Muerte" },
                      { name: "Margarita", desc: "Mujer de 46-51 años. Desplazada por su familia ante la demencia, halla refugio en lo abandonado.", accent: "Soledad" },
                      { name: "Bruno", desc: "Viejo malabarista lisiado de la pierna izquierda. El vagabundo reciclador de basura tras el cierre.", accent: "Tragedia" },
                      { name: "Valentina y Mimo", desc: "Catrina y acompañante. La magia y melodía que devuelve el encanto a los momentos cruciales.", accent: "Encanto" },
                      { name: "Señor Sísifo", desc: "Oso de peluche, fiel amigo de Eddy y orquestador de los sentimientos más puros.", accent: "Soberano Animal" }
                    ].map((char, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors relative group"
                      >
                        <span className="absolute top-8 right-8 text-[9px] font-bold text-primary tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">{char.accent}</span>
                        <h4 className="font-display text-2xl text-bone mb-3">{char.name}</h4>
                        <p className="text-bone/40 text-sm leading-relaxed">{char.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing Message */}
                <div className="text-center py-10">
                  <p className="text-primary/40 font-display text-sm tracking-[0.5em] mb-4">MISERICORDIA INESPERADA</p>
                  <button 
                    onClick={onClose}
                    className="text-bone/20 hover:text-primary transition-colors text-[10px] uppercase font-bold tracking-widest"
                  >
                    -- Cerrar Ficha Técnica --
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onOpenObra }: { onOpenObra: () => void }) => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit pointer-events-auto">
      <div className="bg-void/90 backdrop-blur-md px-4 py-2 md:px-12 md:py-3 rounded-b-2xl md:rounded-b-[2rem] border-x border-b border-white/5 flex items-center gap-3 sm:gap-6 md:gap-14 lg:gap-16 shadow-2xl">
        <img src="/img/logo.png" alt="Rey Balam" className="w-10 h-10 object-contain hidden md:block" />
        {[
          { name: "Inicio", id: "#inicio" },
          { name: "La Obra", action: onOpenObra },
          { name: "Producciones", id: "#producciones" },
          { name: "Nosotros", id: "#historia" },
          { name: "Contacto", id: "#consultas" }
        ].map((item) => (
          <a
            key={item.name}
            href={item.id || "#"}
            onClick={(e) => {
              if (item.action) {
                e.preventDefault();
                item.action();
              }
            }}
            className="text-[8px] sm:text-[10px] md:text-xs font-medium tracking-widest uppercase transition-colors whitespace-nowrap"
            style={{ color: "rgba(212, 175, 55, 0.7)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(212, 175, 55, 0.7)")}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default function App() {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-void min-h-screen overflow-x-hidden selection:bg-primary selection:text-void font-sans">
      <Navbar onOpenObra={() => setIsModalOpen(true)} />
      <MisericordiaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Membrete Institucional - Watermark/Header */}
      <div className="fixed top-0 left-0 w-full h-32 pointer-events-none z-[60] opacity-10 md:opacity-20 flex justify-between px-10 pt-10">
        <img src="/img/membrete.png" alt="" className="h-full object-contain" />
        <img src="/img/membrete.png" alt="" className="h-full object-contain scale-x-[-1]" />
      </div>

      {/* SECTION 1: HERO */}
      <section id="inicio" className="h-screen p-3 md:p-6 sticky top-0">
        <div className="relative h-full w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-void border border-white/5">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] brightness-75 transition-transform duration-[3s] hover:scale-105"
            src="/videos/MisericordiaInesperada_001.mp4"
          />

          {/* Overlays */}
          <div className="absolute inset-0 noise-overlay opacity-50 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent pointer-events-none" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-14 lg:p-20">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-[1px] w-12 bg-primary/50"></span>
                  <span className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Guatemala | Artes Escénicas</span>
                </div>
                <WordsPullUp
                  text="REY BALAM"
                  showAsterisk
                  className="font-display font-black leading-[0.8] tracking-[-0.05em] text-primary"
                  style={{ fontSize: "clamp(3.5rem, 18vw, 16rem)" } as any}
                />
                <p className="font-display text-bone/40 text-[10px] md:text-sm tracking-[0.6em] mt-4 ml-2 uppercase">Productora Independiente</p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 md:gap-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-bone/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm"
                >
                  Estudio creativo híbrido especializado en artes escénicas (circo, teatro, danza, música), artes gráficas y cine. Bajo la dirección general de <strong className="text-primary">Guillermo Arce</strong>, forjamos narrativas que trascienden el escenario.
                </motion.p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setIsModalOpen(true)}
                    className="group relative flex items-center gap-2 bg-primary w-fit px-1.5 py-1.5 rounded-full pr-6 transition-all hover:gap-4 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    <div className="bg-void rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-void font-extrabold text-xs sm:text-sm tracking-tight uppercase px-2">
                      Ver Ficha de Obra
                    </span>
                  </motion.button>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => document.getElementById('consultas')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 border border-primary/30 text-primary hover:bg-primary hover:text-void px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Contrataciones
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="historia" className="relative z-10 bg-void py-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#0F0F0F]/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-10 md:p-24 text-center shadow-2xl">
          <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-12 block">
            Los Visionarios
          </span>
          
          <div className="mb-16">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Circo, Teatro, Danza y Cine.", className: "font-display text-primary text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[0.95] mb-4 block" },
                { text: "La convergencia de las artes escénicas", className: "font-serif-italic italic text-bone/50 text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-[0.95] mb-2" },
                { text: " bajo un solo estandarte soberano.", className: "font-sans font-light text-bone text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-[0.95]" }
              ]}
            />
          </div>

          <ScrollRevealText
            text="Rey Balam Productora nace para elevar el estándar de la producción independiente en Guatemala. No somos solo una empresa, somos un colectivo donde el rigor técnico se encuentra con el ritual escénico. Liderados por Guillermo Arce, canalizamos la fuerza del jaguar para proteger y proyectar cada obra."
            className="text-[#DEDBC8]/60 text-xs sm:text-sm md:text-xl leading-relaxed max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section id="producciones" className="relative min-h-screen bg-void py-32">
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 space-y-4">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Servicios de índole escénico.", className: "block text-2xl sm:text-4xl md:text-5xl text-primary font-display" },
                { text: "Impulsado por el diseño de UKO5 Laboratorio creativo de MilenioTres Producciones®", className: "block text-lg sm:text-xl md:text-2xl text-jade italic mt-2" }
              ]}
            />
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[520px]">
            {/* Card 1 - Video Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isFeaturesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden group border border-white/5 bg-[#101010] h-[400px] lg:h-full col-span-1 shadow-xl"
            >
              <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75"
                src="/videos/MisericordiaInesperada_001.mp4"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary font-display text-xl leading-tight">Tu génesis cinematográfico.</p>
              </div>
            </motion.div>

            {/* Feature Cards 2, 3, 4 */}
            {[
              {
                id: "01",
                title: "Guion Gráfico Balam",
                icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
                items: ["Secuenciación visual", "Del Guion al Jade", "Bocetando mitos", "Ritmo de dirección"],
                delay: 0.25
              },
              {
                id: "02",
                title: "Críticas Ancestrales",
                icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
                items: ["Análisis IA Balam", "Notas dinámicas", "Síntesis de herramientas", "Legado creativo"],
                delay: 0.4
              },
              {
                id: "03",
                title: "Suite del Vacío Profundo",
                icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
                items: ["Sesiones sin ruido", "Enfoque ambiental", "Sincronización cronal", "Cero distracciones"],
                delay: 0.55
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isFeaturesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: card.delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#151515] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#1A1A1A] transition-colors shadow-lg"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <img src={card.icon} alt="icon" className="w-12 h-12 rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <span className="text-bone/20 font-display text-sm tracking-widest">{card.id}</span>
                  </div>
                  <div>
                    <h3 className="text-bone font-bold text-xl mb-6">{card.title}</h3>
                    <ul className="space-y-4">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-bone/60 text-sm">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a href="#consultas" className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    Ruta del Legado <ArrowRight className="w-4 h-4 -rotate-45" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INQUIRIES / CONSULTAS */}
      <section id="consultas" className="relative bg-void py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="text-jade text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase block">Iniciativas de Proyecto</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary">Inicia tu Ritual Creativo</h2>
            <p className="text-bone/40 max-w-xl mx-auto text-sm md:text-base">
              ¿Listo para dar vida a lo invisible? Contacta con el equipo de Guillermo Arce y MilenioTres para coordinar tu visión.
            </p>
          </div>
          
          <div className="bg-[#0F0F0F] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-black/50 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Send className="w-64 h-64 rotate-12" />
             </div>
             <ContactForm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/5">
            <div className="space-y-4">
               <span className="text-primary text-[10px] uppercase font-bold tracking-widest">Sede Central</span>
               <p className="text-bone/60 text-sm leading-relaxed">
                 11 Avenida “A” 2-44, Barrio Moderno,<br />
                 Zona 2, Ciudad de Guatemala.
               </p>
            </div>
            <div className="space-y-4">
               <span className="text-primary text-[10px] uppercase font-bold tracking-widest">Atención Directa</span>
               <p className="text-bone font-medium">Guillermo Arce</p>
               <div className="flex flex-col gap-1 text-bone/60 text-sm">
                 <a href="tel:+50259421433" className="hover:text-primary transition-colors">+502 5942 1433</a>
                 <a href="mailto:productora.reybalam@gmail.com" className="hover:text-primary transition-colors">productora.reybalam@gmail.com</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimal but stylized */}
      <footer className="bg-void border-t border-white/5 py-16 px-6 text-center">
        <div className="flex justify-center mb-10">
          <img src="/img/logo.png" alt="Logo Rey Balam" className="h-16 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        </div>
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-bone/40">
           <a href="#inicio" className="hover:text-primary transition-colors">Volver al Inicio</a>
           <button onClick={() => setIsModalOpen(true)} className="hover:text-primary transition-colors uppercase">La Obra</button>
           <a href="#consultas" className="hover:text-primary transition-colors">Colaboraciones</a>
        </div>
        <p className="text-bone/20 text-[9px] uppercase tracking-[1em] mb-4">Rey Balam Productora © 2026</p>
        <div className="font-display text-primary/40 text-2xl tracking-[0.5em] select-none">REY BALAM</div>
        <div className="max-w-md mx-auto h-[1px] bg-white/5 my-6"></div>
        <p className="text-[10px] text-jade/40 uppercase tracking-widest font-bold">MilenioTres Producciones | Agencia Proveedora</p>
        <p className="text-[8px] text-bone/20 mt-2 uppercase tracking-[0.3em]">Imagen y Desarrollo: J. Julio Barrutia C. | UKO5</p>
      </footer>
    </main>
  );
}
