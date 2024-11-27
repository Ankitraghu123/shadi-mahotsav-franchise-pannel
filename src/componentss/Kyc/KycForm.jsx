import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import achieve from '../../mykyc.jpg';
const KycForm = () => {
  const [formData, setFormData] = useState({
    aadhar_no: "",
    pan_no: "",
    bank_name: "",
    cust_acc_type: "",
    acc_holder: "",
    acc_no: "",
    ifsc_code: "",
    cust_dob: "",
    gender: "male",
    email: "",
    mobile: "",
    cust_addr1: "",
    cust_city: "",
    cust_state: "",
    cust_pincode: "",
    aadharFront: null,
    aadharBack: null,
    pan_file: null,
    passbook: null,
  });

  const [imagePreviews, setImagePreviews] = useState({
    aadharFront: null,
    aadharBack: null,
    pan_file: null,
    passbook: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        [name]: URL.createObjectURL(files[0]),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend)
    console.log(formData);
  };

  return (
    <>

      <Container className="">
      <div id="margin-top" className="achivementimage mb_30 position-relative">
        <div className="row">
          <div className="col-12">
            <img src={achieve} className="img-fluid w-100" alt="Achievement" />
          </div>
        </div>
      </div>
      <Row className="justify-content-center">
        <Col >
          <Card>
            <Card.Header className="bg-primary text-white text-center">
              <h3>KYC Form</h3>
            </Card.Header>
            <Card.Body>
              <Form id="kyc-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="aadhar_no">
                  <Form.Label>Aadhar Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="aadhar_no"
                    value={formData.aadhar_no}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="aadharFront">
                  <Form.Label>Aadhar Card (Front)</Form.Label>
                  <Form.Control
                    type="file"
                    name="aadharFront"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                  {imagePreviews.aadharFront && (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.aadharFront}
                        alt="Aadhar Front"
                        className="img-fluid"
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="aadharBack">
                  <Form.Label>Aadhar Card (Back)</Form.Label>
                  <Form.Control
                    type="file"
                    name="aadharBack"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                  {imagePreviews.aadharBack && (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.aadharBack}
                        alt="Aadhar Back"
                        className="img-fluid"
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="pan_no">
                  <Form.Label>Pan Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="pan_no"
                    value={formData.pan_no}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="panCard">
                  <Form.Label>PAN Card</Form.Label>
                  <Form.Control
                    type="file"
                    name="pan_file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {imagePreviews.pan_file && (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.pan_file}
                        alt="Pan Card"
                        className="img-fluid"
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="bank_name">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    as="select"
                    name="bank_name"
                    value={formData.bank_name}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-Select-</option>
                    <option value="State Bank of India">State Bank of India</option>
                    <option value="Punjab National Bank">Punjab National Bank</option>
                    <option value="Bank of Baroda">Bank of Baroda</option>
                    <option value="Canara Bank">Canara Bank</option>
                    <option value="HDFC Bank">HDFC Bank</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="cust_acc_type">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="cust_acc_type"
                    value={formData.cust_acc_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">---Choose---</option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                    <option value="Others">Others</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="acc_holder">
                  <Form.Label>Account Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="acc_holder"
                    value={formData.acc_holder}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="acc_no">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="acc_no"
                    value={formData.acc_no}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="ifsc_code">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="ifsc_code"
                    value={formData.ifsc_code}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="passbookPhoto">
                  <Form.Label>Account Passbook Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="passbook"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                  {imagePreviews.passbook && (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.passbook}
                        alt="Passbook Photo"
                        className="img-fluid"
                      />
                    </div>
                  )}
                </Form.Group>

                <hr />

                <Form.Group controlId="cust_dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="cust_dob"
                    value={formData.cust_dob}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="mobile">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="cust_addr1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="cust_addr1"
                    placeholder="Street"
                    value={formData.cust_addr1}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="cust_city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="cust_city"
                    value={formData.cust_city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="cust_state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="cust_state"
                    value={formData.cust_state}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="cust_pincode">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    name="cust_pincode"
                    value={formData.cust_pincode}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" className="mt-3 btn px-5" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>

  );
};

export default KycForm;
