import { useState } from "react";

import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import CoupleImage from "./components/CoupleImage/CoupleImage";
import IntroVideo from "./components/IntroVideo/IntroVideo";
import Location from "./components/Location/Location";
import PreShoot from "./components/PreShoot/PreShoot";
import ThankYouVideo from "./components/ThankYouVideo/ThankYouVideo";

function App() {

  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <div className="app">

      {!showInvitation && (
        <IntroVideo
          onComplete={() => setShowInvitation(true)}
        />
      )}

      {showInvitation && (

        <main className="invitation">

          <CoupleImage />

          <Countdown />

          <PreShoot />

          <Location />

          <ThankYouVideo />

        </main>

      )}

    </div>
  );
}

export default App;