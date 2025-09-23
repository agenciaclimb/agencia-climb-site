import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-white bg-blue-600 px-4 py-2 rounded-lg' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200';
  };

  return (
    <header className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">IA</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Agência IA Climb</h1>
              <p className="text-sm text-gray-500 font-medium">Soluções Inteligentes em IA</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link to="/" className={`font-medium text-sm transition-all duration-200 ${isActive('/')}`}>
              Início
            </Link>
            <Link to="/criacao-sites" className={`font-medium text-sm transition-all duration-200 ${isActive('/criacao-sites')}`}>
              Criação de Sites
            </Link>
            <Link to="/crm" className={`font-medium text-sm transition-all duration-200 ${isActive('/crm')}`}>
              CRM Inteligente
            </Link>
            <Link to="/ligia" className={`font-medium text-sm transition-all duration-200 ${isActive('/ligia')}`}>
              LigIA
            </Link>
            <Link to="/desenvolvimento" className={`font-medium text-sm transition-all duration-200 ${isActive('/desenvolvimento')}`}>
              Desenvolvimento
            </Link>
            <Link to="/bitrix24" className={`font-medium text-sm transition-all duration-200 ${isActive('/bitrix24')}`}>
              Bitrix24
            </Link>
            <Link to="/sobre" className={`font-medium text-sm transition-all duration-200 ${isActive('/sobre')}`}>
              Sobre
            </Link>
            <Link to="/depoimentos" className={`font-medium text-sm transition-all duration-200 ${isActive('/depoimentos')}`}>
              Depoimentos
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5516997333824&text=Olá! Gostaria de conhecer as soluções de IA da Agência Climb."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <nav className="flex flex-wrap gap-2">
            <Link to="/" className={`text-xs font-medium transition-all duration-200 ${isActive('/').replace('px-4 py-2', 'px-3 py-1')}`}>
              Início
            </Link>
            <Link to="/criacao-sites" className={`text-xs font-medium transition-all duration-200 ${isActive('/criacao-sites').replace('px-4 py-2', 'px-3 py-1')}`}>
              Sites
            </Link>
            <Link to="/crm" className={`text-xs font-medium transition-all duration-200 ${isActive('/crm').replace('px-4 py-2', 'px-3 py-1')}`}>
              CRM
            </Link>
            <Link to="/ligia" className={`text-xs font-medium transition-all duration-200 ${isActive('/ligia').replace('px-4 py-2', 'px-3 py-1')}`}>
              LigIA
            </Link>
            <Link to="/desenvolvimento" className={`text-xs font-medium transition-all duration-200 ${isActive('/desenvolvimento').replace('px-4 py-2', 'px-3 py-1')}`}>
              Dev
            </Link>
            <Link to="/bitrix24" className={`text-xs font-medium transition-all duration-200 ${isActive('/bitrix24').replace('px-4 py-2', 'px-3 py-1')}`}>
              Bitrix24
            </Link>
            <Link to="/sobre" className={`text-xs font-medium transition-all duration-200 ${isActive('/sobre').replace('px-4 py-2', 'px-3 py-1')}`}>
              Sobre
            </Link>
            <Link to="/depoimentos" className={`text-xs font-medium transition-all duration-200 ${isActive('/depoimentos').replace('px-4 py-2', 'px-3 py-1')}`}>
              Depoimentos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

