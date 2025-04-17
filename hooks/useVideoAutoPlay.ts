import { useState, useEffect, RefObject } from 'react';

interface UseVideoAutoPlayProps {
  videoRef: RefObject<HTMLVideoElement>;
}

interface UseVideoAutoPlayResult {
  videoLoaded: boolean;
  videoError: boolean;
  handleBackgroundClick: () => void;
}

export function useVideoAutoPlay({ videoRef }: UseVideoAutoPlayProps): UseVideoAutoPlayResult {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoAttempted, setVideoAttempted] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const attemptAutoplay = () => {
      if (!videoAttempted && videoElement.paused) {
        setVideoAttempted(true);
        
        // Ensure video is muted (required for autoplay in most browsers)
        videoElement.muted = true;
        
        // Set playsinline attribute (required for iOS)
        videoElement.setAttribute('playsinline', '');
        
        // Add a short delay before attempting to play to ensure the video has loaded
        setTimeout(() => {
          // Try to play and handle failures gracefully
          const playPromise = videoElement.play();
          
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.error('Video autoplay error:', error);
              // We'll try again on user interaction, so don't set error state yet
            });
          }
        }, 500);
      }
    };
    
    const handleCanPlay = () => {
      setVideoLoaded(true);
      attemptAutoplay();
    };
    
    const handleError = (error: any) => {
      console.error('Video loading error:', error);
      setVideoError(true);
    };
    
    // Add event listeners
    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('error', handleError);
    videoElement.addEventListener('loadedmetadata', attemptAutoplay);
    
    // Check if video is already loaded
    if (videoElement.readyState >= 3) {
      setVideoLoaded(true);
      attemptAutoplay();
    }
    
    // If video source is unavailable, set error after timeout
    if (!videoElement.currentSrc) {
      const timeout = setTimeout(() => {
        if (videoElement && !videoElement.currentSrc) {
          setVideoError(true);
        }
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
    
    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('error', handleError);
      videoElement.removeEventListener('loadedmetadata', attemptAutoplay);
    };
  }, [videoRef, videoAttempted]);
  
  // Handle user interaction play attempt
  const handleBackgroundClick = () => {
    const videoElement = videoRef.current;
    
    if (videoElement && videoElement.paused) {
      // Ensure it's muted for autoplay policy compliance
      videoElement.muted = true;
      
      videoElement.play().catch((error) => {
        console.error('Manual play error:', error);
        setVideoError(true);
      });
    }
  };
  
  return {
    videoLoaded,
    videoError,
    handleBackgroundClick
  };
} 