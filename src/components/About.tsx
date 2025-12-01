import VideoPlayer from './VideoPlayer';
import StatCard from './StatCard';

const About = () => {
  return (
    <section className="flex w-full max-w-[1440px] items-center gap-16 relative px-32 py-0 max-lg:px-20 max-lg:gap-12 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0" id="sobre">
      <VideoPlayer 
        videoId="dPYjSAn9g28"
        className="w-[365px] h-[649px] shrink-0 aspect-[456.00/810.67] relative rounded-[10px] max-md:w-full max-md:max-w-[400px] max-md:h-auto object-cover"
      />
      
      <div className="flex flex-col items-start gap-10 relative">
        <div className="flex flex-col items-start gap-1.5 w-full relative">
          <h2 className="text-white text-[32px] font-normal leading-[38px] tracking-[-0.32px] uppercase relative max-sm:text-2xl font-anton">
            Quem é YURI BRANDÃO?
          </h2>
          <p className="w-full text-[#909090] text-xl font-normal leading-[30px] relative max-sm:text-lg">
            Personal Trainer com especialização em Biomecânica e
            Reabilitação Funcional. Ao longo da minha trajetória, desenvolvi
            o Método Brandão que une ciência do movimento e empatia,
            ajudando pessoas a superar limitações físicas e conquistar uma
            vida com mais equilíbrio e energia.
          </p>
        </div>
        
        <div className="flex items-start gap-4 relative max-lg:gap-3 max-md:flex-wrap max-md:justify-center">
          <StatCard value={100} suffix="+" label="Clientes Satisfeitos" delay={0} />
          <StatCard value={5} label="Anos de Experiência" delay={300} />
          <StatCard value={15} label="Anos no Esporte" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default About;
