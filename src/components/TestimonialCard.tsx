interface TestimonialCardProps {
  text: string;
  authorName: string;
  authorTitle: string;
}

const TestimonialCard = ({
  text,
  authorName,
  authorTitle
}: TestimonialCardProps) => {
  return (
    <article className="flex items-center relative shrink-0 transition-transform duration-[0.3s] ease-[ease] max-md:flex-col max-md:max-w-full min-w-[1101px] max-md:min-w-full">
      <div className="flex w-[556px] h-[545px] flex-col justify-center items-start gap-8 relative bg-[#1F1F1F] px-[52px] py-10 rounded-[16px_0_0_16px] max-md:w-full max-md:rounded-[16px_16px_0_0] max-sm:px-[15px] max-sm:py-5">
        <blockquote className="w-full text-white text-2xl font-normal leading-9 relative max-sm:text-base">
          {text}
        </blockquote>
        <div className="flex flex-col items-start gap-1 relative">
          <div className="text-[#909090] text-2xl font-bold leading-6 tracking-[0.24px] relative max-sm:text-xl">
            {authorName}
          </div>
          <div className="text-[#909090] text-xl font-medium leading-6 tracking-[0.2px] relative max-sm:text-base">
            {authorTitle}
          </div>
        </div>
      </div>
      <div className="w-[545px] h-[545px] backdrop-blur-[20px] relative rounded-[0_16px_16px_0] max-md:w-full max-md:rounded-[0_0_16px_16px] bg-gradient-to-br from-[#6C4BA3]/30 to-[#333]/50 flex items-center justify-center">
        <span className="text-white text-lg opacity-50">Foto do cliente</span>
      </div>
    </article>
  );
};

export default TestimonialCard;
