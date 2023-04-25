import React from "react";
import { Container, Row, Col,Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import MessageForm from "../../components/MessageForm";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "../../services/appApi";
import { LinkContainer } from "react-router-bootstrap";
import chatimage from '../../images/chatimage.jpg';
import '../CSS/Chat.css';


function Chat() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/");
    }
    return (
    
        <>
        {/* instruction section */}
        <h1 className='chat-title'>Chat Room</h1>
      {/* <!-- Boxes Section --> */}
    <section className="boxes">
      <div className="box">
        {/* <i className="fa fa-pie-chart fa-4x" aria-hidden="true"></i> */}
        <i class="fa fa-life-ring fa-4x" aria-hidden="true"></i>
        <h3>General Room</h3>
        <p>
        In the General Room you are supposed to discuss anything that deals with mental health. All ideas are accepted unless
        it is outside the mental health.
        </p>
      </div>

      <div className="box">
        <i className="fa fa-globe fa-4x" aria-hidden="true"></i>
        <h3>Family Room</h3>
        <p>
        Here we discuss all the family issues that are related to mental health that affects our family in general i.e couple, children, family fights
        </p>
      </div>

      <div className="box">
        {/* <i className="fa fa-cog fa-4x" aria-hidden="true"></i> */}
        <i className="fa fa-users fa-4x" aria-hidden="true"></i>
        <h3>Therapist</h3>
        <p>
        If you want to see a therapist or a friend wants to, please tell us here. Or if you need any assitance from our best therapist, please feel free to share with us here
        </p>
      </div>
      <div className="box">
        {/* <i className="fa fa-cog fa-4x" aria-hidden="true"></i> */}
        <i class="fa fa-share fa-4x" aria-hidden="true"></i>
        <h3>Announcements</h3>
        <p>
        Since we don't have admin section for publishing all news will be published here. Please  dont misuse the page.
        </p>
      </div>

    </section>

                {/* inner navbar */}
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={chatimage} style={{ width: 50, height: 50 }} alt=''/>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* {!user && (
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )} */}
                        {/* <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer> */}
                        {user && (
                            <NavDropdown
                                title={
                                    <>
                                        <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} alt=''/>
                                        {user.name}
                                    </>
                                }
                                id="basic-nav-dropdown"
                            >
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}

                                <NavDropdown.Item>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

                                {/* chat section */}
        <Container>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <MessageForm />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Chat;
