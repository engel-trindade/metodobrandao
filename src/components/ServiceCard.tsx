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
    <div className={`flex items-center gap-20 w-full max-w-[1440px] relative px-40 py-0 max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0 ${reverse ? 'max-md:flex-col-reverse' : 'max-md:flex-col'}`}>
      {reverse ? (
        <>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`${title} - Programa de treinamento`}
              className="w-full max-w-[545px] h-[545px] shrink-0 relative max-lg:max-w-[450px] max-lg:h-[450px] max-md:w-full max-md:max-w-[500px] max-md:h-auto rounded-[10px] object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full max-w-[545px] h-[545px] shrink-0 relative max-lg:max-w-[450px] max-lg:h-[450px] max-md:w-full max-md:max-w-[500px] max-md:h-auto bg-gradient-to-br from-[#6C4BA3]/40 to-[#333]/60 rounded-[10px] flex items-center justify-center">
              <span className="text-white text-lg opacity-50">Imagem do serviço</span>
            </div>
          )}
          <div className="flex w-full max-w-[495px] flex-col items-start gap-[30px] shrink-0 relative max-md:w-full">
            <div className="flex flex-col items-start gap-1.5 w-full relative">
              <h3 className="text-white text-[40px] font-normal leading-[48px] tracking-[-0.4px] uppercase relative max-sm:text-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {title}
              </h3>
              <div className="w-full text-[#9BA3AF] text-2xl font-normal leading-9 relative max-sm:text-lg">
                <div className="font-bold">{subtitle}</div>
                {description}
              </div>
            </div>
            <button className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors">
              <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
                Comece Agora
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
        <div className="flex w-full max-w-[524px] flex-col items-start gap-[30px] relative max-md:w-full">
          <div className="flex w-full flex-col items-start gap-1.5 relative">
              <h3 className="text-white text-[40px] font-normal leading-[48px] tracking-[-0.4px] uppercase relative max-sm:text-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {title}
              </h3>
              <div className="w-full text-[#9BA3AF] text-2xl font-normal leading-9 relative max-sm:text-lg">
                <div className="font-bold">{subtitle}</div>
                {description}
              </div>
            </div>
            <button className="flex justify-center items-center gap-2 relative cursor-pointer bg-[#6C4BA3] px-6 py-4 rounded-lg hover:bg-[#5a3d8a] transition-colors">
              <span className="text-white text-lg font-bold leading-5 tracking-[0.18px] relative max-sm:text-base">
                Comece Agora
              </span>
            </button>
          </div>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`${title} - Programa de treinamento`}
              className="w-full max-w-[516px] h-[523px] relative max-lg:max-w-[450px] max-lg:h-[450px] max-md:w-full max-md:max-w-[500px] max-md:h-auto rounded-[10px] object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full max-w-[516px] h-[523px] relative max-lg:max-w-[450px] max-lg:h-[450px] max-md:w-full max-md:max-w-[500px] max-md:h-auto bg-gradient-to-br from-[#6C4BA3]/40 to-[#333]/60 rounded-[10px] flex items-center justify-center">
              <span className="text-white text-lg opacity-50">Imagem do serviço</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ServiceCard;
