const Depoimentos = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      company: "TechSolutions Ltda",
      role: "CEO",
      content: "A Agência IA Climb transformou completamente nossa gestão de vendas. O CRM inteligente que desenvolveram aumentou nossa conversão em 180% em apenas 4 meses. A equipe é extremamente técnica e entende realmente de negócios.",
      rating: 5,
      service: "CRM Inteligente"
    },
    {
      id: 2,
      name: "Marina Silva",
      company: "Consultoria Empresarial MS",
      role: "Diretora Comercial",
      content: "Implementaram o Bitrix24 na nossa empresa de forma impecável. A automação dos processos nos fez economizar 15 horas semanais de trabalho manual. ROI foi positivo já no segundo mês. Recomendo de olhos fechados!",
      rating: 5,
      service: "Consultoria Bitrix24"
    },
    {
      id: 3,
      name: "Roberto Oliveira",
      company: "Clínica Saúde Total",
      role: "Administrador",
      content: "A LigIA revolucionou nosso atendimento! Agora 80% das consultas são agendadas automaticamente via WhatsApp. Os pacientes adoram a praticidade e nossa equipe pode focar no que realmente importa: cuidar das pessoas.",
      rating: 5,
      service: "LigIA - IA Ativa"
    },
    {
      id: 4,
      name: "Ana Paula Costa",
      company: "E-commerce Fashion",
      role: "Proprietária",
      content: "O site que criaram para nossa loja online é simplesmente perfeito! Design moderno, carregamento rápido e otimizado para vendas. Nossas vendas online triplicaram desde o lançamento. Equipe nota 10!",
      rating: 5,
      service: "Criação de Sites"
    },
    {
      id: 5,
      name: "Fernando Santos",
      company: "Indústria MetalTech",
      role: "Diretor de Operações",
      content: "Desenvolveram um sistema de controle de produção sob medida para nossa indústria. A IA preditiva para manutenção reduziu nossas paradas não programadas em 60%. Investimento que se pagou rapidamente.",
      rating: 5,
      service: "Desenvolvimento de Sistemas"
    },
    {
      id: 6,
      name: "Juliana Rodrigues",
      company: "Escola Inovação",
      role: "Coordenadora Pedagógica",
      content: "A plataforma educacional que criaram é fantástica! Os alunos estão mais engajados e conseguimos acompanhar o progresso de cada um individualmente. A IA personaliza o conteúdo de forma impressionante.",
      rating: 5,
      service: "Desenvolvimento de Sistemas"
    },
    {
      id: 7,
      name: "Marcos Pereira",
      company: "Transportadora Rápida",
      role: "Gerente de Logística",
      content: "O sistema de logística inteligente otimizou nossas rotas e reduziu custos de combustível em 25%. A integração com nossos processos foi perfeita e o suporte é excepcional. Parceria de longo prazo garantida!",
      rating: 5,
      service: "Desenvolvimento de Sistemas"
    },
    {
      id: 8,
      name: "Patrícia Lima",
      company: "Advocacia Lima & Associados",
      role: "Sócia",
      content: "Migração do nosso CRM antigo para o Bitrix24 foi um sucesso total. Não perdemos nenhum dado e ganhamos funcionalidades que nem sabíamos que precisávamos. Produtividade da equipe aumentou significativamente.",
      rating: 5,
      service: "Consultoria Bitrix24"
    },
    {
      id: 9,
      name: "Ricardo Almeida",
      company: "Startup FinTech",
      role: "CTO",
      content: "Desenvolveram nossa plataforma fintech com IA para análise de risco. A aprovação de crédito que antes levava dias, agora é instantânea. Tecnologia de ponta com implementação profissional.",
      rating: 5,
      service: "Desenvolvimento de Sistemas"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            ⭐ Depoimentos de Clientes
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              falam sobre nós
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 empresas já transformaram seus negócios com nossas soluções de IA. 
            Veja os resultados reais que alcançamos juntos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Recomendam</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Service Tag */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                {testimonial.service}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600">
              Números reais de transformação que nossos clientes alcançaram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+180%</div>
              <div className="text-gray-600 font-semibold mb-2">Aumento em Vendas</div>
              <div className="text-gray-500 text-sm">Média dos clientes CRM</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">-60%</div>
              <div className="text-gray-600 font-semibold mb-2">Redução de Tempo</div>
              <div className="text-gray-500 text-sm">Em processos manuais</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">+300%</div>
              <div className="text-gray-600 font-semibold mb-2">ROI Médio</div>
              <div className="text-gray-500 text-sm">Retorno do investimento</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3 dias</div>
              <div className="text-gray-600 font-semibold mb-2">Tempo Médio</div>
              <div className="text-gray-500 text-sm">Para ver resultados</div>
            </div>
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos em Vídeo
            </h2>
            <p className="text-xl text-gray-600">
              Ouça diretamente de nossos clientes sobre suas experiências
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">▶️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Carlos Mendes</h3>
              <p className="text-gray-600 text-sm mb-4">CEO TechSolutions</p>
              <p className="text-gray-500 text-sm">
                "Como o CRM inteligente transformou nossa empresa..."
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">▶️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Marina Silva</h3>
              <p className="text-gray-600 text-sm mb-4">Diretora Comercial</p>
              <p className="text-gray-500 text-sm">
                "Implementação do Bitrix24 que mudou tudo..."
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">▶️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Roberto Oliveira</h3>
              <p className="text-gray-600 text-sm mb-4">Administrador Clínica</p>
              <p className="text-gray-500 text-sm">
                "LigIA revolucionou nosso atendimento..."
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              📹 Vídeos disponíveis em breve! Entre em contato para agendar uma conversa com nossos clientes.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empresas que Confiam em Nós
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="text-2xl mb-2">🏥</div>
              <div className="font-semibold text-gray-900">Clínicas e Hospitais</div>
              <div className="text-gray-500 text-sm">50+ unidades</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="text-2xl mb-2">🏪</div>
              <div className="font-semibold text-gray-900">E-commerces</div>
              <div className="text-gray-500 text-sm">120+ lojas online</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="text-2xl mb-2">🏭</div>
              <div className="font-semibold text-gray-900">Indústrias</div>
              <div className="text-gray-500 text-sm">30+ fábricas</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold text-gray-900">Consultorias</div>
              <div className="text-gray-500 text-sm">80+ escritórios</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quer ser nosso próximo caso de sucesso?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Junte-se a mais de 500 empresas que já transformaram seus negócios com nossas soluções de IA. 
            Converse com nossa equipe e descubra como podemos ajudar você também.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Vi os depoimentos no site e gostaria de saber como vocês podem ajudar meu negócio também."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold transition-colors inline-flex items-center"
          >
            💬 Quero Ser o Próximo Caso de Sucesso
          </a>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;

