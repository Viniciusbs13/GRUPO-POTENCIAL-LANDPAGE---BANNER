import { motion } from 'motion/react';

const carouselImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2067&auto=format&fit=crop" },
  { id: 3, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop" }
];

// Doubling the array for seamless infinite scroll
const doubledImages = [...carouselImages, ...carouselImages];

export default function ImageCarousel() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h2 className="text-[13px] font-bold text-brand-blue uppercase tracking-[2px] mb-4 text-center">Nossas Operações</h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto">
          Imagens ilustrativas de nossas frotas, equipes e ambientes de trabalho em plena atividade.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-6"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledImages.map((image, index) => (
            <div 
              key={`${image.id}-${index}`} 
              className="w-[450px] h-[300px] shrink-0 rounded-[24px] overflow-hidden shadow-xl border border-slate-100 bg-slate-100"
            >
              <img 
                src={image.src} 
                alt={`Operação ${image.id}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
