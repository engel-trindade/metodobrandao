const CTA = () => {
  return (
    <section className="h-[482px] w-full relative">
      <div className="w-[436px] h-[436px] shrink-0 rounded-[436px] opacity-20 bg-[#6C4BA3] blur-[160px] absolute right-0 top-[22px]" />
      
      <div className="flex w-full max-w-[819px] justify-center items-center gap-[67px] absolute left-1/2 -translate-x-1/2 h-[482px] px-32 py-0 top-0 max-lg:px-20 max-lg:gap-12 max-md:flex-col max-md:gap-10 max-md:w-full max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
        <div className="w-full max-w-[340px] h-[482px] shrink-0 relative max-md:w-full max-md:max-w-[400px] max-md:h-auto">
          <img 
            src="/images/foto_casal_treino.png" 
            alt="Casal treinando juntos"
            className="w-full h-full opacity-70 rounded-[10px] object-cover"
            loading="lazy"
          />
          <div className="w-full h-[162px] absolute left-0 top-[440px] bottom-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
        </div>
        
        <div className="flex w-full max-w-[396px] flex-col items-start gap-14 shrink-0 relative max-md:w-full">
          <div className="flex flex-col justify-center items-start gap-4 w-full relative">
            <h2 className="w-full text-white text-[32px] font-normal leading-[38px] tracking-[-0.32px] uppercase relative max-sm:text-2xl font-anton">
              VAMOS TREINAR JUNTOS?
            </h2>
            <p className="w-full text-[#909090] text-xl font-normal leading-[28px] relative max-sm:text-lg">
              Comece agora sua jornada de movimento, cura e performance.
            </p>
          </div>
          
          <a 
            href="https://wa.me/5527999585475?text=Ol%C3%A1%20Yuri!%20%F0%9F%92%AA%20Vim%20pelo%20site%20e%20estou%20pronto(a)%20para%20transformar%20meus%20desafios%20em%20triunfos!%20Quero%20come%C3%A7ar%20a%20treinar%20corretamente%20o%20quanto%20antes!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors"
          >
            <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
              Agende sua avaliação
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
