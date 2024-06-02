import { Button, TextField } from "@mui/material";
import GOOGLE from "../../assets/svgs/google.svg";
import GITHUB from "../../assets/svgs/github.svg";
import LINKEDIN from "../../assets/svgs/linkedin.svg";
import TELEGRAM from "../../assets/svgs/telegram.svg";

const SignUp = () => {
  return (
    <div className="flex flex-col  justify-center h-screen items-start gap-5 w-1/3">
      <div className="w-full flex justify-center">
        <h1 className="font-kalam font-bold text-3xl">Sing in</h1>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>

      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 1,
          borderRadius: 7,
          py:2
        }}
        variant="contained"
      >
        login
      </Button>
      <div className="flex flex-col gap-4 justify-center items-center w-full font-kalam">
        <p className="font-bold text-xl">Or Sign up witch social platform</p>
        <div className="flex gap-2 ">
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

export default SignUp;
