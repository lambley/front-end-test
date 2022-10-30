import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <div className="text-center p-5">
      <h2>Contact Us</h2>
      <Form className="form-center">
        <Form.Group className="d-flex">
          <Form.Control
            className="m-2"
            type="string"
            placeholder="First Name"
          ></Form.Control>
          <Form.Control
            className="m-2"
            type="string"
            placeholder="Last Name"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="d-flex">
          <Form.Control
            className="m-2"
            type="string"
            placeholder="Contact Number"
          ></Form.Control>
          <Form.Control
            className="m-2"
            type="email"
            placeholder="Email Address"
          ></Form.Control>
        </Form.Group>
        <Form.Group className='d-flex mb-2'>
          <Form.Control
            className="m-2"
            placeholder="Leave your comment here..."
            as="textarea"
            rows={3}
          ></Form.Control>
        </Form.Group>

        <Button variant="dark" className="button-rounded button-padding">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
