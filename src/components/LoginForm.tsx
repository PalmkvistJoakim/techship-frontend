import styled from "styled-components";

const LoginForm = () => {
  return (
    <Container className="container">
      <Form>
        <label htmlFor="html"></label>
        <Input type="text" placeholder="Username" />
        <label htmlFor="psw"></label>
        <Input type="password" placeholder="Password" />

        <Button type="submit">Logga in</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  border: 1px solid white;
  width: 30%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  width: 50%;
  padding: 10px;
  margin-left: 130px;
`;

const Button = styled.button`
  display: flex;
  width: 20%;
  padding: 10px;
  margin-top: 30px;
  margin-left: 220px;
  border-radius: 20px;
`;
