import "./App.css";
import { Box } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import Statistics from "./components/Statistics";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [loading, setLoading] = useState(true);
  let [latitude, setLatitude] = useState(null);
  let [longitude, setLongitude] = useState(null);

  let [current, setCurrent] = useState(null);
  let [hourly, setHourly] = useState(null);
  let [daily, setDaily] = useState(null);

  const [day, setDay] = useState(null);

  let [currentLocation, setCurrentLocation] = useState(null);

  const handleChangeDay = (val) => {
    setDay(val);
  };

  const currentLocationFind = () => {
    fetchData();
  };

  //! fetch current location
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      getCityResult(position.coords.latitude, position.coords.longitude);
      getWeeklyForecast(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (city) => {

    let key = "ed603e64a3a129d0915b84a5c3f6accd";

    try {
      
      axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
        method: "get",
      }).then((res) => {

        const {
          data: {
            coord: { lat, lon },
          },
        } = res;
        setLatitude(lat);
        setLongitude(lon);
        getWeeklyForecast(lat, lon);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getWeeklyForecast = (lati, long) => {
    let key = "ed603e64a3a129d0915b84a5c3f6accd";
    setLoading(true);

    axios({
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=minutely&appid=${key}`,
      method: "get",
    }).then((res) => {
setTimeout(() =>{

  setLoading(false);
  setCurrent(res.data.current);
  setHourly(res.data.hourly);
  setDaily(res.data.daily);
},1200);
})
  };

  const getCityResult = (lati, long) => {
 

    let key = "ed603e64a3a129d0915b84a5c3f6accd";


    axios({
      url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${long}&limit=1&appid=${key}`,
      method: "get",
    }).then((res) => {

      setCurrentLocation(res?.data[0]?.name);
    });
  };



  return (
    <Box className="App" maxW="40rem" margin="0 auto" p='1rem 0' position="relative">
      <Box className="searchBox" p="1rem">
        <SearchBar
          currentLocation={currentLocation}
          currentLocationFind={currentLocationFind}
          searchText={handleSearch}
        />
      </Box>
      {!loading && (
        <>
          <Box className="forecastReport" overflow="scroll" w="94%" m="auto">
            <Forecast weekly={daily} handleChangeDay={handleChangeDay} />
          </Box>
          <Box
            className="statistics"
            borderRadius="14px"
            boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
            margin="0 auto"
            mt="1.4rem"
            w="90%"
            h={["34.4rem", "35rem", "40rem", "40rem", "43rem"]}
            overflow="hidden"
          >
            <Statistics day={day} current={current} hourly={hourly} />
          </Box>
        </>
      )}
      {loading && 
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_vk6zmhp7.json"  background="transparent"  speed="1"  style={{width: "100%", height: "100%", transform:'scale(.5)'}}  loop autoplay></lottie-player>
      }
    </Box>
  );
}

export default App;
