import { useState } from 'react';

const CriacaoSites = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'landing',
      name: 'Landing Page',
      price: 397,
      description: 'Design responsivo, SEO básico, Formulário de contato',
      features: [
        'Design responsivo e moderno',
        'SEO básico otimizado',
        'Formulário de contato integrado',
        'Hospedagem R$ 89,90/mês + domínio',
        'SSL certificado',
        'Entrega em 3 dias úteis',
        'Alterações gratuitas até 30 dias'
      ],
      popular: false
    },
    {
      id: 'vendas',
      name: 'Página de Vendas',
      price: 597,
      description: 'Teste A/B/C incluído, Otimização de conversão, Analytics avançado',
      features: [
        'Tudo do plano Landing Page',
        'Teste A/B/C para otimização',
        'Analytics avançado (Google Analytics 4)',
        'Pixel do Facebook/Meta',
        'Otimização de conversão',
        'Copywriting persuasivo',
        'Integração com WhatsApp Business',
        'Alterações gratuitas até 30 dias'
      ],
      popular: true
    },
    {
      id: 'institucional',
      name: 'Site Institucional',
      price: 797,
      description: 'Múltiplas páginas, CMS integrado, Suporte completo',
      features: [
        'Tudo do plano Página de Vendas',
        'Até 10 páginas',
        'CMS para edição de conteúdo',
        'Blog integrado',
        'Área de depoimentos',
        'Galeria de projetos',
        'Formulários avançados',
        'Integração com redes sociais',
        'Alterações gratuitas até 30 dias'
      ],
      popular: false
    }
  ];

  const handlePayment = (plan) => {
    // Aqui você integraria com o gateway de pagamento
    const message = `Olá! Gostaria de contratar o plano ${plan.name} por R$ ${plan.price}. Podem me enviar o link de pagamento?`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5516997333824&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            🌐 Criação de Sites
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sites que vendem por você, com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              agilidade e inteligência
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entregamos em 3 dias úteis após recebimento das informações. Sites otimizados para conversão com tecnologia de ponta.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
            <p className="text-gray-600">Sites prontos em até 3 dias úteis</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Responsivo</h3>
            <p className="text-gray-600">Funciona perfeitamente em todos os dispositivos</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Otimizado</h3>
            <p className="text-gray-600">Apareça no Google desde o primeiro dia</p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Escolha o plano ideal para seu negócio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                    <span className="text-gray-600 ml-2">à vista</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePayment(plan)}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Contratar Agora
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Stripe/MercadoPago: 3x sem juros<br/>
                    PIX: 5% desconto
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como funciona nosso processo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Briefing</h3>
              <p className="text-gray-600">
                Coletamos todas as informações necessárias sobre seu negócio e objetivos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Desenvolvimento</h3>
              <p className="text-gray-600">
                Nossa equipe desenvolve seu site com foco em conversão e performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrega</h3>
              <p className="text-gray-600">
                Site pronto e online em até 3 dias úteis com treinamento incluído
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quanto tempo leva para o site ficar pronto?
              </h3>
              <p className="text-gray-600">
                Entregamos em até 3 dias úteis após o recebimento de todas as informações necessárias (textos, imagens, dados da empresa).
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Como funciona a hospedagem?
              </h3>
              <p className="text-gray-600">
                A hospedagem tem custo de R$ 89,90 mensais incluindo domínio .com.br ou .com, SSL certificado e suporte técnico.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posso fazer alterações depois da entrega?
              </h3>
              <p className="text-gray-600">
                Sim! Oferecemos alterações gratuitas até 30 dias após a entrega. Após esse período, alterações podem ter custo adicional.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Como funciona o pagamento?
              </h3>
              <p className="text-gray-600">
                Aceitamos pagamento via Stripe ou MercadoPago em até 3x sem juros. Para mais parcelas há acréscimo. Pagamento à vista no PIX tem 5% de desconto.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para ter seu site profissional?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Fale com nossa IA agora e receba uma proposta personalizada em minutos!
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de saber mais sobre criação de sites e receber uma proposta personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
          >
            💬 Falar com IA sobre Criação de Sites
          </a>
        </div>
      </div>
    </div>
  );
};

export default CriacaoSites;

