import { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      text: '"Moro fora do Brasil e minha rotina demanda muito tempo e nessa época havia tido meu segundo filho e não estava satisfeita com meu corpo . Nunca havia treinado e nunca gostei de treinar e fui bem sincera com Yuri , tenho q emagrecer 10 kg para fazer minha cirurgia, CONSEGUIMOS PERDER 15kg e corrigimos minha diastese abdominal de 3 cm. Obg pela cobrança e pela instrução "',
      authorName: 'Tainá Trindade',
      authorTitle: 'Mamãe que nunca treinou',
      imageSrc: '/images/foto_taina.png'
    },
    {
      text: '"Sou amigo do Yuri a mais de 10 anos e ele sempre me convidou a treinar mas nunca fui do meio, quando comecei e entendi o processo, comecei a consultoria com ele e assim se passaram de 4 anos de treino do 0 ao nível de preparação de atleta, onde tenho objetivo de competir no bodybuilding e continuamos."',
      authorName: 'Gabriel Randow',
      authorTitle: 'Sedentário ao atleta',
      imageSrc: '/images/foto_gabriel.png'
    },
    {
      text: '"Pós pandemia, dividi um agachamento livre com Yuri depois daquele momento, toda sexta era legday de 3h, ele me obrigava a treinar mobilidade para diminuir minhas dores e aumentar minha capacidade de fazer força durante os treinos, com isso confiei meus treinos a ele e assim lapidamos meu shape com detalhes do treino assim criamos detalhes no meu físico."',
      authorName: 'Pedro Lucas',
      authorTitle: 'Construção de detalhes no físico',
      imageSrc: '/images/foto_pedro.png'
    }
  ];

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`flex flex-col justify-center items-center w-full relative px-32 py-0 max-md:px-10 max-sm:px-5 transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
      id="depoimentos"
    >
      <div className="flex flex-col justify-center items-center gap-10 w-full relative px-0 py-2 mb-10">
        <div className="flex flex-col justify-center items-center w-full relative px-32 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
        <h2 className="w-[711px] text-white text-center text-[32px] font-normal leading-[38px] tracking-[-0.32px] uppercase relative max-md:w-full max-md:text-[32px] max-sm:text-[28px] font-anton">
          DEPOIMENTOS DOS ALUNOS
        </h2>
        </div>
      </div>
      
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-[960px]"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-full">
              <div 
                className={`transition-all duration-500 ${
                  isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <TestimonialCard
                  text={testimonial.text}
                  authorName={testimonial.authorName}
                  authorTitle={testimonial.authorTitle}
                  imageSrc={testimonial.imageSrc}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="flex items-center gap-2 relative mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-[11px] h-[11px] shrink-0 rounded-full transition-all duration-300 ${
              current === index 
                ? 'bg-[#6C4BA3] scale-125' 
                : 'bg-[#909090] hover:bg-[#6C4BA3]/50'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
