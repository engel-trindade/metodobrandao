import { Instagram, Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="flex h-auto flex-col items-start gap-8 w-full relative px-32 py-16 max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-[48px]">
      <div className="flex flex-col items-start gap-4 w-full relative px-0 py-10 border-t-[#909090] border-t border-solid">
        <div className="w-[260px] h-6 relative">
          <h3 className="text-white text-xl font-bold leading-6 tracking-[0.2px] absolute w-[260px] h-6 left-0 top-0">
            YURI TRINDADE BRANDÃO
          </h3>
        </div>
        
        <div className="flex items-start gap-[100px] w-full relative max-md:flex-col max-md:gap-10">
          <div className="flex flex-col items-start gap-4 relative">
            <p className="w-[377px] text-[#909090] text-lg font-normal leading-[23.4px] tracking-[0.18px] relative max-sm:w-full max-sm:text-base">
              

Acredito que o treino é mais do que uma sequência de exercícios, é uma ferramenta para curar dores, resgatar confiança e transformar vidas.
            </p>
          </div>
          
          <div className="flex items-start gap-8 flex-[1_0_0] relative max-md:flex-col max-md:gap-10">
            <nav className="flex flex-col items-start gap-4 flex-[1_0_0] relative">
              <h4 className="text-white text-xl font-bold leading-6 tracking-[0.2px] relative max-sm:text-lg">
                Menu
              </h4>
              <a href="#inicio" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#depoimentos" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                Depoimentos
              </a>
            </nav>
            
            <div className="flex flex-col items-start gap-4 flex-[1_0_0] relative">
              <h4 className="text-white text-xl font-bold leading-6 tracking-[0.2px] relative max-sm:text-lg">
                Contato
              </h4>
              
              <div className="flex items-center gap-4 relative">
                <Instagram size={24} className="text-[#909090]" />
                <a href="https://instagram.com/ytbrandao_pt" target="_blank" rel="noopener noreferrer" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                  @ytbrandao_pt
                </a>
              </div>
              
              <div className="flex items-center gap-4 relative">
                <Phone size={20} className="text-[#909090]" />
                <a href="tel:+5527999585475" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                  +55 (27) 99958-5475
                </a>
              </div>
              
              <div className="flex items-center gap-4 relative">
                <Mail size={24} className="text-[#909090]" />
                <a href="mailto:brandaoyuri@hotmail.com" className="text-[#909090] text-lg font-normal leading-6 tracking-[0.18px] relative max-sm:text-base hover:text-white transition-colors">
                  brandaoyuri@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center w-full relative">
        <p className="text-[#909090] text-base font-normal leading-5 tracking-[0.16px] relative max-sm:text-sm">
          © {new Date().getFullYear()} Yuri Trindade Brandão. Todos os direitos reservados. Desenvolvido por @wedatta
        </p>
      </div>
    </footer>;
};
export default Footer;