import styled from "styled-components";
import { handleLogin } from "../services/videoaskService";
import VideoAsk from "../sveg/VideoAsk";
import "./Css/LoginStyle.css";

const LoginForm = () => {
  return (
    <>
      <TextPlace>
        <TextAnimation>
          <span>
            DREAM IT <span style={{ margin: "40px" }}>WISH IT</span>
          </span>
          <span>DO IT.</span>
        </TextAnimation>
      </TextPlace>
      <Container>
        <Left>
          <video src={require("../assets/video.mp4")} loop muted autoPlay />
        </Left>
        <Right>
          <form>
            <h1 id="slide-in">WELCOME BACK</h1>
            <button onClick={() => handleLogin()}>
              Connect Your account <VideoAsk />
            </button>
          </form>

          <div className="wrapper">
            <div className="static-text">
              Made with{" "}
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i> by
            </div>
            <ul className="dynamic-txts">
              <li>
                <span> Janken </span>
              </li>
              <li>
                <span> Nazih </span>
              </li>
              <li>
                <span> Joakim </span>
              </li>
              <li>
                <span> Embla </span>
              </li>
            </ul>
          </div>
        </Right>
      </Container>
    </>
  );
};

export default LoginForm;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "left right";
  height: 100vh;
`;

const Left = styled.div`
  grid-area: left;

  video {
    position: absolute;
    left: 5%;
    top: 13%;
    width: 40%;
    border-radius: 2rem;
    -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const Right = styled.div`
  grid-area: right;

  form {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #58eac1;
    width: 330px;
    border-radius: 10px;
    padding: 40px 30px;
    margin-top: 100px;
    box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
    right: 9%;
    top: 15%;

    @media (max-width: 670px) {
      left: 30%;
      width: 70%;
    }
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 30%;
      width: 40%;
    }
    @media (max-width: 1440px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 10%;
      right: 5%;
      width: 25%;
    }

    h1 {
      color: #58eac1;
      margin-bottom: 20px;
      font-size: 30px;
      position: relative;
      display: flex;
      justify-content: center;
      animation: animation 5s ease-out;

      #slide-in {
        text-align: center;
        color: #fff;
      }
      @keyframes animation {
        0% {
          opacity: 0;
          top: -30px;
        }

        100% {
          opacity: 1;
          top: 0;
        }
      }
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
      align-items: center;
      padding: 10px;
      font-weight: bold;
      background-color: #58eac1;
      box-shadow: -3px -3px 9px #aaa9a9a2,
        3px 3px 7px rgba(147, 149, 151, 0.671);
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
  }
`;

const TextPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextAnimation = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 30px;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #58eac1, #000);
  letter-spacing: 8px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: space;
  background-size: 80%;
  animation: shine 4s linear infinite;
  position: relative;
  margin-right: 60px;

  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
`;
