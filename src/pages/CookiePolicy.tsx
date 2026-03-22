import { Layout } from '../components/Layout';

export function CookiePolicy() {
  return (
    <Layout>
      <div className="prose prose-invert prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Cookies</h1>
        
        <p className="text-slate-300 mb-6">
          Esta é a Política de Cookies da Doctorpage, acessível em doctorpage.com.br.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">O que são cookies?</h2>
        <p className="text-slate-300 mb-6">
          Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode evitar que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Como usamos os cookies?</h2>
        <p className="text-slate-300 mb-6">
          Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Desativar cookies</h2>
        <p className="text-slate-300 mb-6">
          Você pode evitar a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies que definimos</h2>
        <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
          <li>
            <strong>Cookies relacionados a formulários:</strong> Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
          </li>
          <li>
            <strong>Cookies de preferências do site:</strong> Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies de Terceiros</h2>
        <p className="text-slate-300 mb-6">
          Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
        </p>
        <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
          <li>
            Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.
          </li>
          <li>
            As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">Mais informações</h2>
        <p className="text-slate-300 mb-6">
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
        </p>
      </div>
    </Layout>
  );
}
