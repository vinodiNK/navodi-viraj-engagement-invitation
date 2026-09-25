import "./Location.css";

function Location() {

  const venue = "Sanola Hotel";

  const address =
    "Horagampitiya";

  const mapUrl =
    "https://maps.app.goo.gl/vpz3GiWrNh8MMyJSA?g_st=aw";

  return (
    <section className="location-section">
      <div className="location-content">

        <p className="location-small">
          JOIN US
        </p>

        <h2>The Celebration</h2>

        <div className="location-icon">
          ♡
        </div>

        <h3>{venue}</h3>

        <p className="address">
          {address}
        </p>

        <p className="event-time">
          11 November 2026 · 09:00 AM
        </p>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          VIEW ON MAP
        </a>

      </div>
    </section>
  );
}

export default Location;