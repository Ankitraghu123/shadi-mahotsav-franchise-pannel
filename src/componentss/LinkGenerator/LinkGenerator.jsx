import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Alert } from 'react-bootstrap';

const LinkGenerator = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: ''  // Added to track selected package type
  });
  const [generatedPackageLink, setGeneratedPackageLink] = useState('');  // State to hold the generated package link

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone } = formData;
    if (!name || !/^[a-zA-Z\s]{3,}$/.test(name)) {
      alert('Invalid name');
      return false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Invalid email');
      return false;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      alert('Invalid phone number');
      return false;
    }
    return true;
  };

  const generatePackageLink = () => {
    const baseLink = "https://skillsikhar.com/package?type=";
    if (formData.type) {
      setGeneratedPackageLink(baseLink + formData.type);  // Generate link based on selected type
    } else {
      alert('Please select a package type');
    }
  };

  const copyToClipboard = (id) => {
    const copyText = document.getElementById(id);
    copyText.select();
    document.execCommand('copy');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      // Submit form logic here
    }
  };

  return (
    <div id="margin-top" className="">
      <div className="card pb-5 mb-5">
        <div className="card-header">
          <img src="https://skillsikhar.com/user/img/link_gen.jpg" className="img-fluid" alt="IDP Trainings" />
        </div>
        <div className="card-body">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <h4><strong>Link Generator</strong></h4>
              <hr />
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="referralCode">
                    <Form.Label>My Referral Code:</Form.Label>
                    <Form.Control
                      type="text"
                      value="Your Referral Code"
                      readOnly
                      id="referral_code"
                      className="form-control"
                    />
                  </Form.Group>
                  <Col xs="auto">
                    <Button onClick={() => copyToClipboard('referral_code')}>Copy Code</Button>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="leadCapture">
                    <Form.Label>Lead Generate Link</Form.Label>
                    <Form.Control
                      type="text"
                      value="https://skillsikhar.com/lead-capture?afCode=sample&ref_code=YourReferralCode"
                      readOnly
                      id="leadCapture"
                      className="form-control"
                    />
                  </Form.Group>
                  <Col xs="auto">
                    <Button onClick={() => copyToClipboard('leadCapture')}>Copy Link</Button>
                  </Col>
                  <Col xs="auto">
                    <Button onClick={() => setShowModal(true)}>Add Manual</Button>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="share_video_url">
                    <Form.Label>Link For Packages:</Form.Label>
                    <Form.Select
                      name="type"
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      value={formData.type}
                      required
                    >
                      <option value="">--select Type--</option>
                      <option value="video_url_1">Presentation video</option>
                      <option value="video_url_2">Dynamic Package</option>
                      <option value="video_url_3">Basic Package</option>
                    </Form.Select>
                  </Form.Group>
                  <Col xs="auto">
                    <Button onClick={generatePackageLink}>Generate Package Link</Button>
                  </Col>
                </Row>

                {generatedPackageLink && (
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="generatedPackageLink">
                      <Form.Label>Generated Package Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={generatedPackageLink}
                        readOnly
                        id="generatedPackageLink"
                        className="form-control"
                      />
                    </Form.Group>
                    <Col xs="auto">
                      <Button onClick={() => copyToClipboard('generatedPackageLink')}>Copy Package Link</Button>
                    </Col>
                  </Row>
                )}

                {/* Modal */}
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Lead Capture Form</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter Name"
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter Email"
                        />
                      </Form.Group>
                      <Form.Group controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter Phone Number"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">Save Changes</Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkGenerator;
