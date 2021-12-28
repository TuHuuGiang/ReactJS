import { Container, Col, Row } from 'react-bootstrap';
import '../../assets/css/exercise-02/landing-page.css';

export default function Page() {
    return (
        <Container className="shadown-page mb-5 m-0">
            <Row className="d-flex">
                <Col xs={5}>
                    <img className="logoTravel" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR-M4_wSVv81fo8SzmN0vGBc0Y-EEERz5o5qKNYy3Jb5sy_-c967SctZkLMEIzuJB4w&usqp=CAU" />
                </Col>
                <Col xs={3} className="contact d-flex justify-content-center align-items-center">
                    <span className="mx-2 fw-bold">Contact with us:</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter mx-2" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                </Col>
                <Col xs={3} className="phone fw-bold d-flex justify-content-center align-items-center text-white fs-4 bg-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill mx-3" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    0392790428
                </Col>
            </Row>
            <Row className="banner">
                <img className="banner-img" src="https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                <div className="position">
                    <p className="text-white fs-3 m-0">See what the BUZZ is all about !</p>
                    <p className="text-white fw-bold fs-1">International Travel Agency</p>
                    <button type="button" class="btn btn-warning text-uppercase fw-bold text-white">get the best offer</button>
                </div>
            </Row>
            <Row className="d-flex justify-content-center align-items-center p-4">
                <Col xs={3} className="option text-white fw-bold fs-5 d-flex justify-content-center align-items-center bg-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat-dots-fill mx-1" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    CONSULTING
                </Col>
                <Col xs={3} className="option text-white fw-bold fs-5 d-flex justify-content-center align-items-center mx-5 bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cursor-fill mx-1" viewBox="0 0 16 16">
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                    </svg>
                    TRAVEL GUIDE
                </Col>
                <Col xs={3} className="option text-white fw-bold fs-5 d-flex justify-content-center align-items-center bg-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-building mx-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    HOTEL INFO
                </Col>
            </Row>
            <Row className="text-center">
                <h1 className="title">What We Offer</h1>
                <p className="description text-uppercase fw-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </Row>
            <Row className="d-flex justify-content-center align-items-center p-4">
                <Col xs={3} className="location fs-5">
                    <img className="location-img" src="https://images.unsplash.com/photo-1416862291207-4ca732144d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" />
                    <h4 className="title-location fw-bold my-2 text-uppercase">Lorem ipsum dolor</h4>
                    <p className="description-location fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </Col>
                <Col xs={3} className="location fs-5 mx-5">
                    <img className="location-img" src="https://images.unsplash.com/photo-1416862291207-4ca732144d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" />
                    <h4 className="title-location fw-bold my-2 text-uppercase">Sed up perspiciatis</h4>
                    <p className="description-location fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </Col>
                <Col xs={3} className="location fs-5">
                    <img className="location-img" src="https://images.unsplash.com/photo-1416862291207-4ca732144d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" />
                    <h4 className="title-location fw-bold my-2 text-uppercase">Tempor incididunt</h4>
                    <p className="description-location fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </Col>
            </Row>
            <Row className="bg-dark p-4">
                <p className="copyright text-white m-0 text-center">Copyright 2021. All Rights Reserved | Designed: Từ Hữu Giang</p>
            </Row>
        </Container>
    )
}