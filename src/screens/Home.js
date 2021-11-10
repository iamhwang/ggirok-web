import { inLoggedInVar } from "../apollo";

export default function Home() {
  function handleClick() {
    inLoggedInVar(false);
  }

  return (
    <>
      <h1>home</h1>
      <button
        onClick={handleClick}
      >
        logout
      </button>
    </>
  );
}