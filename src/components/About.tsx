import { motion } from 'motion/react';
import StatCounter from './StatCounter';

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[13px] font-bold text-brand-blue uppercase tracking-[2px] mb-6">Nossa História</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-950 mb-8 leading-tight tracking-tight">
              Excelência construída em <span className="text-brand-blue">duas</span> <span className="text-brand-blue italic">décadas</span> de compromisso.
            </h3>
            <div className="space-y-6 text-slate-500 leading-relaxed text-lg">
              <p>
                O <strong>Grupo Potencial</strong> atua há mais de 21 anos oferecendo suporte estratégico para empresas que buscam 
                eficiência e redução de custos operacionais.
              </p>
              <p>
                Iniciamos como consultoria especializada em RH e evoluímos para uma assessoria 360°, 
                integrando serviços de limpeza, vigilância, logística e treinamentos com foco total em resultados.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 py-8 border-y border-slate-100">
              <StatCounter value={21} suffix="+" label="Anos de história" />
              <StatCounter value={500} suffix="+" label="Clientes Atendidos" />
              <StatCounter value={15} suffix="+" label="Serviços Integrados" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border border-black/5">
              <img 
                src="/unnamed.jpg" 
                alt="Treinamento Grupo Potencial"
                className="w-full aspect-square object-cover"
              />
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
            
            <div className="absolute -bottom-6 -left-6 z-20 liquid-glass p-8 rounded-[24px] max-w-[280px]">
               <p className="text-slate-900 font-bold mb-2 text-lg tracking-tight">"Nossa missão é impulsionar o seu negócio com inteligência e estratégia."</p>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">— Diretoria Grupo Potencial</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
