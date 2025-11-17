import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center gap-2.5 w-full backdrop-blur-[20px] relative bg-[#1F1F1F] px-40 py-6 max-md:px-10 max-md:py-6 max-sm:p-5">
      <nav className="flex justify-between items-center w-full relative">
        <div className="text-white text-2xl font-bold leading-6 tracking-[0.24px] relative max-sm:text-xl">
          Personal Trainer
        </div>
        
        <div className="flex items-center gap-[30px] relative max-md:hidden">
          <a href="#inicio" className="text-white text-xl font-normal leading-6 tracking-[0.2px] opacity-50 relative cursor-pointer hover:opacity-100 transition-opacity">
            Início
          </a>
          <a href="#sobre" className="text-white text-xl font-normal leading-6 tracking-[0.2px] opacity-50 relative cursor-pointer hover:opacity-100 transition-opacity">
            Sobre
          </a>
          <a href="#servicos" className="text-white text-xl font-normal leading-6 tracking-[0.2px] opacity-50 relative cursor-pointer hover:opacity-100 transition-opacity">
            Serviços
          </a>
          <a href="#depoimentos" className="text-white text-xl font-normal leading-6 tracking-[0.2px] opacity-50 relative cursor-pointer hover:opacity-100 transition-opacity">
            Depoimentos
          </a>
          <a href="#faq" className="text-white text-xl font-normal leading-6 tracking-[0.2px] opacity-50 relative cursor-pointer hover:opacity-100 transition-opacity">
            F&Q
          </a>
          <button className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors">
            <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
              Comece Agora
            </span>
          </button>
        </div>
        
        <button 
          className="hidden text-white text-2xl cursor-pointer max-md:block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#1F1F1F] p-4 rounded-lg mt-4">
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#sobre" className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#servicos" className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#depoimentos" className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a href="#faq" className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity" onClick={() => setIsMenuOpen(false)}>F&Q</a>
            <button className="bg-[#6C4BA3] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#5a3d8a] transition-colors">
              Comece Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
