import './ContactUs.css'
export default function ContactUs() {
    return (
        <div class="bottom-section">
            <div class="contact-container">
                <div class="contact-info">
                    <h2>Contact Us</h2>
                    <div class="info-item">
                        <h3>Address</h3>
                        <p>44/1 Hoysala Nagar, Ramamurthy Nagar, Bengaluru, Karnataka 560016</p>
                    </div>

                    <div class="info-item">
                        <h3>Email Us</h3>
                        <p>acrements@gmail.com</p>
                    </div>

                    <div class="info-item">
                        <h3>Call Us</h3>
                        <p>+91 </p>
                    </div>
                </div>
            </div>
            <div class="waves">
                <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z"></path>
                </svg>
                <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,50 C150,80 350,10 600,50 C850,90 1050,10 1200,50 L1200,100 L0,100 Z"></path>
                </svg>
                <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,50 C150,60 350,20 600,50 C850,80 1050,20 1200,50 L1200,100 L0,100 Z"></path>
                </svg>
            </div>
        </div>
    )
}