import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "./path";
import Loading from "../components/Loading/Loading";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const WeatherPage = lazy(() => import("../pages/WeatherPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const RegisterPage = lazy(() => import("../pages/Registerpage"));

export default function Router() {
  const routes = useRoutes([
    { path: ROUTES.Register, element: <RegisterPage /> },
    { path: ROUTES.login, element: <LoginPage /> },
    { path: ROUTES.WetherCityPage, element: <WeatherPage /> },
    { path: ROUTES.error, element: <ErrorPage /> },
    { path: "*", element: <Navigate to={ROUTES.error} replace /> },
  ]);

  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
}
