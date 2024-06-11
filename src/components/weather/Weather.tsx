import { Button, CircularProgress, TextField } from "@mui/material";
import "./Weather.css";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../constant/const";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "../../assets/svgs/logout.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/path";

const WeatherCity = () => {
  const [searchCity, setSearchCity] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const api = {
    key: "c5420726342033d00894faa5acc4f0ec",
  };

  const getApiWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLocation(null);
    setSearchCity("");
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${api.key}&units=metric`
      );
      setLocation(res.data);
      toast.success("Weather data fetched successfully!");
      setError(false);
    } catch (err) {
      toast.error("Error fetching weather data.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handelAddToHistory = async () => {
    try {
      const get = await axios.get(`${BASE_URL}/history`);
      const existingLocation = get.data.find(
        (item) => item.name === location.name
      );
      if (!existingLocation) {
        const res = await axios.post(`${BASE_URL}/history`, location);
        toast.success("This city has been added");
        setHistory([...history, location]);
        return res;
      } else {
        toast.error("This city has already been added");
      }
    } catch (error) {
      toast.error("Error adding to history");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const get = await axios.get(`${BASE_URL}/history`);
        setHistory(get.data);
      } catch (error) {
        toast.error("Error fetching history data");
      }
    };
    fetchData();
  }, []);
  const handelLogout = () => {
    toast.success("Logout successful");
    setTimeout(() => {
      navigate(ROUTES.Register);
    }, 2000);
  };

  async function deleteHandler(id: number) {
    try {
      const res: AxiosResponse = await axios.delete(
        `${BASE_URL}/history/${id}`
      );
      setHistory((prev) => {
        return [...prev].filter((item) => item.id !== id);
      });
      toast.success("City deleted from history");
    } catch (error) {
      toast.error("Error deleting city from history");
    }
  }

  return (
    <div className="Weather w-screen h-screen overflow-hidden">
      <img
        src={Logout}
        className="absolute top-2 right-2 cursor-pointer"
        alt="Logout"
        onClick={handelLogout}
      />
      <div className="w-full flex justify-center items-center gap-2">
        <form
          className="w-1/2 flex justify-center items-center py-2 gap-4 rounded-md"
          onSubmit={getApiWeather}
        >
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            type="text"
            error={error}
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            sx={{ backgroundColor: "transparent", width: "85%", m: 1 }}
          />
          <Button
            type="submit"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "10%",
              py: 2,
            }}
            variant="contained"
          >
            Search
          </Button>
        </form>
      </div>
      <div className="mt-4 flex justify-center ">
        {loading && <CircularProgress />}
        {location && (
          <div className="w-1/2">
            <div className="flex flex-col gap-3 backdrop-brightness-150 font-kalam text-3xl border rounded-md hover:backdrop-brightness-200 p-4 ">
              <div className="flex justify-around items-center">
                <h2 className="">
                  CITY : {location?.name},{location?.sys?.country}
                </h2>
                <img
                  src={`https://openweathermap.org/img/w/${location?.weather[0]?.icon}.png`}
                  alt="Weather icon"
                  className="w-24"
                />
              </div>
              <div className="flex justify-around">
                <p className="">Temperature: {location?.main?.temp}°C</p>
                <p className="">
                  Conditions: {location?.weather[0]?.description}
                </p>
              </div>
              <Button onClick={handelAddToHistory}>Add to History</Button>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-5 flex justify-center items-center w-screen">
        {history.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-3 item font-kalam text-3xl px-5 history-color w-[350px] h-22">
            𝐓𝐡𝐞𝐫𝐞 𝐢𝐬 𝐧𝐨 𝐡𝐢𝐬𝐭𝐨𝐫𝐲
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center w-[90%] overflow-auto scrollbar-hide px-5 ">
            {history.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-3 item font-kalam text-3xl border rounded-md bg-box-history py-2 px-5  w-[450px] h-72 mb-6"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-nowrap">
                      CITY : {item.name},{item.sys?.country}
                    </h2>
                    <img
                      src={`https://openweathermap.org/img/w/${item.weather[0]?.icon}.png`}
                      alt="Weather icon"
                      className="w-24"
                    />
                  </div>
                  <p className="text-nowrap">
                    Temperature: {item.main?.temp}°C
                  </p>
                  <p className="text-nowrap">
                    Conditions: {item.weather[0]?.description}
                  </p>
                  <Button
                    variant="contained"
                    color="error"
                    type="submit"
                    onClick={() => deleteHandler(item.id)}
                    sx={{ width: 0.2, mb: 2 }}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default WeatherCity;
