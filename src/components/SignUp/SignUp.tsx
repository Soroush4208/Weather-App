<<<<<<< HEAD
const SignUp = () => {
  return <div>SignUp</div>;
};

=======
import { Button, TextField } from "@mui/material";
import GOOGLE from "../../assets/svgs/google.svg";
import GITHUB from "../../assets/svgs/github.svg";
import LINKEDIN from "../../assets/svgs/linkedin.svg";
import TELEGRAM from "../../assets/svgs/telegram.svg";
import { filterUser } from "../../api";
import { ROUTES } from "../../router/path";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type UserProps = {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
};

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res: AxiosResponse<UserProps[]> = await filterUser({
        password,
        username,
      });
      if (res.data.length === 1) {
        toast.success("Login successful");
        setError(false);
        setTimeout(() => {
          navigate(ROUTES.WetherCityPage);
        }, 2000); // 2 seconds delay
      } else {
        toast.error("Invalid username or password");
        setError(true);
      }
    } catch (error) {
      alert("An error occurred while trying to sign in");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen items-start gap-5 w-1/3">
      <div className="w-full flex justify-center">
        <h1 className="font-kalam font-bold text-3xl">Sign in</h1>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-5 w-full">
        <TextField
          id="outlined-username"
          label="Username"
          variant="outlined"
          value={username}
          error={error}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          error={error}
          onChange={(e) => setPassword(e.target.value)}
          required
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
          Login
        </Button>
      </form>

      <div className="flex flex-col gap-4 justify-center items-center w-full font-kalam">
        <p className="font-bold text-xl">Or Sign in with social platform</p>
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
    </div>
  );
};

>>>>>>> 6a6cb0cd5bb987837cea5be77aa184117ec0b795
export default SignUp;
