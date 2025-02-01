import "./VisionMission.css";
import eyeIcon from "./eye.png";
import target from "./target.png";

export default function VisionMission() {
    return (
        <div className="mission-vision-section">
            <div className="mission-vision">
                <div className="vision">
                    <h3 className="vm-heading">OUR VISION</h3>
                    <div className="vm-subheading">Who we are. What we do</div>
                    <p>To be the leading partner in transforming the real estate landscape through smart strategies, expert guidance, and sustainable growth solutions.</p>
                    <img src={eyeIcon} alt="Vision Icon" className="vision-icon" />
                </div>

                <div className="mission">
                    <img src={target} alt="Mision Icon" className="mission-icon" />
                    <h3 className="vm-heading">OUR MISSION</h3>
                    <div className="vm-subheading">What we aspire to be</div>
                    <p>To provide innovative, data-driven real estate solutions that empower developers to achieve exceptional project success and maximize returns.</p>
                </div>
            </div>
        </div>
    )
}