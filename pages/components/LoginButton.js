import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

const LoginButton = () => {
  return (
    <>
      <Button className="login-button-orange button-rounded">
        <FontAwesomeIcon icon={faSearchengin} />
        Login/Register
      </Button>
    </>
  );
};

export default LoginButton;
