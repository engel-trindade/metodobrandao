const Hero = () => {
  return (
    <section className="h-[740px] w-full relative max-md:h-auto max-md:min-h-screen max-md:flex max-md:flex-col max-md:justify-start" id="inicio">
      <div className="w-full h-[806px] shrink-0 absolute left-0 top-0 max-md:h-screen max-md:min-h-0 max-md:max-h-screen pointer-events-none">
        <div className="w-full h-[740px] shrink-0 absolute left-0 top-0">
          <img 
            src="/images/bg_academia.png" 
            alt="Background de academia" 
            className="w-full h-[694px] shrink-0 opacity-40 absolute left-0 top-0 z-0 object-cover mix-blend-luminosity animate-bg-zoom"
          />
          <div className="w-full h-[694px] shrink-0 opacity-10 absolute left-0 top-0 z-10 bg-gradient-to-br from-[#6C4BA3]/20 to-transparent" />
        </div>
        
        <div className="w-full h-[378px] shrink-0 absolute left-0 top-[614px] max-md:top-[300px] max-sm:top-[200px]">
          <div className="text-[176px] font-extrabold leading-[211px] tracking-[-1.76px] uppercase opacity-30 bg-clip-text absolute w-full h-[211px] left-0 top-[91px] max-md:text-[100px] max-md:top-[50%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-sm:text-[80px] text-transparent bg-gradient-to-r from-white to-gray-500 font-oxanium">
            BRANDÃO
          </div>
          <div className="bg-gradient-to-t from-[#1A1A1A] to-transparent w-full h-[325px] shrink-0 absolute left-0 top-0" />
        </div>
        
      </div>
      
      {/* Imagem Desktop - posição absoluta à direita */}
      <img 
        src="/images/foto_yuri_hero.png" 
        alt="Yuri Brandão - Personal Trainer" 
        className="w-[590px] h-[738px] shrink-0 absolute right-0 top-[56px] max-lg:w-[480px] max-lg:h-[600px] max-md:hidden rounded-lg object-cover pointer-events-auto"
        loading="lazy"
      />
      
      {/* Texto - primeira coisa visível em mobile */}
      <div className="flex w-full max-w-[394px] flex-col items-start gap-16 absolute h-auto left-32 top-32 max-lg:left-10 max-lg:max-w-[360px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:px-10 max-md:pt-20 max-md:pb-10 max-md:items-center max-md:text-center max-md:z-20 max-sm:px-5 max-sm:gap-[30px] pointer-events-auto">
        <div className="flex w-full flex-col items-start gap-4 relative max-md:items-center">
          <h1 className="w-full text-white text-[64px] font-normal leading-[96px] tracking-[3.84px] uppercase relative max-md:text-center max-md:text-5xl max-md:leading-tight max-sm:text-[32px] max-sm:tracking-[2px] max-sm:leading-[1.2] font-anton">
            Transforme Desafios em Triunfos!
          </h1>
          <p className="w-full text-[#909090] text-xl font-normal leading-[30px] relative max-md:text-center max-md:max-w-[500px] max-sm:text-base">
            Reabilite seu corpo, recupere sua confiança e conquiste
            resultados reais com treinos personalizados que unem
            biomecânica, consciência corporal e performance.
          </p>
        </div>
        
        <button className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors max-md:w-full max-md:max-w-[400px]">
          <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
            Conheça os programas de treinamento
          </span>
        </button>
      </div>
      
      {/* Imagem Mobile - aparece depois do texto no fluxo */}
      <img 
        src="/images/foto_yuri_hero.png" 
        alt="Yuri Brandão - Personal Trainer" 
        className="hidden max-md:block w-full max-w-[500px] h-auto mx-auto relative z-20 rounded-lg object-cover mb-10 px-10 max-sm:px-5 pointer-events-auto"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
