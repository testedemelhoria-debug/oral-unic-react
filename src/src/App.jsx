import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const myWhatsapp = "5522981338015";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* BARRA DEMO */}
      <div className="bg-[#1A2C2C] text-white py-2 px-4 text-center text-xs sticky top-0 z-[100] flex flex-col md:flex-row items-center justify-center gap-2">
        <span>Este é um site de demonstração. Quer um igual?</span>
        <a href={`https://wa.me/${myWhatsapp}?text=Quero um site assim!`} className="bg-green-500 px-3 py-1 rounded font-bold">Quero um site assim!</a>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md py-4 text-gray-900' : 'bg-transparent py-8 text-white'} top-[80px] md:top-[40px]`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold tracking-tighter">ORAL UNIC</h1>
          <div className="hidden md:flex gap-8 items-center text-sm font-semibold uppercase tracking-widest">
            <a href="#home">Início</a>
            <a href="#servicos">Serviços</a>
            <a href={`https://wa.me/${myWhatsapp}`} className="bg-green-500 text-white px-6 py-2 rounded-full uppercase tracking-normal">Agendar</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center bg-gray-900">
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1629909608135-ca092194a1d6?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex text-yellow-400 mb-4 gap-1"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Seu sorriso com mais <span className="text-turquesa">harmonia</span>.</h2>
            <p className="text-xl text-gray-200 mb-8 italic font-light">Atendimento humanizado com a Dra. Laíse Carvalho.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href={`https://wa.me/${myWhatsapp}`} className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-center">Agendar WhatsApp</a>
              <a href="#servicos" className="border border-white text-white px-10 py-4 rounded-full font-bold text-center">Nossos Serviços</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif mb-16">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {['Limpeza', 'Restauração', 'Próteses'].map((item) => (
              <div key={item} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition">
                <h4 className="text-2xl font-serif mb-4">{item}</h4>
                <p className="text-gray-500 mb-6 text-sm italic">Excelência e cuidado em cada detalhe do seu tratamento.</p>
                <a href={`https://wa.me/${myWhatsapp}`} className="text-turquesa font-bold inline-flex items-center gap-2">Saiba mais <ChevronRight size={14}/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-escuro text-white py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-2xl font-serif mb-4 text-turquesa">ORAL UNIC</h4>
            <p className="text-gray-400 text-sm italic">Dra. Laíse Carvalho - Nova Friburgo/RJ</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="font-bold mb-4 uppercase tracking-widest">Contato</p>
            <p className="flex items-center gap-2"><Phone size={14}/> (22) 98133-8015</p>
            <p className="flex items-center gap-2"><MapPin size={14}/> Av. Július Arp, 80 - Loja 119</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="font-bold mb-4 uppercase tracking-widest">Horário</p>
            <p className="flex items-center gap-2"><Clock size={14}/> Seg-Sáb: 09h às 20h</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        <div className="bg-white p-3 rounded-xl shadow-2xl mb-2 text-[10px] font-bold border-l-4 border-green-500 animate-bounce">
          Crie um site assim! <br/>
          <a href={`https://wa.me/${myWhatsapp}?text=Quero um site assim!`} className="text-green-600 uppercase underline italic">Quero agora!</a>
        </div>
        <a href={`https://wa.me/${myWhatsapp}`} className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>
  );
}

