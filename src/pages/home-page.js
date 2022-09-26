import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container } from "reactstrap";
import { useStore } from "../store";
import { logout } from "../store/auth/auth-actions";
import { counterDown, counterUp } from "../store/counter/counter-actions";

const HomePage = () => {
  const { counterState, dispatchCounter, authState, dispatchAuth } = useStore();
  const { counter } = counterState;
  const { user, isUserLogin } = authState;

  const handleCounterDown = () => {
    dispatchCounter(counterDown());
  };

  const handleCounterUp = () => {
    dispatchCounter(counterUp());
  };

  const handleLogout = () => {
    dispatchAuth(logout());
  };

  return (
    <Container className="mt-5">
      <h2>
        {isUserLogin ? (
          <>
          Merhaba {user.firstName} {user.lastName}
          <Button className="btn btn-link" onClick={handleLogout}>
            Logout
          </Button>
          </>
          
        ) : (
          <Link to="/login" className="btn btn-link">
            Login
          </Link>
        )}
      </h2>

      <ButtonGroup>
        <Button color="danger" onClick={handleCounterDown}>
          -
        </Button>
        <Button color="secondary" disabled>
          {counter}
        </Button>
        <Button color="success" onClick={handleCounterUp}>
          +
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default HomePage;
