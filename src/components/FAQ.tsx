import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqItems: FAQItem[] = [
    {
      question: 'Consigo treinar dentro de casa com a consultoria?',
      answer: 'Sim. A consultoria oferece treinos totalmente adaptáveis ao seu ambiente. Através do aplicativo de vídeo, oriento todas as possibilidades de treino de forma dinâmica, segura e eficiente. Utilizando mini bands, halteres ou até materiais simples que você já tem em casa. O foco é evoluir com o que você tem hoje, sem complicações ou necessidade de equipamentos sofisticados.'
    },
    {
      question: 'Como funciona o treinamento funcional e performance?',
      answer: 'O treinamento funcional e performance tem como objetivo melhorar sua postura, força, mobilidade e rendimento, tanto no dia a dia quanto na prática de esportes. Os treinos são planejados a partir da biomecânica do movimento, com exercícios que corrigem padrões, fortalecem o corpo e promovem evolução constante, sempre respeitando sua individualidade e ritmo.'
    },
    {
      question: 'O que é o CoreMom?',
      answer: 'O CoreMom é uma metodologia exclusiva para mulheres que já são mães ou estão se preparando para a maternidade. Por meio de uma avaliação detalhada e acompanhamento em vídeo, desenvolvo uma rotina de treino focada na reabilitação da diástase, fortalecimento do core e retorno seguro às atividades físicas. O método é indicado para pré-gestação, gestação e pós-parto, promovendo vitalidade, confiança e um reencontro saudável com o próprio corpo.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="flex w-full max-w-[1440px] flex-col items-center gap-[52px] relative px-40 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0" id="faq">
      <header className="flex flex-col justify-center items-center w-full relative">
        <h2 className="w-[889px] text-white text-center text-6xl font-normal leading-[72px] tracking-[-0.6px] uppercase relative max-md:w-full max-md:text-[40px] max-sm:text-[28px]" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Perguntas Frequentes
        </h2>
        <p className="w-[710px] text-[#909090] text-center text-[32px] font-normal leading-[48px] relative max-md:w-full max-md:text-2xl max-sm:text-xl">
          Estou aqui para ajudar!
        </p>
      </header>
      
      <div className="flex flex-col items-start w-full relative">
        {faqItems.map((item, index) => (
          <article 
            key={index}
            className="flex justify-between items-start w-full shadow-[0_20px_40px_0_rgba(0,0,0,0.10)] backdrop-blur-[10px] relative p-[30px] border-b-[0.5px] border-b-white border-solid max-sm:p-5"
          >
            <div className="flex items-center gap-4 flex-[1_0_0] relative">
              <div className="flex flex-col justify-center items-start gap-5 flex-[1_0_0] relative">
                <h3 className="text-white text-2xl font-normal leading-5 tracking-[0.24px] relative max-sm:text-lg">
                  {item.question}
                </h3>
                {openItems.includes(index) && (
                  <p className="w-full text-[#909090] text-xl font-medium leading-[30px] relative max-sm:text-base">
                    {item.answer}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => toggleItem(index)}
              className="flex items-center justify-center w-6 h-6 text-[#6C4BA3] hover:text-[#5a3d8a] transition-colors"
              aria-expanded={openItems.includes(index)}
              aria-label={`Toggle ${item.question}`}
            >
              <Plus 
                size={24} 
                className={`transform transition-transform ${openItems.includes(index) ? 'rotate-45' : ''}`}
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
