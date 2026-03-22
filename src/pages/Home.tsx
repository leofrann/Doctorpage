import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Search, 
  LayoutTemplate, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  ShieldCheck,
  Star,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050B14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1eLwo8m3hS28Ws0wuolDwCgxEUjnjKoj9&sz=w800" 
              alt="Doctorpage" 
              width="200"
              height="40"
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/agenciadoctorpage/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Doctorpage"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
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
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main>
        {/* 1. HERO */}
        <section className="relative pt-30 pb-20 md:pt-30 md:pb-32 px-6 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Especialistas em conversão
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            Você não precisa de mais seguidores. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Precisa aparecer no Google.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Se o seu negócio não aparece quando o cliente procura, você está perdendo clientes todos os dias para a concorrência.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="https://wa.me/5511985792453?text=Ol%C3%A1%2C%20equipe%20Doctorpage!%20Quero%20transformar%20meu%20site%20em%20uma%20m%C3%A1quina%20de%20atrair%20pacientes%20pelo%20Google." 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero aparecer no Google com uma Landing Page otimizada"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-[#050B14] text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(57,232,210,0.4)] hover:shadow-[0_0_40px_rgba(57,232,210,0.6)] hover:-translate-y-1"
            >
              Quero aparecer no Google
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PORTFÓLIO */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-[#08101E]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos recentes</h2>
            <p className="text-slate-400">Sites criados para dominar as buscas e converter visitantes.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Dra. Maycline",
                subtitle: "Landing Page Otimizada",
                image: "https://drive.google.com/thumbnail?id=1SsHlv6ZN3-2rfucwjwhIOu0V4ESN7fqT&sz=w800",
                contain: true
              },
              {
                id: 2,
                title: "Dental Blanc",
                subtitle: "Landing Page Otimizada",
                image: "https://drive.google.com/thumbnail?id=1u4lLHtQ8tt0kNRHnOD69bUsKw98v1hK-&sz=w800",
                contain: true
              },
              {
                id: 3,
                title: "Dr. Lucas R. Canedo",
                subtitle: "Landing Page Otimizada",
                image: "https://drive.google.com/thumbnail?id=1KuBUK_GDEBiYzY4FGoO_wnfFsRMHXNcm&sz=w800",
                contain: true
              }
            ].map((project, index) => (
              <motion.div 
                key={project.id}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-colors"
              >
                <div className={`aspect-[4/3] overflow-hidden flex items-center justify-center bg-slate-800/50 ${project.contain ? 'p-3' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={`Projeto de Landing Page para ${project.title}`} 
                    title={`Projeto ${project.title} - Doctorpage`}
                    loading="lazy"
                    width="800"
                    height="600"
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${project.contain ? 'object-cover object-top rounded-xl' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-blue-400 text-sm font-medium mb-2 block">{project.subtitle}</span>
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCO DA DOR */}
      <section className="py-32 px-6 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            O problema não é falta de cliente.<br />
            <span className="text-slate-500">É falta de visibilidade.</span>
          </motion.h2>
          <motion.p {...fadeIn} className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Todos os dias, milhares de pessoas procuram pelo seu serviço no Google. O dinheiro já está na mesa. A única questão é: <strong className="text-white font-medium">eles vão encontrar você ou o seu concorrente?</strong>
          </motion.p>
        </div>
      </section>

      {/* 4. INSIGHT */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-900/20 to-transparent border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter">
              Quem aparece, <span className="text-blue-500">fecha.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 5. SOLUÇÃO */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Seu site como máquina de gerar clientes
              </h2>
              <p className="text-lg text-slate-400 mb-10">
                Criamos estruturas digitais focadas em um único objetivo: transformar visitantes desconhecidos em contatos qualificados no seu WhatsApp.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Search, text: "Aparecer no topo do Google" },
                  { icon: ShieldCheck, text: "Mostrar autoridade imediata" },
                  { icon: Target, text: "Receber contatos qualificados" },
                  { icon: TrendingUp, text: "Gerar previsibilidade de vendas" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-slate-200 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-blue-500">
                <p className="text-xl text-white font-medium italic">
                  "Você não precisa de mais esforço. Precisa de estrutura."
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0A1120] p-8 shadow-2xl">
                {/* Mockup UI */}
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-3/4 bg-white/5 rounded-lg" />
                  <div className="h-4 w-full bg-white/5 rounded-lg" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-lg" />
                  <div className="pt-4 flex gap-4">
                    <div className="h-10 w-32 bg-blue-600/50 rounded-lg" />
                    <div className="h-10 w-32 bg-white/5 rounded-lg" />
                  </div>
                </div>
                {/* Floating element */}
                <div className="absolute -right-6 -bottom-6 bg-[#050B14] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Novo Lead</div>
                    <div className="text-white font-medium">Via Google Search</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-[#08101E] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como funciona</h2>
            <p className="text-slate-400">Um processo simples, transparente e focado em resultados.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: "1. Análise", desc: "Estudamos seu mercado e concorrentes para encontrar as melhores oportunidades." },
              { icon: LayoutTemplate, title: "2. Criação", desc: "Desenvolvemos uma página de alta conversão focada no seu cliente ideal." },
              { icon: Target, title: "3. Posicionamento", desc: "Otimizamos a estrutura para o Google entender e priorizar seu site." },
              { icon: Users, title: "4. Geração de leads", desc: "Sua página vai ao ar pronta para receber tráfego e gerar contatos." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#050B14] border border-white/5 hover:border-blue-500/30 transition-colors relative group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIFERENCIAL */}
      <section className="py-32 px-6 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                O que torna a <span className="text-blue-500">Doctorpage</span> diferente
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Foco absoluto em resultado",
                  "Não é só design bonito",
                  "Estrutura para gerar clientes",
                  "Simplicidade para você"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-6 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative hidden lg:block">
               <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full" />
                  <div className="w-3/4 h-3/4 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-blue-500/20 blur-2xl" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-5xl font-bold text-white mb-2">100%</div>
                    <div className="text-blue-400 font-medium uppercase tracking-widest text-sm">Foco em Conversão</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. COMPARATIVO */}
      <section className="py-24 px-6 bg-[#08101E] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">A diferença na prática</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="p-8 rounded-3xl bg-[#050B14] border border-white/5 opacity-70">
              <h3 className="text-xl font-semibold text-slate-400 mb-8 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-slate-500" />
                Sem site / Site amador
              </h3>
              <ul className="space-y-5">
                {[
                  "Depende apenas de indicações",
                  "Perde clientes para a concorrência",
                  "Não passa credibilidade",
                  "Difícil de ser encontrado",
                  "Sem previsibilidade de contatos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-3xl bg-gradient-to-b from-blue-900/20 to-[#050B14] border border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px]" />
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-blue-500" />
                Com a Doctorpage
              </h3>
              <ul className="space-y-5 relative z-10">
                {[
                  "Aparece quando o cliente procura",
                  "Domina sua região no Google",
                  "Autoridade instantânea",
                  "Máquina de receber contatos",
                  "Previsibilidade de crescimento"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES (GOOGLE REVIEWS) */}
      <section className="py-24 px-6 relative bg-[#050B14]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que dizem sobre nós</h2>
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Avaliações reais de clientes que transformaram seus resultados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Carlos Eduardo",
                time: "2 semanas atrás",
                text: "Excelente trabalho! Meu consultório passou a receber contatos diários pelo WhatsApp depois que a Doctorpage refez meu site e otimizou para o Google. Recomendo de olhos fechados.",
                initial: "C",
                color: "bg-blue-600"
              },
              {
                name: "Clínica OdontoPrime",
                time: "1 mês atrás",
                text: "Estávamos gastando muito com anúncios sem retorno. A equipe da Doctorpage mudou nossa estratégia e agora aparecemos organicamente nas buscas da nossa região. O investimento se pagou no primeiro mês.",
                initial: "O",
                color: "bg-emerald-600"
              },
              {
                name: "Dra. Juliana Martins",
                time: "3 meses atrás",
                text: "Profissionalismo do início ao fim. A página ficou linda, super rápida e realmente focada em conversão. Meus pacientes sempre elogiam a facilidade de agendar a consulta pelo site.",
                initial: "J",
                color: "bg-purple-600"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-white/10 transition-colors relative flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {review.initial}
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm">{review.name}</h3>
                      <p className="text-slate-400 text-xs">{review.time}</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA INTERMEDIÁRIO */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
            Se você não aparece, você <span className="text-blue-500">não existe</span> para o cliente.
          </motion.h2>
          <motion.div {...fadeIn}>
            <a 
              href="https://wa.me/5511985792453?text=Ol%C3%A1%2C%20equipe%20Doctorpage!%20Quero%20transformar%20meu%20site%20em%20uma%20m%C3%A1quina%20de%20atrair%20pacientes%20pelo%20Google." 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero começar agora a criar meu site médico"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#050B14] text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Quero começar agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 10. BLOCO EMOCIONAL */}
      <section className="py-32 px-6 bg-[#08101E] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold text-white mb-8">
            Pare de correr atrás de clientes
          </motion.h2>
          <motion.p {...fadeIn} className="text-xl text-slate-400 leading-relaxed">
            Imagine acordar, abrir o WhatsApp e ver mensagens de pessoas que já procuraram pelo seu serviço, já viram sua autoridade e só querem saber como contratar. Essa é a realidade de quem tem uma presença digital estruturada para conversão.
          </motion.p>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section id="contato" className="py-32 px-6 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-8">
            Comece a aparecer no Google
          </motion.h2>
          <motion.div {...fadeIn} className="flex flex-col items-center gap-4">
            <a 
              href="https://wa.me/5511985792453?text=Ol%C3%A1%2C%20equipe%20Doctorpage!%20Quero%20transformar%20meu%20site%20em%20uma%20m%C3%A1quina%20de%20atrair%20pacientes%20pelo%20Google." 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero meu site - Falar com a equipe Doctorpage no WhatsApp"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-[#050B14] text-xl font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(57,232,210,0.5)] hover:shadow-[0_0_60px_rgba(57,232,210,0.7)] hover:-translate-y-1"
            >
              Quero meu site
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-slate-400 text-sm flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Atendimento rápido pelo WhatsApp
            </p>
          </motion.div>
        </div>
      </section>
      </main>

      {/* 12. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#03060A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1eLwo8m3hS28Ws0wuolDwCgxEUjnjKoj9&sz=w800" 
              alt="Doctorpage" 
              width="200"
              height="40"
              loading="lazy"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
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
