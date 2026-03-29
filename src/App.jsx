import React from 'react';
import { Phone, MapPin, Clock, Star, ChevronRight, Instagram } from 'lucide-react';

export default function App() {
  const myWhatsapp = "5522981338015";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* BARRA SUPERIOR (Aquele toque profissional) */}
      <div className="bg-[#1A2C2C] text-white py-3 px-4 text-center text-xs sticky top-0 z-[100]">
        <p className="flex items-center justify-center gap-2">
          <span className="bg-turquesa px-2 py-0.5 rounded text-[10px] font-bold uppercase">Demo</span>
          Este é um site modelo. <a href={`https://wa.me/${myWhatsapp}`} className="underline font-bold text-turquesa">Clique aqui para ter um igual!</a>
        </p>
      </div>

      {/* HERO SECTION (A parte com a foto principal) */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909608135-ca092194a1d6?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover object-center brightness-50"
            alt="Consultório Odontológico"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="flex text-yellow-400 mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              <span className="text-sm ml-2 text-white opacity-80">+200 pacientes satisfeitos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Seu sorriso com mais <span className="text-turquesa">harmonia</span>, saúde e confiança.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 font-light leading-relaxed">
              Atendimento humanizado e tratamentos personalizados com a Dra. Laíse Carvalho em Nova Friburgo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/${myWhatsapp}`} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl">
                <i className="fab fa-whatsapp text-xl"></i> Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS (Cards brancos com ícones) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-turquesa/10 rounded-full flex items-center justify-center text-turquesa mb-6">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Procedimentos Confortáveis</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Técnicas modernas e anestesia eficiente garantem um atendimento sem dor.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-turquesa/10 rounded-full flex items-center justify-center text-turquesa mb-6">
              <i className="fas fa-heart text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Atendimento Humanizado</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Cada consulta começa com escuta ativa e empatia. Você não é apenas um número.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-turquesa/10 rounded-full flex items-center justify-center text-turquesa mb-6">
              <i className="fas fa-comment-dots text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Explicações Claras</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Explicamos cada etapa do tratamento em linguagem simples, para sua total segurança.</p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS COM FOTOS (Onde o site brilha) */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-turquesa font-bold tracking-widest uppercase text-sm">Tratamentos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Nossos <span className="italic font-light text-turquesa">Serviços</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Serviço 1 */}
            <div className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Limpeza" />
                <span className="absolute top-4 left-4 bg-turquesa text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Prevenção</span>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Limpeza e Prevenção</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">O cuidado essencial para manter seu sorriso saudável e evitar problemas futuros.</p>
                <a href={`https://wa.me/${myWhatsapp}`} className="text-turquesa font-bold flex items-center gap-2">Saiba mais <ChevronRight size={16}/></a>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Restauração" />
                <span className="absolute top-4 left-4 bg-[#E2A1A1] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Estética</span>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Restaurações Estéticas</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">Recupere a forma e beleza dos seus dentes com materiais de última geração.</p>
                <a href={`https://wa.me/${myWhatsapp}`} className="text-turquesa font-bold flex items-center gap-2">Saiba mais <ChevronRight size={16}/></a>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1460672314991-c19ca376c9b5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Prótese" />
                <span className="absolute top-4 left-4 bg-escuro text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Reabilitação</span>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">Próteses Modernas</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">Devolva a função mastigatória e sua autoestima com conforto e naturalidade.</p>
                <a href={`https://wa.me/${myWhatsapp}`} className="text-turquesa font-bold flex items-center gap-2">Saiba mais <ChevronRight size={16}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a href={`https://wa.me/${myWhatsapp}`} className="fixed bottom-6 right-6 z-[200] bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl animate-pulse">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
