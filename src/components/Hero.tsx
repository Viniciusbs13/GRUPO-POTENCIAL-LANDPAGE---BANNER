import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import heroVideo from '../assets/hero-video.mp4';

const logos = [
  { name: 'ISO 9001', svg: <div className="flex items-center gap-2 font-display font-bold text-slate-400 opacity-50"><div className="w-8 h-8 rounded-full border-2 border-slate-400 flex items-center justify-center text-[10px]">ISO</div>9001</div> },
  { name: 'ABREVIS', svg: <div className="font-display font-bold text-slate-400 opacity-50 text-xl tracking-tighter">ABREVIS</div> },
  { name: 'SESVESP', svg: <div className="font-display font-bold text-slate-400 opacity-50 text-xl tracking-tighter">SESVESP</div> },
  { name: 'ANVISA', svg: <div className="font-display font-bold text-slate-400 opacity-50 text-xl tracking-tighter">ANVISA</div> },
  { name: 'FENAVIST', svg: <div className="font-display font-bold text-slate-400 opacity-50 text-xl tracking-tighter">FENAVIST</div> }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden selection:bg-brand-blue/20">
      {/* Background Layered Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#60B1FF] rounded-full blur-[150px] opacity-20" />
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-[#319AFF] rounded-full blur-[120px] opacity-15" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20 relative z-10 flex-grow flex flex-col">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center flex-grow">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:translate-x-12"
          >
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-black/5 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <span className="text-[13px] font-medium text-slate-600">
                Líder em <span className="font-bold text-slate-900">Soluções Corporativas</span> por +21 anos
              </span>
            </div>

            <h1 className="text-5xl lg:text-[75px] font-display font-bold leading-[1.05] tracking-[-2px] text-slate-950 mb-8 max-w-[800px]">
              Consultoria, serviços <br />e <span className="text-brand-blue italic">operações</span>.
            </h1>

            <p className="text-lg text-slate-500 max-w-[500px] mb-12 leading-relaxed tracking-[-0.5px]">
              Soluções integradas de terceirização, consultoria e gestão para transformar a eficiência operacional da sua empresa.
            </p>

            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue/80 backdrop-blur-[2px] rounded-[16px] text-white font-bold text-lg shadow-xl shadow-brand-blue/20 border border-white/20 relative group overflow-hidden"
              style={{
                boxShadow: 'inset 0px 4px 4px 0px rgba(255, 255, 255, 0.35), 0 10px 30px rgba(0, 132, 255, 0.2)'
              }}
            >
              Conhecer Nossas Soluções
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-brand-blue group-hover:translate-x-1 transition-transform shadow-sm">
                <ArrowRight size={18} />
              </div>
            </motion.a>
          </motion.div>

          {/* Orb Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-square max-w-[550px] lg:-translate-x-12">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain mix-blend-multiply"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>

        {/* Footer Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-10 border-t border-slate-100"
        >
          <p className="text-center text-[13px] font-medium text-slate-400 mb-10 tracking-[1px] uppercase">
            Certificações e Associações de Qualidade
          </p>
          <div className="flex flex-wrap justify-center items-center gap-[100px] grayscale opacity-50">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                {logo.svg}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
