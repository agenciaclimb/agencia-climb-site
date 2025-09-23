const Sobre = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            🚀 Sobre a Agência IA Climb
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformando negócios com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Inteligência Artificial
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em soluções inteligentes que automatizam processos, 
            aumentam vendas e revolucionam a forma como empresas se relacionam com seus clientes.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Democratizar o acesso à Inteligência Artificial para empresas de todos os tamanhos, 
              criando soluções que não apenas automatizam tarefas, mas transformam completamente 
              a experiência do cliente e os resultados do negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Foco em Resultados</h3>
              <p className="text-gray-600">
                Cada solução é desenvolvida com métricas claras e objetivos mensuráveis para garantir ROI positivo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação Constante</h3>
              <p className="text-gray-600">
                Sempre atualizados com as últimas tecnologias de IA para oferecer soluções de ponta.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parceria Verdadeira</h3>
              <p className="text-gray-600">
                Não somos apenas fornecedores, somos parceiros estratégicos no crescimento do seu negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5 anos</div>
            <div className="text-gray-600">Experiência em IA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte Técnico</div>
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                  2019
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fundação da Agência</h3>
                  <p className="text-gray-600">
                    Nascemos com a visão de tornar a Inteligência Artificial acessível para empresas brasileiras, 
                    começando com automações simples e evoluindo para soluções complexas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Primeiros Grandes Clientes</h3>
                  <p className="text-gray-600">
                    Conquistamos a confiança de empresas de médio porte, desenvolvendo nossos primeiros 
                    sistemas de CRM inteligente e chatbots avançados.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expansão dos Serviços</h3>
                  <p className="text-gray-600">
                    Lançamos a LigIA, nossa IA de atendimento, e nos tornamos parceiros certificados Bitrix24, 
                    expandindo nosso portfólio de soluções.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                  2022
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reconhecimento no Mercado</h3>
                  <p className="text-gray-600">
                    Alcançamos a marca de 300 projetos entregues e fomos reconhecidos como uma das 
                    principais agências de IA do interior de São Paulo.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Era da IA Generativa</h3>
                  <p className="text-gray-600">
                    Com o boom da IA generativa, nos especializamos em GPT, Claude e outras tecnologias 
                    de ponta, criando soluções ainda mais inteligentes e personalizadas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Liderança em Inovação</h3>
                  <p className="text-gray-600">
                    Hoje somos referência em soluções de IA para negócios, com mais de 500 projetos 
                    entregues e uma equipe especializada nas mais avançadas tecnologias do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe Especializada
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais experientes e apaixonados por tecnologia e inovação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">JC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jeferson Costa</h3>
              <p className="text-purple-600 font-semibold mb-3">CEO & Fundador</p>
              <p className="text-gray-600 text-sm">
                Especialista em IA com mais de 8 anos de experiência. Visionário por trás das principais 
                inovações da agência e responsável pela estratégia de crescimento.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe de Desenvolvedores</h3>
              <p className="text-blue-600 font-semibold mb-3">Especialistas em IA</p>
              <p className="text-gray-600 text-sm">
                Time multidisciplinar com expertise em Python, JavaScript, Machine Learning e 
                integração de APIs de IA mais avançadas do mercado.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultores de Negócio</h3>
              <p className="text-green-600 font-semibold mb-3">Estrategistas</p>
              <p className="text-gray-600 text-sm">
                Especialistas em análise de processos e otimização de resultados, garantindo que 
                cada solução gere ROI positivo e impacto real no negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Transparência</h3>
              <p className="text-gray-600 text-sm">
                Comunicação clara e honesta em todos os projetos, sem promessas irreais ou custos ocultos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Agilidade</h3>
              <p className="text-gray-600 text-sm">
                Entregas rápidas sem comprometer a qualidade, usando metodologias ágeis e eficientes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Excelência</h3>
              <p className="text-gray-600 text-sm">
                Busca constante pela perfeição técnica e satisfação total dos nossos clientes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Inovação</h3>
              <p className="text-gray-600 text-sm">
                Sempre na vanguarda da tecnologia, testando e implementando as soluções mais avançadas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para conhecer nossa equipe?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Converse com nossos especialistas e descubra como podemos transformar seu negócio 
            com soluções inteligentes e personalizadas.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer melhor a Agência IA Climb e conversar sobre soluções para meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold transition-colors inline-flex items-center"
          >
            💬 Falar com Nossa Equipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

