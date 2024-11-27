import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import achieve from '../../nominee.jpg';

const NomineeForm = () => {
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeRelationship, setNomineeRelationship] = useState('');
  const [nomineeDob, setNomineeDob] = useState('');

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file)); // Create image preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Logging form data to the console
    console.log({
      nomineeName,
      nomineeRelationship,
      nomineeDob,
      aadharFront,
      aadharBack,
    });

    // Optionally alert the user that the form is submitted
    alert('Form submitted successfully!');
  };

  return (
    <>

    <Container className="mt-5">
    <div id="margin-top" className="achivementimage mb_30 position-relative">
        <div className="row">
          <div className="col-12">
            <img src={achieve} className="img-fluid w-100" alt="Achievement" />
          </div>
        </div>
      </div>
      <Card>
        <Card.Header className="bg-primary text-white text-center">
          <h2>Nominee Form</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="aadharFront">
                  <Form.Label>Aadhar Card (Front):</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, setAadharFront)}
                    required
                  />
                  {aadharFront && (
                    <div className="imagePreview mt-2">
                      <img src={aadharFront} alt="Aadhar Front" className="img-fluid" />
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="aadharBack">
                  <Form.Label>Aadhar Card (Back):</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, setAadharBack)}
                    required
                  />
                  {aadharBack && (
                    <div className="imagePreview mt-2">
                      <img src={aadharBack} alt="Aadhar Back" className="img-fluid" />
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="nomineeName" className="mb-3">
              <Form.Label>Nominee Name:</Form.Label>
              <Form.Control
                type="text"
                value={nomineeName}
                onChange={(e) => setNomineeName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="nomineeRelationship" className="mb-3">
              <Form.Label>Nominee Relationship:</Form.Label>
              <Form.Control
                type="text"
                value={nomineeRelationship}
                onChange={(e) => setNomineeRelationship(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="nomineeDob" className="mb-3">
              <Form.Label>Nominee Date of Birth:</Form.Label>
              <Form.Control
                type="date"
                value={nomineeDob}
                onChange={(e) => setNomineeDob(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>

  );
};

export default NomineeForm;
