const Bitrix24 = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            🚀 Consultoria Bitrix24 Especializada
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Maximize o potencial do seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Bitrix24 com nossa expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Somos especialistas certificados em Bitrix24 com mais de 300 implementações realizadas. 
            Transformamos sua gestão empresarial com configurações personalizadas e automações inteligentes.
          </p>
        </div>

        {/* Authority Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
            <div className="text-gray-600">Implementações</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5 anos</div>
            <div className="text-gray-600">Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Autoridade Bitrix24
            </h2>
            <p className="text-xl text-gray-600">
              Reconhecimento oficial e expertise comprovada na plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partner Certificado</h3>
              <p className="text-gray-600">
                Parceiro oficial Bitrix24 com certificação em implementação e customização avançada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Especialista em CRM</h3>
              <p className="text-gray-600">
                Expertise comprovada em configuração de pipelines, automações e relatórios personalizados.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automação Avançada</h3>
              <p className="text-gray-600">
                Criação de workflows complexos e integrações com sistemas externos via API.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para maximizar o ROI do seu investimento em Bitrix24
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Implementação */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Implementação Completa</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Análise completa dos processos atuais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Configuração personalizada do CRM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Criação de pipelines de vendas otimizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Configuração de campos personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Importação e organização de dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Treinamento completo da equipe</span>
                </li>
              </ul>
            </div>

            {/* Parametrização */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Parametrização Avançada</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Automações de vendas e marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Workflows personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Relatórios e dashboards customizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Integração com ferramentas externas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Configuração de permissões e acessos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Otimização de performance</span>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Suporte Especializado</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>Suporte técnico prioritário 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>Resolução rápida de problemas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>Atualizações e melhorias contínuas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>Consultoria estratégica mensal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>Treinamentos de reciclagem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>Backup e segurança de dados</span>
                </li>
              </ul>
            </div>

            {/* Migração */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Migração de Sistemas</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Migração de CRMs antigos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Importação de dados complexos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Mapeamento de campos e processos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Validação e limpeza de dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Migração sem interrupção do negócio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Testes e validação completa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Cases */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Sucesso Comprovados
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de empresas que transformaram sua gestão com nossa consultoria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600 mb-2">+150%</div>
                <div className="text-gray-600">Aumento em Vendas</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Empresa de Tecnologia</h3>
              <p className="text-gray-600 text-sm">
                Implementação completa do Bitrix24 com automações de vendas resultou em 150% de aumento no faturamento em 6 meses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">-60%</div>
                <div className="text-gray-600">Redução em Tempo</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consultoria Empresarial</h3>
              <p className="text-gray-600 text-sm">
                Automação de processos administrativos reduziu em 60% o tempo gasto em tarefas manuais da equipe.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">+200%</div>
                <div className="text-gray-600">Melhoria em Conversão</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-600 text-sm">
                Configuração de pipelines otimizados e automações de follow-up aumentaram a conversão de leads em 200%.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que somos referência em Bitrix24?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Foco em Resultados</h3>
              <p className="text-gray-600">
                Não apenas implementamos, mas garantimos que você alcance os objetivos de negócio definidos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementação Rápida</h3>
              <p className="text-gray-600">
                Metodologia própria que reduz o tempo de implementação em até 50% comparado ao mercado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Treinamento Completo</h3>
              <p className="text-gray-600">
                Capacitação intensiva da sua equipe para usar 100% do potencial da plataforma.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customização Avançada</h3>
              <p className="text-gray-600">
                Adaptamos o Bitrix24 exatamente aos seus processos, não o contrário.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte Vitalício</h3>
              <p className="text-gray-600">
                Relacionamento de longo prazo com suporte contínuo e melhorias constantes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação Constante</h3>
              <p className="text-gray-600">
                Sempre atualizados com as últimas funcionalidades e melhores práticas do mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Metodologia Comprovada
            </h2>
            <p className="text-xl text-gray-600">
              Processo estruturado que garante o sucesso da sua implementação
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">
                Análise completa dos processos atuais e identificação de oportunidades de melhoria.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Planejamento</h3>
              <p className="text-gray-600 text-sm">
                Criação do projeto detalhado com cronograma, escopo e objetivos bem definidos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Implementação</h3>
              <p className="text-gray-600 text-sm">
                Configuração, customização e integração do Bitrix24 com acompanhamento constante.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Otimização</h3>
              <p className="text-gray-600 text-sm">
                Monitoramento, ajustes e melhorias contínuas para maximizar os resultados.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para maximizar seu Bitrix24?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Converse com nossos especialistas e descubra como podemos transformar sua gestão empresarial. 
            Diagnóstico inicial gratuito para avaliar seu potencial de melhoria.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de saber mais sobre consultoria Bitrix24 e agendar um diagnóstico gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold transition-colors inline-flex items-center"
          >
            💬 Falar com Especialista Bitrix24
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bitrix24;

