import { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: '"Moro fora do Brasil e minha rotina demanda muito tempo e nessa época havia tido meu segundo filho e não estava satisfeita com meu corpo . Nunca havia treinado e nunca gostei de treinar e fui bem sincera com Yuri , tenho q emagrecer 10 kg para fazer minha cirurgia, CONSEGUIMOS PERDE 15kg e corrigimos minha diastese abdominal de 3 cm. Obg pela cobrança e pela instrução "',
      authorName: 'Tainá Trindade',
      authorTitle: 'Mamãe que nunca treino',
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

  return (
    <section className="flex flex-col justify-center items-center w-full relative pl-40 pr-[5px] py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0" id="depoimentos">
      <div className="flex flex-col justify-center items-center gap-10 w-full relative px-0 py-2 mb-10">
        <div className="flex flex-col justify-center items-center w-full relative px-40 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
          <h2 className="w-[889px] text-white text-center text-[40px] font-normal leading-[48px] tracking-[-0.4px] uppercase relative max-md:w-full max-md:text-[32px] max-sm:text-[28px]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            DEPOIMENTOS DOS ALUNOS
          </h2>
        </div>
      </div>
      
      <div className="flex items-start gap-6 w-full relative overflow-x-auto max-md:flex-col max-md:items-center pb-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>
      
      <div className="flex items-center gap-2 relative mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-[11px] h-[11px] shrink-0 rounded-[50%] transition-colors ${
              currentSlide === index ? 'bg-[#6C4BA3]' : 'bg-[#909090]'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
