import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Credentials() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="John Smith" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="###-###-####" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Work History</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Label>Skills</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="primary">Submit</Button>
    </div>
  );
}
