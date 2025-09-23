const Desenvolvimento = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-4">
            🛠️ Desenvolvimento de Sistemas Personalizados
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme sua ideia em um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              sistema funcional com IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ideal para quem deseja um sistema sob medida, com IA integrada desde o início. 
            Desenvolvemos soluções completas que automatizam processos e impulsionam resultados.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Sistemas Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">37 dias</div>
            <div className="text-gray-600">Prazo Médio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte Técnico</div>
          </div>
        </div>

        {/* Process - 3 Etapas */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo em 3 etapas simples e rápidas
            </h2>
            <p className="text-xl text-gray-600">
              Cobramos somente após cada etapa de entrega, garantindo total transparência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Etapa 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Estruturação do Projeto
              </h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-orange-600">7 dias</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Análise completa dos requisitos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Arquitetura do sistema definida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Cronograma detalhado aprovado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Wireframes e fluxos validados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Tecnologias e IA selecionadas</span>
                </li>
              </ul>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Protótipo Interativo
              </h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-orange-600">15 dias</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Interface funcional desenvolvida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Funcionalidades principais ativas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Integração com IA implementada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Testes de usabilidade realizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Feedback incorporado e validado</span>
                </li>
              </ul>
            </div>

            {/* Etapa 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Entrega Funcional
              </h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-orange-600">15 dias úteis</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Sistema 100% funcional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Deploy em produção realizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Treinamento da equipe incluído</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Documentação técnica completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Suporte pós-entrega garantido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies & AI */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias de Ponta com IA Integrada
            </h2>
            <p className="text-xl text-gray-600">
              Utilizamos as melhores tecnologias do mercado para criar sistemas robustos e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Inteligência Artificial</h3>
              <p className="text-gray-600 text-sm">OpenAI, Claude, Machine Learning</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Backend Robusto</h3>
              <p className="text-gray-600 text-sm">Node.js, Python, PostgreSQL</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Frontend Moderno</h3>
              <p className="text-gray-600 text-sm">React, Vue.js, TypeScript</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 text-sm">AWS, Docker, CI/CD</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nosso desenvolvimento?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrega Garantida</h3>
              <p className="text-gray-600">
                Pagamento apenas após cada etapa concluída. Sem riscos para seu investimento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sob Medida</h3>
              <p className="text-gray-600">
                Cada sistema é único, desenvolvido especificamente para suas necessidades e processos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IA Nativa</h3>
              <p className="text-gray-600">
                Inteligência artificial integrada desde o início, não como um complemento posterior.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Escalabilidade</h3>
              <p className="text-gray-600">
                Sistemas preparados para crescer junto com seu negócio, sem limitações técnicas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança Total</h3>
              <p className="text-gray-600">
                Protocolos de segurança avançados e conformidade com LGPD garantidos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Treinamento Incluído</h3>
              <p className="text-gray-600">
                Capacitação completa da sua equipe para usar todas as funcionalidades do sistema.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sistemas que já desenvolvemos
            </h2>
            <p className="text-xl text-gray-600">
              Soluções reais que transformaram negócios de diversos segmentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏥 Sistema Hospitalar com IA</h3>
              <p className="text-gray-700 text-sm mb-4">
                Gestão completa de pacientes com diagnóstico assistido por IA e agendamento inteligente.
              </p>
              <div className="text-blue-600 font-semibold text-sm">Redução de 40% no tempo de atendimento</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏪 E-commerce Inteligente</h3>
              <p className="text-gray-700 text-sm mb-4">
                Plataforma de vendas com recomendações por IA e chatbot de atendimento automatizado.
              </p>
              <div className="text-green-600 font-semibold text-sm">Aumento de 65% nas vendas</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏭 Automação Industrial</h3>
              <p className="text-gray-700 text-sm mb-4">
                Sistema de controle de produção com IA preditiva para manutenção e qualidade.
              </p>
              <div className="text-purple-600 font-semibold text-sm">Redução de 30% nos custos</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎓 Plataforma Educacional</h3>
              <p className="text-gray-700 text-sm mb-4">
                LMS com IA para personalização de conteúdo e acompanhamento de progresso dos alunos.
              </p>
              <div className="text-orange-600 font-semibold text-sm">Melhoria de 50% no engajamento</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Fintech com IA</h3>
              <p className="text-gray-700 text-sm mb-4">
                Sistema financeiro com análise de risco por IA e aprovação automática de crédito.
              </p>
              <div className="text-red-600 font-semibold text-sm">Aprovação 10x mais rápida</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🚚 Logística Inteligente</h3>
              <p className="text-gray-700 text-sm mb-4">
                Sistema de gestão logística com otimização de rotas por IA e tracking em tempo real.
              </p>
              <div className="text-teal-600 font-semibold text-sm">Economia de 25% em combustível</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Converse com nossa IA e agende uma análise gratuita do seu projeto. 
            Vamos mostrar como podemos automatizar seus processos com inteligência artificial.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Tenho uma ideia para um sistema personalizado e gostaria de agendar uma análise gratuita do projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold transition-colors inline-flex items-center"
          >
            💬 Converse com nossa IA e agende uma análise do seu projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Desenvolvimento;

