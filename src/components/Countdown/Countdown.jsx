import { useEffect, useState } from "react";
import "./Countdown.css";

const EVENT_DATE = new Date("2026-11-11T10:30:00");

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = EVENT_DATE.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-content">

        {/* Couple Names */}
        <p className="invitation-text">
          Together with their families
        </p>

        <h1 className="couple-names">
          Navodi Ambagahaduwa & Shyara Dissanayake
        </h1>

        {/* Parents */}
        <div className="parents-section">

          <div className="parent-group">
            <p className="parent-label">Daughter of</p>
            <p className="parent-names">
              Mr. & Mrs. Ambagahaduwa
            </p>
          </div>

          <div className="parent-divider">♥</div>

          <div className="parent-group">
            <p className="parent-label">Son of</p>
            <p className="parent-names">
              Mr. & Mrs. Dissanayake
            </p>
          </div>

        </div>

        {/* Date */}
        <p className="countdown-small">
          SAVE THE DATE
        </p>

        <h2>Our Special Day</h2>

        <div className="date">
          <span>11</span>
          <span className="date-separator">·</span>
          <span>November</span>
          <span className="date-separator">·</span>
          <span>2026</span>
        </div>

        {/* Countdown */}
        <div className="countdown">

          <div className="countdown-item">
            <strong>{timeLeft.days}</strong>
            <span>Days</span>
          </div>

          <div className="countdown-item">
            <strong>
              {String(timeLeft.hours).padStart(2, "0")}
            </strong>
            <span>Hours</span>
          </div>

          <div className="countdown-item">
            <strong>
              {String(timeLeft.minutes).padStart(2, "0")}
            </strong>
            <span>Minutes</span>
          </div>

          <div className="countdown-item">
            <strong>
              {String(timeLeft.seconds).padStart(2, "0")}
            </strong>
            <span>Seconds</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Countdown;