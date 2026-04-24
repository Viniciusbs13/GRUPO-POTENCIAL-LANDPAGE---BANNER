import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-white border-t border-slate-100 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex flex-col -gap-1">
                <span className="font-display font-bold text-lg leading-none tracking-tighter text-slate-900">GRUPO</span>
                <span className="font-display font-bold text-lg leading-none tracking-tighter text-brand-blue">POTENCIAL</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-[240px]">
              Somos um Grupo Empresarial atuante em vários segmentos dentro da prestação de serviços, com agilidade e diversidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 text-slate-400 hover:text-brand-blue transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-brand-blue transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h4 className="text-slate-950 font-bold mb-6 text-[13px] uppercase tracking-widest">Empresa</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a href="#sobre" className="hover:text-brand-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-brand-blue transition-colors">Nossos Serviços</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">ISO 9001</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-slate-950 font-bold mb-6 text-[13px] uppercase tracking-widest">Links Úteis</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">LGPD</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-slate-950 font-bold mb-6 text-[13px] uppercase tracking-widest">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-blue" />
                (19) 3804-4444
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-blue" />
                comercial@grupopotencial.com.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-blue mt-1 shrink-0" />
                <span className="leading-tight">Rua Áurea, 540 - JD. Áurea<br />Mogi Mirim-SP - CEP 13800-206</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium text-slate-400">
          <p>© 2026 Grupo Potencial. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-blue">Security</a>
            <a href="#" className="hover:text-brand-blue">Terms</a>
            <a href="#" className="hover:text-brand-blue">Status</a>
          </div>
        </div>
      </div>

      {/* Floating Support (WhatsApp) */}
      <a 
        href="https://wa.me/551938044444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        <Phone size={24} />
      </a>
    </footer>
  );
}
