const CTA = () => {
  return (
    <section className="h-[602px] w-full relative">
      <div className="w-[545px] h-[545px] shrink-0 rounded-[545px] opacity-20 bg-[#6C4BA3] blur-[200px] absolute right-0 top-[27px]" />
      
      <div className="flex w-[1024px] justify-center items-center gap-[84px] absolute left-1/2 -translate-x-1/2 h-[602px] px-40 py-0 top-0 max-md:flex-col max-md:gap-10 max-md:w-full max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
        <div className="w-[425.5px] h-[602px] shrink-0 relative max-md:w-full max-md:max-w-[400px]">
          <img 
            src="/images/foto_casal_treino.png" 
            alt="Casal treinando juntos"
            className="w-full h-full opacity-70 rounded-[10px] object-cover"
            loading="lazy"
          />
          <div className="w-full h-[162px] absolute left-0 top-[440px] bottom-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
        </div>
        
        <div className="flex w-[495px] flex-col items-start gap-[70px] shrink-0 relative max-md:w-full">
          <div className="flex flex-col justify-center items-start gap-4 w-full relative">
            <h2 className="w-full text-white text-[40px] font-normal leading-[48px] tracking-[-0.4px] uppercase relative max-sm:text-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
              VAMOS TREINAR JUNTOS?
            </h2>
            <p className="w-[456px] text-[#909090] text-2xl font-normal leading-[31.2px] relative max-md:w-full max-sm:text-lg">
              Comece agora sua jornada de movimento, cura e performance.
            </p>
          </div>
          
          <button className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors">
            <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
              Agende sua avaliação
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
