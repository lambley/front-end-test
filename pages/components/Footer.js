import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-black footer">
      <ul className="footer-list-headers">
        <div>
          <li>Movies</li>
          <div className="footer-list-item-faded">
            <li>Lorem Ipsum</li>
            <li>Faucibus scelerisque</li>
            <li>Mattis nunc</li>
            <li>Diam volutpat</li>
            <li>Mi quis</li>
            <li>Aliquet porttitor</li>
          </div>
        </div>
        <div>
          <li>Series</li>
          <div className="footer-list-item-faded">
            <li>Lorem Ipsum</li>
            <li>Faucibus scelerisque</li>
            <li>Mattis nunc</li>
            <li>Diam volutpat</li>
            <li>Mi quis</li>
            <li>Aliquet porttitor</li>
          </div>
        </div>
        <div>
          <li>DisneyLife</li>
          <div className="footer-list-item-faded">
            <li>Lorem Ipsum</li>
            <li>Faucibus scelerisque</li>
            <li>Mattis nunc</li>
            <li>Diam volutpat</li>
            <li>Mi quis</li>
            <li>Aliquet porttitor</li>
          </div>
        </div>
        <div>
          <li>Holidays</li>
          <div className="footer-list-item-faded">
            <li>Lorem Ipsum</li>
            <li>Faucibus scelerisque</li>
            <li>Mattis nunc</li>
            <li>Diam volutpat</li>
            <li>Mi quis</li>
            <li>Aliquet porttitor</li>
          </div>
        </div>
        <div>
          <li>Company</li>
          <div className="footer-list-item-faded">
            <li>0206 222 3364</li>
            <li>hello@disneylife.com</li>
            <li>press@disney.com</li>
            <div className="footer-socials">
              <FontAwesomeIcon icon={faInstagram} />&nbsp;
              <FontAwesomeIcon icon={faSpotify} />&nbsp;
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
