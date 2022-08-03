import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogoutAction } from "../../pages/userState/userAction";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(userLogoutAction());
    navigate("/");
  };
  return (
    <>
      <Navbar className="header-nav">
        <Container>
          <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
          {user._id ? (
            <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link>login</Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};
