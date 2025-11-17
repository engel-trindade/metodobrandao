const About = () => {
  return (
    <section className="flex w-full max-w-[1440px] items-center gap-20 relative px-40 py-0 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0" id="sobre">
      <img 
        src="/images/foto_yuri_sobre.png" 
        alt="Yuri Brandão - Personal Trainer especializado em Biomecânica"
        className="w-[456px] h-[811px] shrink-0 aspect-[456.00/810.67] relative rounded-[10px] max-md:w-full max-md:max-w-[400px] max-md:h-auto object-cover"
        loading="lazy"
      />
      
      <div className="flex flex-col items-start gap-10 relative">
        <div className="flex flex-col items-start gap-1.5 w-full relative">
          <h2 className="text-white text-[40px] font-normal leading-[48px] tracking-[-0.4px] uppercase relative max-sm:text-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Quem é YURI BRANDÃO?
          </h2>
          <p className="w-full text-[#909090] text-2xl font-normal leading-9 relative max-sm:text-lg">
            Personal Trainer com especialização em Biomecânica e
            Reabilitação Funcional. Ao longo da minha trajetória, desenvolvi
            o Método Brandão que une ciência do movimento e empatia,
            ajudando pessoas a superar limitações físicas e conquistar uma
            vida com mais equilíbrio e energia.
          </p>
        </div>
        
        <div className="flex items-start gap-4 relative max-md:flex-wrap max-md:justify-center">
          <div className="flex h-[127px] flex-col justify-center items-center gap-4 shadow-[0_20px_40px_0_rgba(0,0,0,0.10)] backdrop-blur-[10px] relative bg-[#1F1F1F] px-4 py-2.5 rounded-[10px] max-sm:min-w-[120px]">
            <div className="w-[145px] h-[52px] shrink-0 text-[#9875D2] text-center text-[50px] font-normal leading-[0] capitalize relative max-sm:w-[100px] max-sm:text-[40px]">
              100+
            </div>
            <div className="text-[#909090] text-center text-base font-normal leading-[20.8px] relative max-sm:text-sm">
              Clientes Satisfeitos
            </div>
          </div>
          
          <div className="flex h-[127px] flex-col justify-center items-center gap-4 shadow-[0_20px_40px_0_rgba(0,0,0,0.10)] backdrop-blur-[10px] relative bg-[#1F1F1F] px-4 py-2.5 rounded-[10px] max-sm:min-w-[120px]">
            <div className="w-[145px] h-[52px] shrink-0 text-[#9875D2] text-center text-[50px] font-normal leading-[0] capitalize relative max-sm:w-[100px] max-sm:text-[40px]">
              5
            </div>
            <div className="text-[#909090] text-center text-base font-normal leading-[20.8px] relative max-sm:text-sm">
              Anos de Experiência
            </div>
          </div>
          
          <div className="flex h-[127px] flex-col justify-center items-center gap-4 shadow-[0_20px_40px_0_rgba(0,0,0,0.10)] backdrop-blur-[10px] relative bg-[#1F1F1F] px-4 py-2.5 rounded-[10px] max-sm:min-w-[120px]">
            <div className="w-[145px] h-[52px] shrink-0 text-[#9875D2] text-center text-[50px] font-normal leading-[0] capitalize relative max-sm:w-[100px] max-sm:text-[40px]">
              15
            </div>
            <div className="text-[#909090] text-center text-base font-normal leading-[20.8px] relative max-sm:text-sm">
              Anos no Esporte
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
