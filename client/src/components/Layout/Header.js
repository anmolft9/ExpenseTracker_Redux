import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Navbar className="header-nav">
        <Container>
          <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
          {isLoggedIn ? (
            <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link>login</Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};
