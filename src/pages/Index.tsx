import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center gap-20 overflow-y-auto min-h-screen bg-[#1A1A1A] pb-10">
      <div className="flex flex-col items-center w-full relative">
        <Header />
        <Hero />
      </div>
      
      <About />
      
      <section className="flex flex-col justify-center items-center gap-10 w-full relative px-0 py-2" id="servicos">
        <div className="flex flex-col justify-center items-center w-full relative px-40 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
        <h2 className="w-full max-w-[889px] text-white text-center text-[40px] font-normal leading-[48px] tracking-[-0.4px] uppercase relative max-md:text-[32px] max-sm:text-[28px] font-anton">
          Programas de Treinamento
        </h2>
          <p className="w-full max-w-[710px] text-[#909090] text-center text-2xl font-normal leading-[33.6px] relative max-md:text-xl max-sm:text-lg">
            Escolha seu programa
          </p>
        </div>
      </section>
      
      <ServiceCard
        title="BRANDÃO crew"
        subtitle="Consultoria de Treino"
        description="Eleve seu corpo ao máximo com base em avaliação individual, aplicando princípios da biomecânica individual para eliminar dores, melhorar postura e elevar performance. Para homens e mulheres que buscam treinos personalizados."
        imageSrc="/images/foto_brandao_crew.png"
      />
      
      <ServiceCard
        title="core mom"
        subtitle="Reabilitação de Diástase"
        description="Treinos de recuperação e autocuidado para mamães pós-parto. Foco no tratamento de diástase abdominal. Recupere sua energia e autoestima com treinos que respeitem o seu corpo."
        reverse={true}
        imageSrc="/images/foto_coremom.png"
      />
      
      <Testimonials />
      
      <FAQ />
      
      <CTA />
      
      <Footer />
    </div>
  );
};

export default Index;
