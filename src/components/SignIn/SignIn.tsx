import { Button, TextField } from "@mui/material";
import GOOGLE from "../../assets/svgs/google.svg";
import GITHUB from "../../assets/svgs/github.svg";
import LINKEDIN from "../../assets/svgs/linkedin.svg";
import TELEGRAM from "../../assets/svgs/telegram.svg";
import { postUser } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handelCreateUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const userObj = { id: Date.now(), username, email, password };
      const response = await postUser(userObj);
      if (response) {
        toast.success("Your username has been added");
        setError(false);
      } else {
        toast.error("This email is already registered");
        setError(true);
      }
      setUsername("");
      setEmail("");
      setPassword("");
      console.log(userObj);
    } catch (error) {
      toast.error("Error creating user");
      console.log(error);
    }
  };
  
  return (
    <div className="flex flex-col justify-center h-screen items-start gap-5 w-1/3">
      <div className="w-full flex justify-center">
        <h1 className="font-kalam font-bold text-3xl">Sign up</h1>
      </div>
      <form onSubmit={handelCreateUser} className="flex flex-col gap-5 w-full">
        <TextField
          id="outlined-basic"
          label="Username"
          type="text"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          required
          variant="outlined"
          error={error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 1,
            borderRadius: 7,
            py: 2,
          }}
          variant="contained"
        >
          Sign up
        </Button>
      </form>

      <div className="flex flex-col gap-4 justify-center items-center w-full font-kalam">
        <p className="font-bold text-xl">Or Sign up with social platform</p>
        <div className="flex gap-2">
          <img
            src={GOOGLE}
            className="p-2 border border-black rounded-full w-12 cursor-pointer hover:bg-gray-300"
            alt="GOOGLE icon"
          />
          <img
            src={GITHUB}
            className="p-2 border border-black rounded-full w-12 cursor-pointer hover:bg-gray-300"
            alt="GITHUB icon"
          />
          <img
            src={LINKEDIN}
            className="p-2 border border-black rounded-full w-12 cursor-pointer hover:bg-gray-300"
            alt="LINKEDIN icon"
          />
          <img
            src={TELEGRAM}
            className="p-2 border border-black rounded-full w-12 cursor-pointer hover:bg-gray-300"
            alt="TELEGRAM icon"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
