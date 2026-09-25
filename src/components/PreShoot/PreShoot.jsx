import "./PreShoot.css";

function PreShoot() {
  const photos = [
    "/images/preshoot/photo1.jpg",
    "/images/preshoot/photo2.jpg",
    "/images/preshoot/photo3.jpg",
    "/images/preshoot/photo4.jpg",
    "/images/preshoot/photo5.jpg",
    "/images/preshoot/photo6.jpg",
    
  ];

  return (
    <section className="preshoot-section">

      <div className="preshoot-heading">
        <p className="preshoot-small">OUR JOURNEY</p>

        <h2>Captured Moments</h2>

        <p className="preshoot-description">
          A collection of beautiful moments from our journey together.
        </p>
      </div>

      <div className="preshoot-gallery">
        {photos.map((photo, index) => (
          <div className="preshoot-photo" key={index}>
            <img
              src={photo}
              alt={`Pre-shoot photo ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default PreShoot;