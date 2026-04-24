import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Sparkles, Shield, UserPlus, Leaf, Package, 
  Truck, Tractor, Bug, Scale, Megaphone, Settings, 
  TrendingUp, GraduationCap, HardHat, X, Play, CheckCircle2, ChevronRight
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDetails: string;
  videoUrl: string;
  benefits: string[];
}

const services: Service[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Recursos Humanos",
    description: "Recrutamento técnico e gestão estratégica de talentos para sua organização.",
    fullDetails: "Nossa metodologia de RH foca em encontrar o profissional perfeito para a cultura da sua empresa. Através de testes psicológicos e análise técnica rigorosa, garantimos retenção e produtividade.",
    videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=0136270659779df3005ba3ee27e80f977d2bd5f1&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Recrutamento Especializado", "Treinamento Comportamental", "Gestão de Folha de Pagamento"]
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Limpeza e Conservação",
    description: "Gestão completa de ambientes com equipes treinadas e produtos certificados.",
    fullDetails: "Utilizamos as melhores práticas de higienização hospitalar e corporativa. Nossas equipes são treinadas sob normas de segurança e utilizam equipamentos de ponta para garantir um ambiente impecável.",
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=34a8138b1f09c693a104f35f83863777478d10b7&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Protocolos de Higienização", "Supervisão 24h", "Equipamentos Modernos"]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Patrimonial",
    description: "Vigilância especializada com inteligência e monitoramento em tempo real.",
    fullDetails: "Segurança armada e desarmada focada na prevenção de riscos. Nossa central de monitoramento utiliza IA para detectar anomalias antes mesmo que elas ocorram.",
    videoUrl: "https://player.vimeo.com/external/517090000.sd.mp4?s=83d6a2a514d3a0885e7e008b6e680a6c01e389bf&profile_id=165&oauth2_token_id=57447761",
    benefits: ["Rondas Eletrônicas", "Proteção Perimetral", "Consultoria de Riscos"]
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Mão de Obra Temporária",
    description: "Soluções ágeis para demandas sazonais com total segurança jurídica.",
    fullDetails: "Flexibilidade para sua operação em picos de demanda. Cuidamos de todo o processo de contratação e gestão, garantindo agilidade e conformidade com a Lei 6.019.",
    videoUrl: "https://player.vimeo.com/external/394741364.sd.mp4?s=0fc40562e6e3065a911e3b5059d040a463af8308&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Agilidade na Contratação", "Flexibilidade Operacional", "Zero Risco Jurídico"]
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Paisagismo",
    description: "Manutenção e revitalização de áreas verdes para valorização do seu patrimônio.",
    fullDetails: "Design de jardins e manutenção técnica que transformam seu espaço em um pulmão verde. Focamos na harmonia entre a natureza e a arquitetura do seu empreendimento.",
    videoUrl: "https://player.vimeo.com/external/403487042.sd.mp4?s=7b102555513470656a8947f6362207b536109e9e&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Design Exclusivo", "Manutenção Fitossanitária", "Sistemas de Irrigação"]
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Logística Integrada",
    description: "Otimização de fluxos e armazenagem com foco na redução de gargalos.",
    fullDetails: "Gestão de estoque, preparo de pedidos e expedição. Nossa inteligência logística reduz o tempo de ciclo e otimiza o uso do espaço físico do seu CD.",
    videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbfa6f332616880ead02970a273e970b56a93&profile_id=165&oauth2_token_id=57447761",
    benefits: ["Controle de Estoque", "WMS Avançado", "Picking & Packing"]
  },
  {
    icon: <Tractor className="w-6 h-6" />,
    title: "Empilhadeiras",
    description: "Operação e manutenção de frotas industriais com alta produtividade.",
    fullDetails: "Operadores certificados e capacitados para movimentação pesada. Oferecemos também gestão de manutenção preventiva para evitar paradas na sua linha.",
    videoUrl: "https://player.vimeo.com/external/291657801.sd.mp4?s=72f65f6f4c802528c1c68126b801c34a2e564d6c&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Operadores Certificados", "Manutenção Preventiva", "Gestão de Frotas"]
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Transportes",
    description: "Logística de transporte de cargas e passageiros com total controle e segurança.",
    fullDetails: "Frotas monitoradas 24h para transporte executivo e de mercadorias. Priorizamos a pontualidade e a integridade de tudo o que transportamos.",
    videoUrl: "https://player.vimeo.com/external/394741355.sd.mp4?s=915330342eb3a164a66e40b493f0b2f57a9f7d08&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Rastreamento em Tempo Real", "Seguro de Carga", "Motoristas Treinados"]
  },
  {
    icon: <Bug className="w-6 h-6" />,
    title: "Controle de Pragas",
    description: "Sanitização de ambientes seguindo as mais rigorosas normas da ANVISA.",
    fullDetails: "Metodologias seguras para controle de insetos e roedores. Utilizamos biotecnologia que não agride o meio ambiente e garante proteção duradoura.",
    videoUrl: "https://player.vimeo.com/external/489955700.sd.mp4?s=33a046c82300bba6eb063b4db26f1a8c0d1c4708&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Certificado ANVISA", "Barreira Química", "Relatórios Técnicos"]
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Consultoria Jurídica",
    description: "Assessoria especializada em compliance e direito empresarial preventivo.",
    fullDetails: "Redução de passivos através de uma gestão jurídica estratégica. Atuamos fortemente no compliance trabalhista e contratual para blindar sua empresa.",
    videoUrl: "https://player.vimeo.com/external/414441544.sd.mp4?s=8233f2834b9d0342ab3c6b24d73280c43697669d&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Blindagem Jurídica", "Gestão de Passivos", "Compliance 360°"]
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Assessoria Publicitária",
    description: "Fortalecimento de marca e comunicação estratégica para seu negócio.",
    fullDetails: "Marketing focado no B2B para elevar a posição da sua empresa no mercado. Branding, design e estratégias digitais que geram autoridade.",
    videoUrl: "https://player.vimeo.com/external/314150532.sd.mp4?s=a71971167191e4a77953288fbaf880299f01c5d6&profile_id=164&oauth2_token_id=57447761",
    benefits: ["Branding Corporativo", "Marketing de Performance", "Comunicação Interna"]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Manutenção Predial",
    description: "Prevenção e correção de ativos para garantir a continuidade operacional.",
    fullDetails: "Equipes multidisciplinares para elétrica, hidráulica e ar-condicionado. Nosso foco é evitar paradas catastróficas através de manutenção preditiva.",
    videoUrl: "https://player.vimeo.com/external/368535031.sd.mp4?s=72403de3c33306fbc3b538e1a6c1e5a5e7e5e1e5&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Manutenção Preventiva", "Atendimento Emergencial", "Gestão de Energia"]
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Promoção e Vendas",
    description: "Treinamento e alocação de equipes focadas em alta performance comercial.",
    fullDetails: "Promotores e vendedores treinados na arte da persuasão e negociação. Impulsionamos seu PDV com estratégias agressivas de merchandising.",
    videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=0136270659779df3005ba3ee27e80f977d2bd5f1&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Treinamento de Vendas", "Logística de PDV", "Auditoria de Lojas"]
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Treinamentos",
    description: "Capacitação profissional técnica e comportamental sob medida.",
    fullDetails: "Cursos customizados para as dores da sua equipe. Elevamos o nível técnico e a inteligência emocional do seu quadro de funcionários.",
    videoUrl: "https://player.vimeo.com/external/414441544.sd.mp4?s=8233f2834b9d0342ab3c6b24d73280c43697669d&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Certificados Válidos", "Treinamento In-company", "Mentoria de Gestão"]
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    title: "Segurança do Trabalho",
    description: "Gestão de riscos ocupacionais e treinamentos de normas regulamentadoras.",
    fullDetails: "NRs, laudos (PPRA/LTCAT) e cultura de segurança. Trabalhamos para que sua empresa tenha zero acidentes e total proteção legal.",
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=34a8138b1f09c693a104f35f83863777478d10b7&profile_id=139&oauth2_token_id=57447761",
    benefits: ["Laudos Técnicos", "Treinamento de NRs", "Gestão de EPIs"]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicos" className="section-padding bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[13px] font-bold text-brand-blue uppercase tracking-[2px] mb-6">Nossas Soluções</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-950 mb-6 tracking-tight">
              Um ecossistema completo de <span className="text-brand-blue">serviços </span> <span className="text-brand-blue italic">integrados</span>.
            </h3>
            <p className="text-slate-500 text-lg">
              Clique nos serviços para ver mais detalhes, benefícios e um vídeo demonstrativo de nossas operações.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedService(service)}
              className="p-8 rounded-[24px] liquid-glass cursor-pointer transition-all duration-300 group hover:bg-white relative overflow-hidden h-full"
            >
              {/* background video on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  src={service.videoUrl}
                />
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-blue/10 transition-colors" />
              
              <div className="w-12 h-12 bg-white/50 border border-black/5 rounded-[14px] flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                {service.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-slate-950 mb-3 tracking-tight group-hover:text-brand-blue transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Ver Detalhes
                <Play size={12} className="fill-brand-blue" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Liquid Glass Style */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-visible"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 border border-black/5 hover:bg-brand-blue hover:text-white transition-all shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Video Section */}
              <div className="lg:w-1/2 bg-slate-900 relative min-h-[300px] lg:min-h-0">
                <video 
                  autoPlay 
                  loop 
                  controls
                  className="w-full h-full object-cover"
                  src={selectedService.videoUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-10 left-10 text-white z-10">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
                        {selectedService.icon}
                      </div>
                      <h2 className="text-2xl font-display font-bold tracking-tight">{selectedService.title}</h2>
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                <h3 className="text-brand-blue font-bold tracking-[2px] uppercase text-xs mb-4">Detalhes da Operação</h3>
                <p className="text-xl lg:text-2xl font-display font-semibold text-slate-900 mb-8 leading-snug">
                  {selectedService.fullDetails}
                </p>

                <div className="space-y-6">
                  <h4 className="text-slate-950 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-brand-blue rounded-full" />
                    Principais Benefícios
                  </h4>
                  <div className="grid gap-4">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-brand-blue/5 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="text-slate-600 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                   <a 
                     href="https://wa.me/551938044444"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                   >
                     Solicitar Proposta
                     <ChevronRight size={18} className="text-brand-blue" />
                   </a>
                   <button 
                     onClick={() => setSelectedService(null)}
                     className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                   >
                     Fechar
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
