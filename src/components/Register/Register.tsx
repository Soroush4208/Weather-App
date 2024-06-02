import { useNavigate } from "react-router-dom";
import "./Register.css";
import { ROUTES } from "../../router/path";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center align-middle h-[100vh]">
      <div className="glitch-wrapper cursor-pointer">
        <button
          onClick={() => navigate(ROUTES.login)}
          className="glitch text-3xl sm:text-[80px]"
          data-glitch="Go to Weather app"
        >
          Go to Weather app
        </button>
      </div>
    </div>
  );
}

export default Register;
