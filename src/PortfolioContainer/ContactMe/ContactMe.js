import React from 'react';
import { Form, Button } from 'react-bootstrap';
const ContactMe = () => {
  return (

    <div className="row container">
      <h2 className="text-muted text-center ">Contact Me</h2>
      <div className="col-lg-7 col-sm-12 my-5">

        <div  >
          <img style={{ width: '100%' }} src="https://image.freepik.com/free-photo/communication-connection-speech-bubble-concept_53876-13807.jpg" alt="" />
        </div>

      </div>
      <div className="col-lg-5 col-sm-12 my-4 ">





        <Form action="https://formsubmit.co/naimur202163@gmail.com" method="POST" className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" required type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" required placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="Number" name="number" placeholder="phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>


  );
};

export default ContactMe;



{/* <div>
      <form action="https://formsubmit.co/naimur202163@gmail.com" method="POST">
        <input type="text" name="name" required />
         <input type="email" name="email" required />
        <button type="submit">Send</button>
       </form>
   </div> */}