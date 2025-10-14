import React, { useRef } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { slides } from '../data/slides';
import { Button } from './ui/Button';


const DetailsAndCare: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75; // 75% of container width
    const currentScroll = container.scrollLeft;

    container.scrollTo({
      left:
        currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Section Title */}
        <div className="flex justify-between mb-8 lg:mb-12">
          <h2 className="text-[#0E1422] font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Details & care
          </h2>
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              className="bg-[#f0f0f0] rounded-lg hover:bg-[#e0e0e0]"
              onClick={() => handleScroll('left')}
            >
              <ChevronLeftIcon className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              size="icon"
              className="bg-[#f0f0f0] rounded-lg hover:bg-[#e0e0e0]"
              onClick={() => handleScroll('right')}
            >
              <ChevronRightIcon className="h-5 w-5" />
              <span className="sr-only">Primark</span>
            </Button>
          </div>
        </div>
        {/* Section Cards */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full lg:w-[75%]"
              >
                <div
                  className={`flex h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] rounded-[20px] overflow-hidden ${slide.backgroundColor} shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
                >
                  {/* Left side with image */}
                  <div className="flex-[3] overflow-hidden">
                    {slide.isImage ? (
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover object-bottom"
                      />
                    ) : (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={slide.video} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  
                  {/* Right section with text */}
                  <div className="flex-[2] flex items-center justify-center">
                    <div className="space-y-4">
                      {slide.title && (
                        <h3 className="text-[clamp(20px,2.2vw,30px)] font-medium text-[#292929E0] max-w-[280px] leading-[1.1]">
                          {slide.title}
                        </h3>
                      )}
                      {slide.subtitle && (
                        <p className="text-[clamp(14px,1.2vw,22px)] font-regular text-[#2A2A2AE0] leading-[1.3] max-w-[380px]">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsAndCare;
