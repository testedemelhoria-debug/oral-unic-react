import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MapPin, Clock, Heart, Shield, MessageCircle, Star, ChevronRight, Instagram, Facebook, ArrowRight } from "lucide-react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#5BC8C8]/30">
      {/* Navbar idêntica à da IA */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">ORAL <span className="text-[#5BC8C8]">UNIC</span></div>
          
          <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#inicio" className="hover:text-[#5BC8C8] transition-colors">Início</a>
            <a href="#servicos" className="hover:text-[#5BC8C8] transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-[#5BC8C8] transition-colors">Contato</a>
          </nav>

          <button className="hidden md:block bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-[#5BC8C8] transition-all shadow-lg">
            AGENDAR CONSULTA
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Hero Section Master */}
      <section className="relative h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909608135-ca092194a1d6?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-slate-900 mb-8">
              Sua melhor <br/> <span className="text-[#5BC8C8]">versão</span> começa pelo sorriso.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-md leading-relaxed">
              Tecnologia e humanização em um só lugar. Descubra a odontologia de alta performance.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                <Phone size={20} /> WHATSAPP
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid de Serviços Luxo */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Nossos <br/> Especialidades</h2>
            <p className="text-slate-400 max-w-xs text-sm">Tratamentos modernos com foco em estética e funcionalidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&sig=${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tratamento {i}</h3>
                  <button className="flex items-center gap-2 text-[#5BC8C8] font-bold text-sm uppercase tracking-widest">
                    Saiba Mais <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer simples para não poluir */}
      <footer className="bg-slate-900 py-20 text-center">
        <div className="text-white font-bold tracking-widest mb-4">ORAL UNIC</div>
        <p className="text-slate-500 text-sm">© 2026 - Demonstração Profissional</p>
      </footer>
    </div>
  )
}
