import "./TrustedBy.css";
import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaSpotify,
} from "react-icons/fa"
import { SiNetflix} from "react-icons/si"

function TrustedBy() {
  return (
    <section className="trusted reveal">

      <p>Trusted by leading companies worldwide</p>

      <div className="trusted-logos">
        <img src="/images/google.jpg" alt="Google" />
        <img src="/images/microsoft.png" alt="Microsoft" />
        <img src="/images/amazon.png" alt="Amazon" />
        <img src="/images/netflix.jpg" alt="Netflix" />
        <img src="/images/spotify.png" alt="Spotify" />
      </div>
      <div className="trusted-logos-names">
        <div>Google</div>
        <div>Microsoft</div>
        <div>Amazon</div>
        <div>Netflix</div>
        <div>Spotify</div>

      </div>
    </section>
  );
}

export default TrustedBy;