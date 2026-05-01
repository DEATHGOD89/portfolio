import React, { useEffect } from 'react';

interface LoadingScreenProps {
  darkMode: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ darkMode, onLoadingComplete }) => {
  useEffect(() => {
    // Fallback in case the video doesn't load or play automatically
    // The user can remove this if they want to strictly wait for the video to end
    const timeout = setTimeout(() => {
      // onLoadingComplete(); 
    }, 10000); // 10 second fallback

    return () => clearTimeout(timeout);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <video 
        autoPlay 
        muted 
        playsInline
        onEnded={() => onLoadingComplete()}
        onError={() => onLoadingComplete()}
        className="w-full h-full object-cover"
      >
        {/* Ensure your video is named 'loading.mp4' and placed inside the 'public' folder */}
        <source src="/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;