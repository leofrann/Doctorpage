import { Layout } from '../components/Layout';

export function PrivacyPolicy() {
  return (
    <Layout>
      <div className="prose prose-invert prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidade</h1>
        
        <p className="text-slate-300 mb-6">
          A sua privacidade é importante para nós. É política da Doctorpage respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Doctorpage, e outros sites que possuímos e operamos.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Informações que coletamos</h2>
        <p className="text-slate-300 mb-4">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p className="text-slate-300 mb-6">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Compartilhamento de dados</h2>
        <p className="text-slate-300 mb-6">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Links externos</h2>
        <p className="text-slate-300 mb-6">
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Seus direitos</h2>
        <p className="text-slate-300 mb-6">
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>

        <p className="text-slate-300 mt-8 text-sm">
          Esta política é efetiva a partir de {new Date().toLocaleDateString('pt-BR')}.
        </p>
      </div>
    </Layout>
  );
}
