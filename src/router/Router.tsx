import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "./path";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import WeatherPage from "../pages/WeatherPage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/Registerpage";

export default function Router() {
  return useRoutes([
    { path: ROUTES.Register, element: <RegisterPage /> },
    { path: ROUTES.SignIn, element: <SignInPage /> },
    { path: ROUTES.SignUp, element: <SignUpPage /> },
    { path: ROUTES.WetherCityPage, element: <WeatherPage /> },
    { path: ROUTES.error, element: <ErrorPage /> },
    { path: "*", element: <Navigate to={ROUTES.error} replace /> },
  ]);
}
