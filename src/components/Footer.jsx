import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Agência IA Climb</h3>
                <p className="text-sm text-gray-400">Soluções Inteligentes em IA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas em implementar soluções de IA que realmente transformam negócios. 
              Democratizamos o acesso à inteligência artificial para empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer as soluções de IA da Agência Climb."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="tel:08003631234"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                0800 363 1234
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/criacao-sites" className="text-gray-400 hover:text-white transition-colors">
                  Criação de Sites
                </Link>
              </li>
              <li>
                <Link to="/crm" className="text-gray-400 hover:text-white transition-colors">
                  CRM Inteligente
                </Link>
              </li>
              <li>
                <Link to="/ligia" className="text-gray-400 hover:text-white transition-colors">
                  LigIA - IA Ativa
                </Link>
              </li>
              <li>
                <Link to="/desenvolvimento" className="text-gray-400 hover:text-white transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link to="/bitrix24" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria Bitrix24
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Agência IA Climb. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

