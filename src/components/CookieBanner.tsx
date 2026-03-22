import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-xl z-[100] bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-6 animate-in slide-in-from-bottom-5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg">Gerenciar consentimento</h3>
        <button 
          onClick={handleReject}
          className="text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        Para proporcionar uma melhor experiência, usamos tecnologias como cookies para armazenar e/ou acessar informações do dispositivo. O consentimento com essas tecnologias nos permite processar dados como comportamento da navegação ou IDs exclusivos neste site. O não consentimento ou a revogação do consentimento pode afetar negativamente determinados recursos e funções.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <button 
          onClick={handleAccept}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          Aceitar
        </button>
        <button 
          onClick={handleReject}
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          Rejeitar
        </button>
      </div>
      
      <div className="flex gap-4 text-xs font-medium">
        <Link to="/cookies" className="text-blue-600 hover:underline">
          Política de cookies
        </Link>
        <Link to="/privacidade" className="text-blue-600 hover:underline">
          Política de privacidade
        </Link>
      </div>
    </div>
  );
}
