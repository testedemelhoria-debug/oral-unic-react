import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Phone, MapPin, Clock, Heart, Shield, MessageCircle, Star, ChevronRight, Instagram, Facebook } from "lucide-react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#5BC8C8]/30">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">ORAL <span className="text-[#5BC8C8]">UNIC</span></div>
          <nav className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest text-slate-500">
            <a href="#inicio" className="hover:text-[#5BC8C8] transition-colors">Início</a>
            <a href="#servicos" className="hover:text-[#5BC8C8] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#5BC8C8] transition-colors">Sobre</a>
          </nav>
          <button className="hidden md:block bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#5BC8C8] transition-all">
            AGENDAR DEMO
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-900">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Hero Section - Impacto Visual */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909608135-ca092194a1d6?q=80&w=2000" 
            className="w-full h-full object-cover scale-105" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#5BC8C8]/10 text-[#5BC8C8] text-xs font-bold uppercase tracking-widest mb-6">
              Excelência em Odontologia
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-slate-900">
              Seu novo sorriso começa <span className="text-[#5BC8C8]">aqui.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Uma experiência única em saúde bucal, combinando tecnologia de ponta e um atendimento totalmente humanizado.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-green-200 hover:scale-105 transition-transform flex items-center gap-3">
                <MessageCircle size={20} /> AGENDAR CONSULTA
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais (Cards com Animação) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Heart, t: "Humanização", d: "Atendimento focado no seu bem-estar e conforto total." },
            { icon: Shield, t: "Segurança", d: "Equipamentos de última geração e protocolos rigorosos." },
            { icon: Star, t: "Qualidade", d: "Materiais premium para resultados estéticos naturais." }
          ].map((item, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-16 h-16 bg-[#5BC8C8]/10 rounded-2xl flex items-center justify-center text-[#5BC8C8] mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.t}</h3>
              <p className="text-slate-500 leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Serviços (Grid de Imagens) */}
      <section id="servicos" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h2>
            <div className="w-20 h-1.5 bg-[#5BC8C8] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="group relative h-[450px] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl">
                <img 
                  src={`https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&sig=${s}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Serviço" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h4 className="text-2xl font-bold text-white mb-2">Tratamento Demo</h4>
                  <p className="text-white/70 mb-6">Breve descrição sobre o procedimento realizado na clínica.</p>
                  <button className="text-[#5BC8C8] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                    Ver detalhes <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-20 h-20 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <Phone size={35} />
        </motion.button>
      </div>

      <footer className="bg-slate-950 text-white/50 py-20 text-center">
        <div className="text-xl font-bold text-white mb-6 uppercase tracking-[0.2em]">ORAL UNIC</div>
        <p>© 2026 Landing Page Demonstrativa. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
