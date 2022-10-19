import styled from "styled-components";

const LoginForm = () => {
  return (
    <Container>
      <video src={require("../assets/video.mp4")} loop muted autoPlay />
      <Form>
        <h1>LOG IN </h1>
        <label htmlFor="html"></label>
        <input type="text" placeholder="Username" />
        <label htmlFor="psw"></label>
        <input type="password" placeholder="Password" />

        <button type="submit">
          Logga in <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </Form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;

  video {
    position: absolute;
    height: 100vh;
    left: 0;
    width: 60%;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const Form = styled.form`
  position: absolute;
  border: 1px solid #58eac1;
  width: 20%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0c0c0c7a;
  border-radius: 10%;
  right: 12%;
  top: 25%;

  @media (max-width: 670px) {
    left: 30%;
    width: 70%;
  }
  @media (max-width: 1024px) {
    left: 30%;
    width: 40%;
  }
  @media (max-width: 1440px) {
    right: 10%;
    width: 25%;
  }

  h1 {
    align-items: center;
    text-align: center;
    color: #58eac1;
    margin-bottom: 40px;
  }

  input {
    width: 50%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
  }

  button {
    display: flex;
    width: 25%;
    padding: 10px;
    margin-top: 30px;
    font-weight: bold;
    border-radius: 20px;
    background-color: #58eac1;
    border: none;
    cursor: pointer;

    i {
      margin-left: 5px;
      margin-top: 2px;
      color: white;
    }

    @media (max-width: 900px) {
      padding: 10px;
      width: 100px;
    }

    @media (max-width: 1629px) {
      padding: 10px;
      width: 100px;
    }
  }
`;
