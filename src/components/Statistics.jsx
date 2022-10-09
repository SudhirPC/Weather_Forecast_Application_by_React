import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SunChart from "./SunChart";
import SunStatus from "./SunStatus";
import TempChart from "./TempChart";

const Statistics = ({ hourly, day, current }) => {
  const [tempChartData, setChartData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [sunrise, setSunrise] = useState("6:04");
  const [sunset, setSunset] = useState("18:32");

  useEffect(() => {
    let arr1 = [];
    let arr2 = [];
    //! days of the week
    let timestamp = day?.dt;

    let a = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = days[a.getDay()];

    if (dayOfWeek === "Sun") {
      for (let i = 0; i < hourly?.length; i++) {
        if (i === 25) {
          break;
        }
        let temp = Math.round(hourly[i]?.temp - 273);

        arr1.push(temp);
      }
      setChartData(arr1);
      setTempData([
        12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12,
      ]);
    } else if (dayOfWeek === "Mon") {
      for (let i = 0; i < hourly?.length; i++) {
        if (i === 25) {
          break;
        }
        let temp = Math.round(hourly[i]?.temp - 273);

        arr1.push(temp);
      }
      setChartData(arr1);
      setTempData([
        7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4,
        5, 6, 7,
      ]);
    } else if (dayOfWeek === "Tue") {
      for (let i = 0; i < hourly?.length; i++) {
        if (i === 25) {
          break;
        }
        let temp = Math.round(hourly[i]?.temp - 273);

        arr1.push(temp);
      }
      setChartData(arr1);
      setTempData([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]);
    } else {
      for (let i = 20; i < hourly?.length; i++) {
        let temp = Math.round(hourly[i]?.temp - 273);

        arr2.push(temp);
      }
      setChartData(arr2);
      setTempData([
        12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12,
      ]);
    }

    if (day) {
      let sunrise2 = new Date(day?.sunrise * 1000)
        .toLocaleTimeString()
        .slice(0, 5);

      let sunset2 = new Date(day?.sunset * 1000)
        .toLocaleTimeString()
        .slice(0, 5);

      setSunrise(sunrise2);
      setSunset(sunset2);
    }
  }, [hourly, day]);

  return (
    <Flex
      direction="column"
      justify="space-between"
      w="100%"
      h="100%"
      textAlign={"left"}
      p="1rem"
      color="#363636"
    >
      <Flex h="4rem" align="center">
        <Text fontSize="50px" fontWeight="700">
          {" "}
          {day
            ? Math.round(day?.temp?.max - 273)
            : Math.round(current?.temp - 273)}
          º C
        </Text>
        <Center h="75%" ml="1rem">
          <Image
            h="100%"
            src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
          />
        </Center>
      </Flex>
      <Box>
        <TempChart tempChartData={tempChartData} tempData={tempData} />
      </Box>
      <Flex justify="space-between" h="4rem" mt=".4rem" align="center">
        <Box bg="#ecf5fe" w="42%" p=".2rem .8rem" h="100%">
          <Text fontWeight="700" fontSize="18px">
            Pressure
          </Text>
          <Text fontWeight="600">
            {day ? day?.pressure : current?.pressure} hpa
          </Text>
        </Box>
        <Box bg="#ecf5fe" w="42%" p=".2rem .8rem" h="100%">
          <Text fontWeight="700" fontSize="18px">
            Humidity
          </Text>
          <Text fontWeight="600">
            {day ? day?.humidity : current?.humidity} %
          </Text>
        </Box>
      </Flex>
      <Box>
        <SunStatus sunrise={sunrise} sunset={sunset} />
      </Box>
    </Flex>
  );
};

export default Statistics;
