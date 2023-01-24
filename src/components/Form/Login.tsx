import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setInputValue] = useState<string>('');
  const [password, setInputPassword] = useState<string>('');

  return (
    <div>
      <Container>
        <Row className='vh-100 d-flex justify-content-center align-items-center'>
          <Col md={8} lg={6} xs={12}>
            <Card className='shadow'>
              <Card.Body>
                <div className='mb-3 mt-md-4'>
                  <h2 className='fw-bold mb-2 text-uppercase '>
                    Login to Your Account
                  </h2>
                  <p className=' mb-5'>Please enter your login and password!</p>
                  <div className='mb-3'>
                    <Form>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-center'>Login</Form.Label>
                        <Form.Control
                          value={login}
                          type='text'
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder='Enter Login'
                        />
                      </Form.Group>

                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={password}
                          onChange={(e) => setInputPassword(e.target.value)}
                          type='password'
                          placeholder='Password'
                        />
                      </Form.Group>

                      <div className='d-grid'>
                        <Button variant='primary' type='submit'>
                          {/* onClick={(e) => insertFormInfo(e)}
                          disabled={!canBeSubmitted()} */}
                          {/* <Link
                            style={{
                              width: '100%',
                              color: 'white',
                              textDecoration: 'none',
                              padding: '0 150px 0 150px',
                            }}
                            to='/profile'
                          >
                          </Link> */}
                          Login
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
