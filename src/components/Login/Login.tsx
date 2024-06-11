import { useState } from "react";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import Panel from "../Panel/Panel";
import { useSearchParams } from "react-router-dom";
import "./Login.css";

function Login() {
  const [signUpMode, setSignUpMode] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  function handelLogin() {
    setSignUpMode(true);
    setSearchParams({ login: "false" });
  }
  function handelSignUp() {
    setSignUpMode(false);
    setSearchParams({ login: "true" });
  }

  return (
    <div className="w-screen h-screen overflow-hidden login-page">
      <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:px-40 sm:py-0 py-20 items-center ">
        <SignInPage />
        <SignUpPage />
      </div>
      <div
        className={`flex justify-around w-full absolute top-32 container ${
          signUpMode ? "sign-up-mode" : ""
        }`}
      >
        <Panel
          classNamePanel={
            signUpMode ? "transform-sign-up" : "reset-transform"
          }
          position="left"
          positionText="-right-96 top-72"
          title="New here ?"
          description="Do you want go to the sign-up page?"
          buttonText="Sign up"
          onClick={handelLogin}
        />

        <Panel
          classNamePanel={signUpMode ? "reset-transform" : "transform-sign-in"}
          position="right"
          positionText="left-[450px] top-72"
          title="One of us ?"
          description="Do you want go to the login page?"
          buttonText="Sign in"
          onClick={handelSignUp}
        />
      </div>
    </div>
  );
}

export default Login;
