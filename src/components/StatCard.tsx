import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatCard = ({ value, suffix = '', label }: StatCardProps) => {
  const { count, suffix: animatedSuffix, ref } = useCountUp({ 
    end: value, 
    duration: 2000, 
    suffix 
  });

  return (
    <div className="flex h-[127px] flex-col justify-center items-center gap-4 shadow-[0_20px_40px_0_rgba(0,0,0,0.10)] backdrop-blur-[10px] relative bg-[#1F1F1F] px-4 py-2.5 rounded-[10px] max-sm:min-w-[120px]">
      <div 
        ref={ref}
        className="w-[145px] h-[52px] shrink-0 text-[#9875D2] text-center text-[50px] font-normal leading-[52px] flex items-center justify-center relative max-sm:w-[100px] max-sm:text-[40px] max-sm:leading-[40px]"
      >
        {count}{animatedSuffix}
      </div>
      <div className="text-[#909090] text-center text-base font-normal leading-[20.8px] relative max-sm:text-sm">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
