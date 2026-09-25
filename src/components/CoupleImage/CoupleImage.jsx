import "./CoupleImage.css";

function CoupleImage() {
  return (
    <section className="couple-image-section">
      <img
        src={`${import.meta.env.BASE_URL}/images/couple.jpg`}
        alt="Navodi and Shyara"
        className="couple-image"
      />

      <div className="couple-image-overlay">
        <div className="couple-image-text">
          

          <div className="image-line"></div>

          
        </div>
      </div>
    </section>
  );
}

export default CoupleImage;