import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

const LoginButton = () => {
  return (
    <>
      <Button variant="primary">
        <FontAwesomeIcon icon={faSearchengin} />
        Login/Register
      </Button>
    </>
  );
};

export default LoginButton;
