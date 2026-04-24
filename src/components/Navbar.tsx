import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  return (
    <div className="fixed top-[30px] left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        style={{ opacity, scale }}
        className="pointer-events-auto h-16 px-6 lg:px-8 flex items-center justify-between gap-12 rounded-[16px] liquid-glass w-full max-w-fit mx-auto"
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col -gap-1">
            <span className="font-display font-bold text-lg leading-none tracking-tighter text-slate-900">GRUPO</span>
            <span className="font-display font-bold text-lg leading-none tracking-tighter text-brand-blue">POTENCIAL</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-[13px] font-medium text-slate-600 hover:text-brand-blue transition-colors">Sobre</a>
          <a href="#servicos" className="text-[13px] font-medium text-slate-600 hover:text-brand-blue transition-colors">Serviços</a>
          <a href="#contato" className="text-[13px] font-medium text-slate-600 hover:text-brand-blue transition-colors">Contato</a>
        </div>

        {/* Action */}
        <a 
          href="https://wa.me/551938044444"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-[12px] text-[13px] font-bold shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-deep transition-all group"
        >
          <MessageSquare size={14} className="text-white" />
          Falar com Especialista
          <ChevronRight size={14} className="text-brand-blue group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.nav>
    </div>
  );
}
