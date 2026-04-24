import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Shield, Package, GraduationCap, X } from 'lucide-react';

interface VideoItem {
  title: string;
  category: string;
  icon: React.ReactNode;
  videoUrl: string;
}

const showcaseVideos: VideoItem[] = [
  {
    title: "Limpeza e Conservação",
    category: "Operacional",
    icon: <Sparkles className="w-5 h-5" />,
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=34a8138b1f09c693a104f35f83863777478d10b7&profile_id=139&oauth2_token_id=57447761"
  },
  {
    title: "Vigilância e Segurança",
    category: "Prevenção",
    icon: <Shield className="w-5 h-5" />,
    videoUrl: "https://player.vimeo.com/external/517090000.sd.mp4?s=83d6a2a514d3a0885e7e008b6e680a6c01e389bf&profile_id=165&oauth2_token_id=57447761"
  },
  {
    title: "Logística Inteligente",
    category: "Performance",
    icon: <Package className="w-5 h-5" />,
    videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbfa6f332616880ead02970a273e970b56a93&profile_id=165&oauth2_token_id=57447761"
  },
  {
    title: "Treinamento Técnico",
    category: "Capacitação",
    icon: <GraduationCap className="w-5 h-5" />,
    videoUrl: "https://player.vimeo.com/external/414441544.sd.mp4?s=8233f2834b9d0342ab3c6b24d73280c43697669d&profile_id=139&oauth2_token_id=57447761"
  }
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="section-padding bg-slate-900 overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-blue-deep rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[13px] font-bold text-brand-blue uppercase tracking-[2px] mb-6">Operações em Foco</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Nossa excelência em <span className="text-brand-blue text-brand-blue italic">movimento</span>.
              </h3>
              <p className="text-slate-400 text-lg">
                Vídeos demonstrativos de nossos processos e equipes atuando com o padrão de qualidade Grupo Potencial.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl"
          >
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center animate-pulse">
              <Play className="text-white w-4 h-4 fill-white translate-x-0.5" />
            </div>
            <p className="text-sm font-medium text-white/80 tracking-tight">
              Apresentação demonstrativa <br /> 
              <span className="text-xs text-brand-blue">Portfólio em Vídeo</span>
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseVideos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedVideo(item)}
              className="group relative h-[400px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-slate-800" />
              
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
                <source src={item.videoUrl} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-start">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl text-white group-hover:bg-brand-blue transition-colors">
                    {item.icon}
                  </div>
                </div>
                
                <div>
                  <span className="inline-block px-3 py-1 bg-brand-blue/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/30">
                  <Play className="text-white w-6 h-6 fill-white translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[24px] overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-slate-900 transition-all"
              >
                <X size={20} />
              </button>

              <video 
                autoPlay 
                controls 
                className="w-full h-full"
                src={selectedVideo.videoUrl}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand-blue/20">
                    {selectedVideo.icon}
                  </div>
                  <div>
                    <p className="text-brand-blue font-bold uppercase tracking-widest text-[10px] mb-1">{selectedVideo.category}</p>
                    <h2 className="text-2xl font-display font-bold text-white tracking-tight">{selectedVideo.title}</h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
