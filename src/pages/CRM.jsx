const CRM = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            📊 CRM Inteligente
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gerencie seus leads com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              inteligência artificial
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestão completa do funil de vendas com automação inteligente. Nunca mais perca uma oportunidade de negócio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gestão de Leads e Contatos</h3>
            <p className="text-gray-600">
              Organize todos os seus contatos em um só lugar com informações detalhadas e histórico completo de interações.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Funil Kanban Personalizável</h3>
            <p className="text-gray-600">
              Visualize seu processo de vendas com quadros Kanban customizáveis para cada etapa do seu funil.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Integração com WhatsApp</h3>
            <p className="text-gray-600">
              Conecte seu WhatsApp Business e gerencie todas as conversas diretamente no CRM.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Atribuição de Tarefas</h3>
            <p className="text-gray-600">
              Delegue tarefas para sua equipe com prazos, prioridades e acompanhamento automático.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Relatórios Estratégicos</h3>
            <p className="text-gray-600">
              Dashboards inteligentes com métricas de vendas, conversão e performance da equipe.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Preenchimento Automático com IA</h3>
            <p className="text-gray-600">
              A IA preenche automaticamente dados dos leads com base em conversas e interações.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher nosso CRM Inteligente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Aumento de Produtividade</h3>
              <p className="text-gray-600 mb-6">
                Automatize tarefas repetitivas e foque no que realmente importa: fechar vendas. 
                Nossos clientes relatam aumento de 40% na produtividade da equipe.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Decisões Baseadas em Dados</h3>
              <p className="text-gray-600">
                Relatórios inteligentes mostram exatamente onde estão as oportunidades e gargalos 
                do seu processo de vendas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Nunca Perca um Lead</h3>
              <p className="text-gray-600 mb-6">
                Sistema de notificações inteligentes e follow-up automático garantem que nenhuma 
                oportunidade seja perdida.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Integração Total</h3>
              <p className="text-gray-600">
                Conecta com WhatsApp, email, telefone e outras ferramentas que você já usa no 
                seu dia a dia.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como implementamos seu CRM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Análise do Processo</h3>
              <p className="text-gray-600">
                Mapeamos seu processo atual de vendas e identificamos oportunidades de melhoria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuração</h3>
              <p className="text-gray-600">
                Configuramos o CRM de acordo com suas necessidades específicas e integrações.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Treinamento</h3>
              <p className="text-gray-600">
                Treinamos sua equipe para usar todas as funcionalidades de forma eficiente.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Acompanhamento e otimizações constantes para maximizar seus resultados.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transforme sua gestão de vendas hoje mesmo!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Fale com nossa IA e descubra como o CRM Inteligente pode revolucionar seus resultados.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer o CRM Inteligente da Agência Climb e agendar uma demonstração."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
          >
            💬 Falar com IA sobre CRM Inteligente
          </a>
        </div>
      </div>
    </div>
  );
};

export default CRM;

