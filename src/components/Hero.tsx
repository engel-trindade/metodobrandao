import { useState } from 'react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="h-[820px] w-full relative max-md:h-auto max-md:min-h-0 max-md:flex max-md:flex-col max-md:justify-start max-md:-mb-8" id="inicio">
      <div className="w-full max-w-[1440px] mx-auto h-full relative">
      <div className="w-full h-[880px] shrink-0 absolute left-0 top-0 max-md:h-screen max-md:min-h-0 max-md:max-h-screen pointer-events-none">
        <div className="w-full h-[820px] shrink-0 absolute left-0 top-0">
          <img 
            src="/images/bg_academia.png" 
            alt="Background de academia" 
            className="w-full h-[694px] shrink-0 opacity-40 absolute left-0 top-0 z-0 object-cover mix-blend-luminosity animate-bg-zoom"
          />
          <div className="w-full h-[694px] shrink-0 opacity-10 absolute left-0 top-0 z-10 bg-gradient-to-br from-[#6C4BA3]/20 to-transparent" />
        </div>
        
        <div 
          className="text-[180px] font-extrabold leading-[200px] tracking-[-1.8px] uppercase opacity-[0.05] bg-clip-text absolute left-32 top-[650px] max-lg:left-10 max-md:hidden text-transparent bg-gradient-to-r from-white to-gray-500 font-oxanium z-0"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
          }}
        >
          BRANDÃO
        </div>
        
      </div>
      
      {/* Imagem Desktop - posição absoluta à direita */}
      <img 
        src="/images/foto_yuri_hero.png" 
        alt="Yuri Brandão - Personal Trainer" 
        className={`w-[590px] h-[738px] shrink-0 absolute right-0 top-[56px] max-lg:w-[480px] max-lg:h-[600px] max-md:hidden rounded-lg object-cover pointer-events-auto z-10 transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Texto - primeira coisa visível em mobile */}
      <div className="flex w-full max-w-[394px] flex-col items-start gap-16 absolute h-auto left-32 top-32 max-lg:left-10 max-lg:max-w-[360px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:max-w-none max-md:px-10 max-md:pt-20 max-md:pb-10 max-md:items-center max-md:text-center max-md:z-20 max-sm:px-5 max-sm:gap-[30px] pointer-events-auto">
        <div className="flex w-full flex-col items-start gap-4 relative max-md:items-center">
          <h1 className="w-full text-white text-[64px] font-normal leading-[96px] tracking-[3.84px] uppercase relative max-md:text-center max-md:text-5xl max-md:leading-tight max-sm:text-[32px] max-sm:tracking-[2px] max-sm:leading-[1.2] font-anton">
            Transforme Desafios<br className="hidden max-md:inline" /> em Triunfos!
          </h1>
          <p className="w-full text-[#909090] text-xl font-normal leading-[30px] relative max-md:text-center max-md:max-w-[500px] max-sm:text-base">
            Reabilite seu corpo, recupere sua confiança e conquiste
            resultados reais com treinos personalizados que unem
            biomecânica, consciência corporal e performance.
          </p>
        </div>
        
          <a
            href="#servicos"
            className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors max-md:w-full"
          >
            <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
              Conheça os programas de treinamento
            </span>
          </a>
      </div>
      
      {/* Imagem Mobile - aparece depois do texto no fluxo */}
      <div className="hidden max-md:block w-full max-w-[500px] mx-auto relative z-20 px-10 max-sm:px-5 pointer-events-auto">
        <div className="relative">
          <img 
            src="/images/foto_yuri_hero.png" 
            alt="Yuri Brandão - Personal Trainer" 
            className={`w-full h-auto rounded-lg object-cover transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Degradê na parte inferior da foto */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent rounded-b-lg" />
        </div>
      </div>
      
      {/* Texto BRANDÃO Mobile - aparece abaixo da foto */}
      <div 
        className="hidden max-md:block text-[80px] font-extrabold tracking-[8px] uppercase opacity-[0.08] text-center w-full relative -mt-16 z-30 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-oxanium max-sm:text-[56px] max-sm:tracking-[4px] px-10 max-sm:px-5"
      >
        BRANDÃO
      </div>
      </div>
    </section>
  );
};

export default Hero;
