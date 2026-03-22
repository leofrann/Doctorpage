import { motion } from 'motion/react';
import { Instagram, Globe, MessageCircle } from 'lucide-react';

export function Links() {
  const links = [
    {
      title: "Falar com Especialista",
      subtitle: "Atendimento via WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/5511985792453?text=Ol%C3%A1%2C%20equipe%20Doctorpage!%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20atrair%20pacientes%20pelo%20Google.",
      primary: true
    },
    {
      title: "Acessar nosso Site",
      subtitle: "Conheça nosso trabalho",
      icon: Globe,
      url: "https://doctorpage.com.br",
      primary: false
    },
    {
      title: "Nosso Instagram",
      subtitle: "@agenciadoctorpage",
      icon: Instagram,
      url: "https://www.instagram.com/agenciadoctorpage/",
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#050B14] flex flex-col items-center py-16 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10 flex flex-col items-center"
      >
        {/* Profile/Logo */}
        <div className="w-24 h-24 bg-slate-900 rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-xl overflow-hidden p-4">
          <img 
            src="https://drive.google.com/thumbnail?id=1eLwo8m3hS28Ws0wuolDwCgxEUjnjKoj9&sz=w800" 
            alt="Doctorpage" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Doctorpage</h1>
        <p className="text-slate-400 text-center mb-10">
          Transformamos seu site em uma máquina de atrair pacientes.
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className={`flex items-center p-4 rounded-2xl border transition-all duration-300 group ${
                link.primary 
                  ? 'bg-blue-600 border-blue-500 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4 ${
                link.primary ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-300 group-hover:text-white group-hover:bg-blue-500/20'
              }`}>
                <link.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className={`font-semibold text-lg ${link.primary ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                  {link.title}
                </h2>
                <p className={`text-sm ${link.primary ? 'text-blue-100' : 'text-slate-400 group-hover:text-slate-300'}`}>
                  {link.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
