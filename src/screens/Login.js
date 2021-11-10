import styled from "styled-components";
import { inLoggedInVar, darkModeVar } from "../apollo";


const Title = styled.h1`
  color: ${(props) => (props.theme.fontColor)};
`;

export default function Login() {
  function handleClick() {
    inLoggedInVar(true);
  }

  return (
    <>
      <Title>Login</Title>
      <button
        onClick={handleClick}
      >
        login
      </button>
      <button onClick={() => darkModeVar(true)}>dark</button>
      <button onClick={() => darkModeVar(false)}>white</button>
    </>
  );
}