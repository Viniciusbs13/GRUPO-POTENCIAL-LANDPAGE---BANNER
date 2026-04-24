import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contato" className="section-padding bg-white overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative bg-brand-blue rounded-[40px] p-12 lg:p-24 overflow-hidden text-center"
        >
          {/* Animated Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#60B1FF]/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-bold text-sm mb-8 backdrop-blur-md border border-white/10">
              <Sparkles size={16} className="text-brand-blue" />
              Sua empresa merece o melhor suporte
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
              Terceirização SIM.<br />
              <span className="text-white tracking-tighter italic underline decoration-white/30 underline-offset-8">Precarização NÃO.</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              Transforme sua operação com ética, eficiência e resultados extraordinários. 
              Fale agora com um de nossos consultores especializados.
            </p>

            <motion.a
              href="https://wa.me/551938044444"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-blue rounded-[20px] font-bold text-lg shadow-2xl hover:bg-slate-50 transition-all"
            >
              Solicitar Proposta Agora
              <Send size={20} className="text-brand-blue" />
            </motion.a>

            <p className="mt-8 text-white/40 text-xs font-bold tracking-[2px] uppercase">
              Retorno em até 24 horas úteis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
