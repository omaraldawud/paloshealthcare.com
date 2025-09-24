//Foter.jsx
//
//////////
//

//
import "../../assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Palos Healthcare Directory</h3>
            <p>Connecting patients with healthcare providers since 2023.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>info@paloshealthcare.com</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="d-flex gap-3">
              <a href="#facebook" className="text-dark fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#twitter" className="text-dark fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#linkedin" className="text-dark fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Palos Healthcare Directory. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
