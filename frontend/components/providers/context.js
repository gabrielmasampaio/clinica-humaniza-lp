import { createContext, useContext, useState, useEffect } from 'react';

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [isVertical, setIsVertical] = useState(() => {
    return typeof window !== 'undefined'
        ? window.innerHeight > window.innerWidth
        : false;
  });

  const [screenHeight, setScreenHeight] = useState(() => {
    return typeof window !== 'undefined'
        ? window.screen.height
        : false;
  });

  const [screenWidth, setScreenWidth] = useState(() => {
    return typeof window !== 'undefined'
        ? window.screen.width
        : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerHeight > window.innerWidth);
      setScreenHeight(window.screen.height);
      setScreenWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <ResponsiveContext.Provider value={{ isVertical, screenHeight, screenWidth }}>
        {children}
      </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};