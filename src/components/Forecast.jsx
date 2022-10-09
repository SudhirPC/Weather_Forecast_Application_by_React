import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ForecastCard from "./ForecastCard";

const Forecast = ({ weekly, handleChangeDay }) => {
  const [active, setActive] = useState(null);

  return (
    <Flex h="9rem" w="100%" p="0 .5rem" overflowX={"scroll"} align="center">
      {weekly?.map((daily, index) => {
        return (
          <ForecastCard
            key={index + 1}
            daily={daily}
            handleChangeDay={handleChangeDay}
            setActive={setActive}
            active={active}
          />
        );
      })}
    </Flex>
  );
};

export default Forecast;
