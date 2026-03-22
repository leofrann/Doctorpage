import { Link } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050B14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1eLwo8m3hS28Ws0wuolDwCgxEUjnjKoj9&sz=w800" 
              alt="Doctorpage" 
              width="200"
              height="40"
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <a 
            href="https://wa.me/5511985792453?text=Ol%C3%A1%2C%20equipe%20Doctorpage!%20Quero%20transformar%20meu%20site%20em%20uma%20m%C3%A1quina%20de%20atrair%20pacientes%20pelo%20Google." 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com um especialista da Doctorpage"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all"
          >
            Falar com especialista
          </a>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-slate-900/50 border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
          {children}
        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#03060A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1eLwo8m3hS28Ws0wuolDwCgxEUjnjKoj9&sz=w800" 
              alt="Doctorpage" 
              width="200"
              height="40"
              loading="lazy"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} Doctorpage. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="https://wa.me/5511985792453?text=Ol%C3%A1%2C%20equipe%20Doctorpage!%20Quero%20transformar%20meu%20site%20em%20uma%20m%C3%A1quina%20de%20atrair%20pacientes%20pelo%20Google." target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Contato</a>
            <Link to="/termos" className="hover:text-blue-400 transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-blue-400 transition-colors">Privacidade</Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
