import { Layout } from '../components/Layout';

export function TermsOfUse() {
  return (
    <Layout>
      <div className="prose prose-invert prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-white mb-8">Termos de Uso</h1>
        
        <p className="text-slate-300 mb-6">
          Ao acessar ao site Doctorpage, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Uso de Licença</h2>
        <p className="text-slate-300 mb-4">
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Doctorpage, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
        </p>
        <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
          <li>Modificar ou copiar os materiais;</li>
          <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
          <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Doctorpage;</li>
          <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
          <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Isenção de responsabilidade</h2>
        <p className="text-slate-300 mb-6">
          Os materiais no site da Doctorpage são fornecidos 'como estão'. Doctorpage não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Limitações</h2>
        <p className="text-slate-300 mb-6">
          Em nenhum caso o Doctorpage ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Doctorpage, mesmo que Doctorpage ou um representante autorizado da Doctorpage tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Precisão dos materiais</h2>
        <p className="text-slate-300 mb-6">
          Os materiais exibidos no site da Doctorpage podem incluir erros técnicos, tipográficos ou fotográficos. Doctorpage não garante que qualquer material em seu site seja preciso, completo ou atual.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Modificações</h2>
        <p className="text-slate-300 mb-6">
          O Doctorpage pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
        </p>
      </div>
    </Layout>
  );
}
