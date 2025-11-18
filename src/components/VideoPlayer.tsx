import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  className?: string;
}

const VideoPlayer = ({ videoId, className }: VideoPlayerProps) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${isInView ? 1 : 0}&mute=1&controls=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0`}
        title="Vídeo sobre Yuri Brandão"
        className="w-full h-full rounded-[10px]"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default VideoPlayer;
