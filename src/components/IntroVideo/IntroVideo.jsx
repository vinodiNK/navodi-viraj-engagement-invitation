import { useEffect, useRef, useState } from "react";
import "./IntroVideo.css";

function IntroVideo({ onComplete }) {
  const videoRef = useRef(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    onComplete();
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    onComplete();
  };

  return (
    <div className="intro-container">
      <video
        ref={videoRef}
        className="intro-video"
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

      <div className="intro-overlay">
        <div className="intro-content">
          <p className="intro-small-text">
            With Love & Joy
          </p>

          <h1>
            Navodi & Shyara
          </h1>

          {showSkip && (
            <button
              className="skip-button"
              onClick={handleSkip}
            >
              Open Invitation
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default IntroVideo;