interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
}

const ServiceCard = ({
  title,
  subtitle,
  description,
  reverse = false,
  imageSrc
}: ServiceCardProps) => {
  return (
    <div className={`flex items-center gap-16 w-full max-w-[1440px] relative px-32 py-0 max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0 ${reverse ? 'max-md:flex-col-reverse' : 'max-md:flex-col'}`}>
      {reverse ? (
        <>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`${title} - Programa de treinamento`}
              className="w-full max-w-[436px] h-[436px] shrink-0 relative max-lg:max-w-[360px] max-lg:h-[360px] max-md:w-full max-md:max-w-[500px] max-md:h-auto rounded-[10px] object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full max-w-[436px] h-[436px] shrink-0 relative max-lg:max-w-[360px] max-lg:h-[360px] max-md:w-full max-md:max-w-[500px] max-md:h-auto bg-gradient-to-br from-[#6C4BA3]/40 to-[#333]/60 rounded-[10px] flex items-center justify-center">
              <span className="text-white text-lg opacity-50">Imagem do serviço</span>
            </div>
          )}
          <div className="flex w-full max-w-[396px] flex-col items-start gap-[24px] shrink-0 relative max-md:w-full">
            <div className="flex flex-col items-start gap-1.5 w-full relative">
            <h3 className="text-white text-[32px] font-normal leading-[38px] tracking-[-0.32px] uppercase relative max-sm:text-2xl font-anton">
              {title}
            </h3>
              <div className="w-full text-[#9BA3AF] text-xl font-normal leading-[30px] relative max-sm:text-lg">
                <div className="font-bold">{subtitle}</div>
                {description}
              </div>
            </div>
            <a 
              href="https://wa.me/5527999585475?text=Ol%C3%A1%20Yuri!%20%F0%9F%92%AA%20Vim%20pelo%20site%20e%20estou%20pronto(a)%20para%20transformar%20meus%20desafios%20em%20triunfos!%20Quero%20come%C3%A7ar%20a%20treinar%20corretamente%20o%20quanto%20antes!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors"
            >
              <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
                Comece Agora
              </span>
            </a>
          </div>
        </>
      ) : (
        <>
        <div className="flex w-full max-w-[419px] flex-col items-start gap-[24px] relative max-md:w-full">
          <div className="flex w-full flex-col items-start gap-1.5 relative">
            <h3 className="text-white text-[32px] font-normal leading-[38px] tracking-[-0.32px] uppercase relative max-sm:text-2xl font-anton">
              {title}
            </h3>
              <div className="w-full text-[#9BA3AF] text-xl font-normal leading-[30px] relative max-sm:text-lg">
                <div className="font-bold">{subtitle}</div>
                {description}
              </div>
            </div>
            <a 
              href="https://wa.me/5527999585475?text=Ol%C3%A1%20Yuri!%20%F0%9F%92%AA%20Vim%20pelo%20site%20e%20estou%20pronto(a)%20para%20transformar%20meus%20desafios%20em%20triunfos!%20Quero%20come%C3%A7ar%20a%20treinar%20corretamente%20o%20quanto%20antes!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors"
            >
              <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
                Comece Agora
              </span>
            </a>
          </div>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`${title} - Programa de treinamento`}
              className="w-full max-w-[413px] h-[418px] relative max-lg:max-w-[360px] max-lg:h-[360px] max-md:w-full max-md:max-w-[500px] max-md:h-auto rounded-[10px] object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full max-w-[413px] h-[418px] relative max-lg:max-w-[360px] max-lg:h-[360px] max-md:w-full max-md:max-w-[500px] max-md:h-auto bg-gradient-to-br from-[#6C4BA3]/40 to-[#333]/60 rounded-[10px] flex items-center justify-center">
              <span className="text-white text-lg opacity-50">Imagem do serviço</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ServiceCard;
