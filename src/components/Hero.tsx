const Hero = () => {
  return (
    <section className="h-[924px] w-full relative max-sm:h-[700px]" id="inicio">
      <div className="w-full h-[1007px] shrink-0 absolute left-0 top-0 max-sm:h-[700px]">
        <div className="w-full h-[924px] shrink-0 absolute left-0 top-0">
          <img 
            src="/images/bg_academia.png" 
            alt="Background de academia" 
            className="w-full h-[867px] shrink-0 opacity-20 absolute left-0 top-0 z-0 object-cover mix-blend-luminosity"
          />
          <div className="w-full h-[867px] shrink-0 opacity-10 absolute left-0 top-0 z-10 bg-gradient-to-br from-[#6C4BA3]/20 to-transparent" />
        </div>
        
        <div className="w-full h-[378px] shrink-0 absolute left-0 top-[614px] max-sm:top-[400px]">
          <div className="text-[220px] font-extrabold leading-[264px] tracking-[-2.2px] uppercase opacity-30 bg-clip-text absolute w-full h-[264px] left-0 top-[114px] max-sm:text-[80px] max-sm:left-5 text-transparent bg-gradient-to-r from-white to-gray-500" style={{ fontFamily: 'Oxanium, sans-serif' }}>
            BRANDÃO
          </div>
          <div className="bg-gradient-to-t from-[#1A1A1A] to-transparent w-full h-[325px] shrink-0 absolute left-0 top-0" />
        </div>
        
        <img 
          src="/images/foto_yuri_hero.png" 
          alt="Yuri Brandão - Personal Trainer" 
          className="w-[738px] h-[922px] shrink-0 absolute right-0 top-[70px] max-sm:w-[300px] max-sm:h-[400px] max-sm:right-5 rounded-lg object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="flex w-[492px] flex-col items-start gap-20 absolute h-[598px] left-40 top-40 max-md:w-[calc(100%_-_80px)] max-md:max-w-[600px] max-md:left-10 max-sm:w-[calc(100%_-_40px)] max-sm:gap-[30px] max-sm:left-5 max-sm:top-[100px]">
        <div className="flex w-[492px] flex-col items-start gap-4 relative max-md:w-full">
          <h1 className="w-full text-white text-[80px] font-normal leading-[120px] tracking-[4.8px] uppercase relative max-md:text-6xl max-sm:text-[32px] max-sm:tracking-[2px] max-sm:leading-[1.2]" style={{ fontFamily: 'Anton, sans-serif' }}>
            Transforme Desafios em Triunfos!
          </h1>
          <p className="w-full text-[#909090] text-xl font-normal leading-[30px] relative max-sm:text-base">
            Reabilite seu corpo, recupere sua confiança e conquiste
            resultados reais com treinos personalizados que unem
            biomecânica, consciência corporal e performance.
          </p>
        </div>
        
        <button className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors">
          <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
            Conheça os programas de treinamento
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
