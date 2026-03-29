"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, MapPin, Clock, Heart, Shield, MessageCircle, Star, ChevronRight } from "lucide-react"

// DEMO - Substitua pelos dados reais do cliente
const WHATSAPP_NUMBER = "5500000000000"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.`
const CLINIC_NAME = "SUA CLÍNICA"
const CLINIC_HIGHLIGHT = "AQUI"
const CITY_NAME = "[Sua Cidade]"

// Components
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              {CLINIC_NAME} <span className="text-primary">{CLINIC_HIGHLIGHT}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#diferenciais" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-whatsapp-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Agendar Consulta
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-foreground hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-whatsapp text-whatsapp-foreground rounded-full text-base font-medium mt-2"
            >
              <Phone className="w-5 h-5" />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dental.jpg"
          alt="Clínica Odontológica - Ambiente moderno e acolhedor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">+200 pacientes satisfeitos</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 text-balance">
            Seu sorriso com mais <span className="text-primary">harmonia</span>, saúde e confiança.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Atendimento humanizado e tratamentos personalizados em {CITY_NAME}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-whatsapp-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-base font-semibold hover:bg-secondary/80 transition-colors"
            >
              Conhecer Serviços
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function DifferentialsSection() {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado e acolhedor para cada paciente, respeitando suas necessidades individuais."
    },
    {
      icon: Shield,
      title: "Procedimentos Confortáveis",
      description: "Técnicas modernas e equipamentos de última geração para tratamentos mais confortáveis."
    },
    {
      icon: MessageCircle,
      title: "Explicações Claras",
      description: "Transparência total sobre diagnósticos e tratamentos, para você entender cada etapa."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeito ao seu tempo com agendamentos organizados e atendimento no horário marcado."
    }
  ]

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Por que nos <span className="text-primary">escolher</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprometimento com excelência e cuidado em cada detalhe do seu tratamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      image: "/images/service-cleaning.jpg",
      title: "Limpeza Dental",
      description: "Remoção de tártaro e placa bacteriana para um sorriso mais saudável e brilhante.",
      benefits: ["Prevenção de cáries", "Gengivas saudáveis", "Hálito fresco"]
    },
    {
      image: "/images/service-restoration.jpg",
      title: "Restauração",
      description: "Recupere a estética e função dos seus dentes com materiais de alta qualidade.",
      benefits: ["Aparência natural", "Durabilidade", "Conforto ao mastigar"]
    },
    {
      image: "/images/service-prosthesis.jpg",
      title: "Próteses",
      description: "Soluções personalizadas para recuperar seu sorriso completo com conforto.",
      benefits: ["Sorriso completo", "Melhor mastigação", "Autoestima renovada"]
    }
  ]

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nossos <em className="text-primary not-italic">Serviços</em>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tratamentos completos para a saúde e beleza do seu sorriso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Saiba mais
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria S.",
      text: "Atendimento excelente! O(a) profissional é muito atencioso(a) e explicou todo o procedimento com calma. Recomendo muito!",
      rating: 5
    },
    {
      name: "João P.",
      text: "Finalmente encontrei uma clínica onde me sinto à vontade. Ambiente limpo, equipe simpática e tratamento de qualidade.",
      rating: 5
    },
    {
      name: "Ana C.",
      text: "Fiz minha limpeza e restauração aqui. Fiquei impressionada com o cuidado e profissionalismo. Super indico!",
      rating: 5
    }
  ]

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            O que nossos pacientes <span className="text-primary">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos pacientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <span className="font-medium text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Onde nos <span className="text-primary">encontrar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados no centro de {CITY_NAME}, com fácil acesso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    [Endereço da Clínica]<br />
                    {CITY_NAME}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sábado<br />
                    09h às 20h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    (00) 00000-0000
                  </a>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-whatsapp text-whatsapp-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="h-80 lg:h-full min-h-80 rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5!2d-42.533!3d-22.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Conselheiro%20J%C3%BAlius%20Arp%2C%2080%20-%20Centro%2C%20Nova%20Friburgo%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <span className="text-2xl font-bold tracking-tight mb-4 block">
              {CLINIC_NAME} <span className="text-primary">{CLINIC_HIGHLIGHT}</span>
            </span>
            <p className="text-background/70 leading-relaxed">
              Clínica odontológica com atendimento humanizado em {CITY_NAME}.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-background/70">
              <li>[Endereço da Clínica]</li>
              <li>{CITY_NAME}</li>
              <li>Seg-Sáb: 09h às 20h</li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (00) 00000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} {CLINIC_NAME} {CLINIC_HIGHLIGHT}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 md:w-8 md:h-8"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

export default function DentalClinicLandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DifferentialsSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
