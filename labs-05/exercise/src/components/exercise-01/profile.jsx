import React from 'react';
import avatar from '../../assets/css/exercise-01/img/giang.jpg';
import { Container, Col, Row } from 'react-bootstrap';
import '../../assets/css/exercise-01/profile.css';

export default function Profile() {
    return (
        <Container className="shadows mt-2 mb-5 mt-5">
            <Row className="d-flex justify-content-between align-items-center">
                <Col xs={4}>
                    <img src={avatar} className='avatar' />
                </Col>
                <Col xs={8}>
                    <h3 className="fw-bold profile mb-4">PROFILE</h3>
                    <p className="fw-bold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                        corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                        laboriosam recusandae illum temporibus.
                    </p>
                    <p className="fw-bold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                        corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                        laboriosam recusandae illum temporibus.
                    </p>
                </Col>
            </Row>
            <Row className="py-4 bg-warning text-dark d-flex align-items-center">
                <Col xs={5} className="p-0">
                    <h4 className="bg-dark  text-white p-2 px-5 m-0">Professional Title</h4>
                </Col>
                <Col xs={7}>
                    <h1 className="name m-0">Từ Hữu Giang</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4} className="d-flex flex-column justify-content-around align-items-center">
                    <Col className="w-100 d-flex flex-column align-items-center text-white bg-secondary">
                        <Col className="d-flex flex-column justify-content-center align-items-start">
                            <h2 className="fw-bold mx-2 mb-4">Contact</h2>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill mx-2" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Nguyễn Văn Quá, Quận 12
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone-fill mx-2" viewBox="0 0 16 16">
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                </svg>
                                0392790428
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill mx-2" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                tugiang340@gmail.com
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook mx-2" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                Từ Hữu Giang
                            </p>
                        </Col>
                    </Col>
                    <Col className="w-100 d-flex flex-column align-items-center text-white bg-black">
                        <Col className="d-flex flex-column justify-content-center align-items-start">
                            <h2 className="fw-bold mx-2 mb-4">Expertise</h2>
                            <Row className="w-100">
                                <Col xs={6}>
                                    <p>MS Word</p>
                                    <p>Text Here</p>
                                    <p>Text Here</p>
                                    <p>Text Here</p>
                                    <p>Text Here</p>
                                </Col>
                                <Col xs={6}>
                                    <div className="w-100 p-2 bg-warning mt-1"></div>
                                    <div className="w-50 p-2 bg-warning mt-4"></div>
                                    <div className="w-100 p-2 bg-warning mt-4"></div>
                                    <div className="w-75 p-2 bg-warning mt-4"></div>
                                    <div className="w-90 p-2 bg-warning mt-4"></div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col className="w-100 d-flex flex-column align-items-center text-white bg-secondary py-4">
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <h2 className="fw-bold mx-2 mb-4">Education</h2>
                            <Row className="fw-bold">
                                <Col xs={6}>
                                    <p>
                                        University Name
                                    </p>
                                    <p>
                                        Course Detail
                                    </p>
                                    <p>
                                        Modules
                                    </p>
                                </Col>
                                <Col xs={6} className="text-end">
                                    <p>
                                        2014-2017
                                    </p>
                                </Col>
                            </Row>
                            <Row className="fw-bold">
                                <Col xs={6}>
                                    <p>
                                        University Name
                                    </p>
                                    <p>
                                        Course Detail
                                    </p>
                                    <p>
                                        Modules
                                    </p>
                                </Col>
                                <Col xs={6} className="text-end">
                                    <p>
                                        2012-2014
                                    </p>
                                </Col>
                            </Row>
                            <Row className="fw-bold">
                                <Col xs={6}>
                                    <p>
                                        University Name
                                    </p>
                                    <p>
                                        Course Detail
                                    </p>
                                    <p>
                                        Modules
                                    </p>
                                </Col>
                                <Col xs={6} className="text-end">
                                    <p>
                                        2008-2012
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col xs={8} className="desc">
                    <Col className="p-5">
                        <h3 className="fw-bold profile mb-4">PROFILE</h3>
                        <Row className="mb-4">
                            <Col xs={3}>
                                <h5 className="fw-bold">JOB TITLE</h5>
                            </Col>
                            <Col xs={5}>
                                <h5 className="fw-bold">Company Name</h5>
                            </Col>
                            <Col xs={3}>
                                <h5 className="fw-bold">2019 - Present</h5>
                            </Col>
                            <p className="fw-bold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                                corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                                laboriosam recusandae illum temporibus.
                            </p>
                            <ul className="fw-bold mx-3">
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            </ul>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={3}>
                                <h5 className="fw-bold">JOB TITLE</h5>
                            </Col>
                            <Col xs={5}>
                                <h5 className="fw-bold">Company Name</h5>
                            </Col>
                            <Col xs={3}>
                                <h5 className="fw-bold">2016 - 2019</h5>
                            </Col>
                            <p className="fw-bold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                                corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                                laboriosam recusandae illum temporibus.
                            </p>
                            <ul className="fw-bold mx-3">
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            </ul>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={3}>
                                <h5 className="fw-bold">JOB TITLE</h5>
                            </Col>
                            <Col xs={5}>
                                <h5 className="fw-bold">Company Name</h5>
                            </Col>
                            <Col xs={3}>
                                <h5 className="fw-bold">2015 - 2016</h5>
                            </Col>
                            <p className="fw-bold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                                corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                                laboriosam recusandae illum temporibus.
                            </p>
                            <ul className="fw-bold mx-3">
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            </ul>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={3}>
                                <h5 className="fw-bold">JOB TITLE</h5>
                            </Col>
                            <Col xs={5}>
                                <h5 className="fw-bold">Company Name</h5>
                            </Col>
                            <Col xs={3}>
                                <h5 className="fw-bold">2014 - 2015</h5>
                            </Col>
                            <p className="fw-bold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                                corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                                laboriosam recusandae illum temporibus.
                            </p>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={3}>
                                <h5 className="fw-bold">JOB TITLE</h5>
                            </Col>
                            <Col xs={5}>
                                <h5 className="fw-bold">Company Name</h5>
                            </Col>
                            <Col xs={3}>
                                <h5 className="fw-bold">2013 - 2014</h5>
                            </Col>
                            <p className="fw-bold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, hic optio dicta minima ad
                                corporis ducimus obcaecati in? Corrupti quis molestiae laboriosam? Accusamus, deleniti eum inventore
                                laboriosam recusandae illum temporibus.
                            </p>
                        </Row>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col>
                                <h3 className="fw-bold profile">REFERENCES</h3>
                            </Col>
                            <Col>
                                <h5 className="fw-bold text-black m-0">Available on request</h5>
                            </Col>


                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}