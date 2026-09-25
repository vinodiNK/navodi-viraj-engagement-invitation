import "./ThankYouVideo.css";

function ThankYouVideo() {
  return (
    <section className="thank-you-section">

      <video
        className="thank-you-video"
        src="/videos/thank-you.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="thank-you-overlay">
        <div className="thank-you-content">

          <p className="thank-you-small">
            WITH LOVE
          </p>

          <h2>
            Thank You
          </h2>

          <p className="thank-you-message">
            We can't wait to celebrate
            <br />
            this beautiful day with you.
          </p>

          <div className="thank-you-heart">
            ♡
          </div>

          <p className="thank-you-names">
            Vishmi & Janith
          </p>

        </div>
      </div>

    </section>
  );
}

export default ThankYouVideo;