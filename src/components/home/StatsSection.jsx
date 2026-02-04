import { useEffect, useRef, useState } from 'react';

const StatItem = ({ number, label, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const isPersianNumber = /^[۰-۹]+/.test(number);
    const hasPlus = number.includes('+');
    const baseNumber = hasPlus ? number.slice(0, -1) : number;

    if (isPersianNumber) {
      const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      
      let engNumber = baseNumber;
      persianDigits.forEach((digit, index) => {
        engNumber = engNumber.replace(new RegExp(digit, 'g'), englishDigits[index]);
      });

      const target = parseInt(engNumber);
      let startTime = null;
      const duration = 1200;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * target);
        
        const persianCount = currentCount.toString().split('').map(d => 
          persianDigits[parseInt(d)]
        ).join('');

        setCount(persianCount + (hasPlus ? '+' : ''));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setCount(number + suffix);
    }
  }, [isVisible, number, suffix, delay]);

  return (
    <div 
      ref={ref}
      className="relative text-center"
    >
      <div className="relative p-3 md:p-4">
        {/* phon */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
          <span className="inline-block">
            {count}
          </span>
          {suffix && !number.includes('+') && (
            <span className="text-blue-200 text-lg md:text-xl">
              {suffix}
            </span>
          )}
        </div>
        
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-2 rounded-full opacity-60"></div>
        
        {/* contant */}
        <div className="text-blue-100 text-xs md:text-sm">
          {label}
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: '۵۰۰', label: 'پروژه تکمیل شده', suffix: '+', delay: 0 },
    { number: '۲۰۰', label: 'مشتری راضی', suffix: '+', delay: 100 },
    { number: '۵۰', label: 'متخصص فعال', suffix: '+', delay: 200 },
    { number: '۹۸', label: 'رضایت مشتری', suffix: '%', delay: 300 },
  ];

  return (
    <section className="relative py-8 md:py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            نتچی در یک نگاه
          </h2>
          
          <p className="text-blue-100/90 text-xs md:text-sm max-w-lg mx-auto px-2">
            تجربه‌ای متفاوت از خدمات کافی نت با کیفیت و سرعت بی‌نظیر
          </p>
        </div>
        
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;