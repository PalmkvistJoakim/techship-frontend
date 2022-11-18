import styled from "styled-components";
import Rocket from "./Rocket";

interface Props {
  width: string;
  height: string;
}

function Techshiplogo({ width, height }: Props) {
  return (
    <svg
      fill="#58eac1"
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 440.1 243.7"
    >
      <style type="text/css"></style>
      <g>
        <StyledG>
          <Rocket />
        </StyledG>
        <g>
          <path
            className="st0"
            d="M37,114v40.5H26V114H12.4v-9.7h38.2v9.7H37z"
          />
          <path
            className="st0"
            d="M56.3,154.6v-50.3h34.2v9.7H67.2v10.2h19.9v9.7H67.2v10.9h23.3v9.7H56.3z"
          />
          <path
            className="st0"
            d="M118.5,155.4c-3.4,0-6.5-0.5-9.2-1.6c-2.7-1.1-5.1-2.7-7-4.8c-1.9-2.1-3.4-4.8-4.5-8
                    c-1.1-3.2-1.6-6.9-1.6-11.2c0-4.2,0.5-8,1.6-11.3c1.1-3.3,2.5-6,4.5-8.3c1.9-2.2,4.2-3.9,7-5.1c2.7-1.2,5.8-1.7,9.2-1.7
                    c4.7,0,8.5,0.9,11.5,2.8c3,1.9,5.4,4.9,7.3,9l-9.4,4.9c-0.7-2.1-1.7-3.8-3.1-5.1c-1.4-1.3-3.5-1.9-6.2-1.9c-3.2,0-5.8,1-7.7,3.1
                    c-1.9,2.1-2.9,5.1-2.9,9.1v8.1c0,4,1,7,2.9,9.1s4.5,3.1,7.7,3.1c2.7,0,4.8-0.7,6.4-2.2c1.6-1.5,2.8-3.2,3.6-5.3l8.9,5.2
                    c-1.9,3.8-4.3,6.8-7.4,8.9C127,154.4,123.1,155.4,118.5,155.4z"
          />
          <path
            className="st0"
            d="M173.3,134h-19.2v20.6h-10.9v-50.3h10.9v19.9h19.2v-19.9h10.9v50.3h-10.9V134z"
          />
          <path
            className="st0"
            d="M209.8,155.4c-4.4,0-8.2-0.8-11.2-2.3c-3.1-1.5-5.7-3.5-7.8-5.9l7.2-7.3c3.4,3.8,7.6,5.7,12.6,5.7
                    c2.7,0,4.7-0.5,6-1.6c1.3-1.1,1.9-2.5,1.9-4.4c0-1.4-0.4-2.5-1.2-3.5c-0.8-0.9-2.3-1.6-4.7-1.9l-5-0.6c-5.3-0.7-9.2-2.3-11.7-4.8
                    c-2.5-2.5-3.7-5.9-3.7-10.2c0-2.3,0.4-4.3,1.3-6.2c0.9-1.9,2.1-3.5,3.7-4.8c1.6-1.3,3.6-2.4,5.9-3.1c2.3-0.7,5-1.1,8-1.1
                    c3.8,0,7.1,0.6,10,1.8c2.9,1.2,5.4,3,7.4,5.3l-7.3,7.4c-1.2-1.4-2.7-2.5-4.4-3.4c-1.7-0.9-3.9-1.3-6.4-1.3c-2.4,0-4.3,0.4-5.5,1.3
                    c-1.2,0.9-1.8,2-1.8,3.6c0,1.7,0.5,2.9,1.4,3.7c0.9,0.8,2.5,1.3,4.6,1.6l5,0.8c5.2,0.8,9,2.4,11.5,4.8c2.5,2.4,3.7,5.8,3.7,10.1
                    c0,2.4-0.4,4.6-1.3,6.6c-0.9,2-2.1,3.7-3.8,5.2c-1.7,1.4-3.7,2.6-6.2,3.4C215.7,155,213,155.4,209.8,155.4z"
          />
          <path
            className="st0"
            d="M266.8,134h-19.2v20.6h-10.9v-50.3h10.9v19.9h19.2v-19.9h10.9v50.3h-10.9V134z"
          />
          <path
            className="st0"
            d="M285.1,154.6v-8.7h6.5V113h-6.5v-8.7H309v8.7h-6.5v32.8h6.5v8.7H285.1z"
          />
          <path
            className="st0"
            d="M316.3,154.6v-50.3h23.8c2.4,0,4.5,0.4,6.3,1.2s3.5,1.9,4.8,3.3c1.3,1.4,2.3,3.1,3.1,5.1
                    c0.7,2,1.1,4.2,1.1,6.5c0,2.4-0.4,4.6-1.1,6.6c-0.7,2-1.7,3.6-3.1,5c-1.3,1.4-2.9,2.5-4.8,3.3s-4,1.2-6.3,1.2h-12.8v18.1H316.3z
                     M327.3,126.9h11.5c1.6,0,2.9-0.4,3.9-1.3c0.9-0.8,1.4-2.1,1.4-3.7v-3.2c0-1.6-0.5-2.9-1.4-3.7c-0.9-0.8-2.2-1.3-3.9-1.3h-11.5
                    V126.9z"
          />
        </g>
      </g>
    </svg>
  );
}

export default Techshiplogo;

const StyledG = styled.g`
  position: absolute;
  top: 0;
  right: 18%;
  animation-name: spaceboots;
  width: 600px;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spaceboots {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(0px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(2px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
