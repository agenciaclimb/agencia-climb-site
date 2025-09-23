const LigIA = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            🤖 LigIA - IA Ativa e Receptiva
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua nova atendente inteligente:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              por WhatsApp e por telefone
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atende e realiza ligações para seus leads. Qualifica, agenda, vende e oferece suporte 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🤖 IA Receptiva</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Atendimento 24/7 automatizado no WhatsApp</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Responde perguntas frequentes instantaneamente</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Qualifica leads automaticamente</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Agenda reuniões e demonstrações</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Oferece suporte técnico básico</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📞 IA Ativa</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Realiza ligações para leads qualificados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Follow-up automático de propostas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Pesquisas de satisfação por telefone</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Confirmação de agendamentos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Cobrança amigável de pendências</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que a LigIA pode fazer pelo seu negócio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualificação Inteligente</h3>
              <p className="text-gray-600">
                Identifica automaticamente leads quentes através de perguntas estratégicas e comportamento de navegação.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agendamento Automático</h3>
              <p className="text-gray-600">
                Agenda reuniões, demonstrações e ligações diretamente na agenda da sua equipe comercial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vendas Conversacionais</h3>
              <p className="text-gray-600">
                Conduz o processo de vendas através de conversas naturais, apresentando soluções adequadas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suporte Técnico</h3>
              <p className="text-gray-600">
                Resolve dúvidas técnicas básicas e escalona casos complexos para especialistas humanos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow-up Inteligente</h3>
              <p className="text-gray-600">
                Acompanha leads em diferentes estágios do funil com mensagens personalizadas e timing perfeito.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integração Total</h3>
              <p className="text-gray-600">
                Conecta com seu CRM, agenda, sistema de vendas e outras ferramentas do seu negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Resultados comprovados com a LigIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Redução no tempo de resposta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Aumento na qualificação de leads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Melhoria na taxa de conversão</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Disponibilidade total</div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como a LigIA funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuração Personalizada</h3>
              <p className="text-gray-600">
                Configuramos a LigIA com o conhecimento específico do seu negócio, produtos e processos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integração Completa</h3>
              <p className="text-gray-600">
                Conectamos com WhatsApp, telefone, CRM e outras ferramentas que você já utiliza.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Operação Contínua</h3>
              <p className="text-gray-600">
                A LigIA começa a atender e ligar imediatamente, aprendendo e melhorando continuamente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experimente a LigIA trabalhando para você!
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Converse agora com nossa IA e veja como ela pode revolucionar seu atendimento e vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer a LigIA e ver uma demonstração prática."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              💬 Falar com IA sobre LigIA
            </a>
            <a
              href="tel:08007771234"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              📞 Ligar 0800 777 1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LigIA;

