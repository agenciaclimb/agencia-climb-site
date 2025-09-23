import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                🚀 Transformação Digital com IA
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Soluções inteligentes em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                IA para alavancar seu negócio!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Criação de sites, CRM, atendimento automatizado e sistemas sob medida para pequenas, médias e grandes empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer as soluções de IA da Agência Climb."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                💬 Fale agora com nossa IA no WhatsApp
              </a>
              <Link
                to="/sobre"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border border-gray-300 transition-colors"
              >
                Ver demonstração
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">3 dias</div>
              <div className="text-gray-600">Entrega média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">+300%</div>
              <div className="text-gray-600">Aumento médio em conversões</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold">Sobre a Agência</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Especialistas em Inteligência Artificial para Negócios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma agência especializada em implementar soluções de IA que realmente transformam negócios. 
              Nossa missão é democratizar o acesso à inteligência artificial, oferecendo ferramentas poderosas e acessíveis para empresas de todos os tamanhos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Projetos entregues em até 3 dias úteis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IA Integrada</h3>
              <p className="text-gray-600">Automação inteligente em todos os processos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Atendimento contínuo via IA e humanos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Comprovado</h3>
              <p className="text-gray-600">Retorno médio de 300% em 90 dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um ecossistema completo de ferramentas inteligentes para automatizar, otimizar e escalar seu negócio com a mais avançada tecnologia de IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Criação de Sites */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Criação de Sites</h3>
              <p className="text-gray-600 mb-4">Sites que vendem por você, com agilidade e inteligência. Entregamos em 3 dias úteis.</p>
              <Link
                to="/criacao-sites"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Saiba mais →
              </Link>
            </div>

            {/* CRM */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Inteligente</h3>
              <p className="text-gray-600 mb-4">Gerencie seus leads com inteligência artificial e automação completa do funil de vendas.</p>
              <Link
                to="/crm"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                Saiba mais →
              </Link>
            </div>

            {/* LigIA */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LigIA - IA Ativa</h3>
              <p className="text-gray-600 mb-4">Sua nova atendente inteligente por WhatsApp e telefone. Atende e realiza ligações.</p>
              <Link
                to="/ligia"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
              >
                Saiba mais →
              </Link>
            </div>

            {/* Desenvolvimento */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desenvolvimento</h3>
              <p className="text-gray-600 mb-4">Transforme sua ideia em um sistema funcional com IA integrada desde o início.</p>
              <Link
                to="/desenvolvimento"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Saiba mais →
              </Link>
            </div>

            {/* Bitrix24 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultoria Bitrix24</h3>
              <p className="text-gray-600 mb-4">Especialistas em Bitrix24 para transformar sua operação com implementação completa.</p>
              <Link
                to="/bitrix24"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Saiba mais →
              </Link>
            </div>

            {/* Depoimentos */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Depoimentos</h3>
              <p className="text-gray-600 mb-4">Veja o que nossos clientes dizem sobre os resultados obtidos com nossas soluções.</p>
              <Link
                to="/depoimentos"
                className="inline-flex items-center text-gray-600 font-semibold hover:text-gray-700"
              >
                Ver depoimentos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar seu negócio com IA?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Fale agora com nossa IA e descubra como podemos alavancar seus resultados em apenas 3 dias!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer as soluções de IA da Agência Climb."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Conversar com IA no WhatsApp
            </a>
            <a
              href="tel:08003631234"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ligar: 0800 363 1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

