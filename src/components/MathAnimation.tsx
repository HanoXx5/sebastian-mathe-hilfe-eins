
import React, { useState, useEffect } from 'react';

const MathAnimation = () => {
  const equations = [
    "2 + 2 = 4",
    "x² + y² = z²",
    "d/dx(x²) = 2x",
    "∫ x dx = x²/2 + C",
    "lim(x→0) sin(x)/x = 1",
    "e^(iπ) + 1 = 0",
    "√(a² + b²) = c"
  ];

  const [currentEquation, setCurrentEquation] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const equation = equations[currentEquation];
    
    if (isTyping) {
      if (displayedText.length < equation.length) {
        const timer = setTimeout(() => {
          setDisplayedText(equation.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentEquation((prev) => (prev + 1) % equations.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentEquation, equations]);

  return (
    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 font-mono min-h-[2rem] md:min-h-[3rem] flex items-center justify-center">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default MathAnimation;
