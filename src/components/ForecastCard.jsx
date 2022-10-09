import { Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ForecastCard = ({ daily, handleChangeDay, setActive, active }) => {
  //! days of the week
  let timestamp = daily?.dt;
  let a = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayOfWeek = days[a.getDay()];

  //! temp range of the week
  let maxTemp = Math.round(daily?.temp.max - 273);

  let minTemp = Math.round(daily?.temp.min - 273);

  //! weather icon
  let icon = daily?.weather[0].icon;

  //! weather
  let weather = daily?.weather[0].main;

  const handleChangeDays = () => {
    handleChangeDay(daily);
    setActive(daily);
  };

  return (
    <Flex
      onClick={handleChangeDays}
      cursor={"pointer"}
      // border={active===daily ? '3px solid #21a6ff' : '3px solid white'}
      backgroundColor={active === daily ? "#fcfcf0" : "#fff"}
      boxShadow={
        active === daily ? "rgba(7, 121, 251, 0.509) 0px 0px 0px 3px" : "none"
      }
      zIndex={active === daily ? "1" : "0"}
      transition="all .2s ease"
      direction="column"
      justify="space-between"
      p=".4rem"
      minWidth="6rem"
      maxW="5rem"
      height="90%"
      color="#414141"
      align="center"
    >
      <Text fontWeight={"700"} fontSize="18px">
        {dayOfWeek}
      </Text>
      <Flex w="75%" fontWeight={"700"} fontSize="16px" justify="space-between">
        <Text>{maxTemp}º</Text>
        <Text color="#c1bfbf">{minTemp}º</Text>
      </Flex>
      <Center height="34%" my=".1rem">
        <Image
          h="100%"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </Center>
      <Text fontSize="16px" fontWeight="500" color="#9e9c9c">
        {weather}
      </Text>
    </Flex>
  );
};

export default ForecastCard;
