
import React, { useState, useEffect } from 'react';

const MathAnimation = () => {
  const equations = [
    "2 + 2 = 4",
    "x²+y²=z²",
    "d/dx(x²) = 2x",
    "∫x=x²/2+c",
    "9 / 3 = 3",
    "e^0 + 1 = 1",
    "√(a²+b²)=c"
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
        }, 150);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 75);
        return () => clearTimeout(timer);
      } else {
        setCurrentEquation((prev) => (prev + 1) % equations.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentEquation, equations]);

  return (
    <div className="font-bold font-mono flex items-center justify-center animate-pulse">
      {displayedText}
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
};

export default MathAnimation;
