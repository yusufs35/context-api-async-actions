import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import { useStore } from "../store";
import { loginSuccess } from "../store/auth/auth-actions";

const API_BASE_URL = "https://carrental-v2-backend.herokuapp.com";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatchAuth } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const payload = { email, password };

      const respAuth = await axios.post(`${API_BASE_URL}/login`, payload);

      const token = respAuth.data.token;

      const authHeader = { Authorization: `Bearer ${token}` };

      const respUser = await axios.get(`${API_BASE_URL}/user`, {
        headers: authHeader,
      });

      dispatchAuth(loginSuccess(respUser.data));

      navigate("/");

      
    } catch (err) {
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="info" type="submit">
          {loading && <Spinner />} Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
