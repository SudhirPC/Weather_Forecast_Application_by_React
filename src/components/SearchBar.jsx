import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import { Cities } from "../data/city";
import CityDebounce from "./DebounceCity";
import CitySearch from "./CitySearch";

const SearchBar = ({ searchText ,currentLocation, currentLocationFind}) => {
console.log(currentLocation,"curr")

  const [text, setText] = useState(null);
  console.log(text,'text')

  useEffect(() =>{

    setText(currentLocation);

  },[currentLocation])

  const [city, setCity]= useState(null);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    searchText(text);
    setText(text+' ')
  };

  const cityData= CityDebounce(text, 800)


  useEffect(() => {

      function filterByValue(array, string) {
        return array?.filter((el) =>
  
          { return el?.city?.toLowerCase().includes(string?.toLowerCase())}
          )
      }
  
  
      setCity(filterByValue(Cities, cityData));

  }, [cityData]);


  const handleFindLocation=()=>{
    currentLocationFind(true)
    setText(currentLocation)
  }


  return (
    <Box  >
      <InputGroup align="center" display="flex">
        <InputLeftElement
          h="3rem"
          // pointerEvents="none"
          cursor="pointer"
          onClick={handleFindLocation}
          children={<MdLocationOn color="gray.300" fontSize="20px" />}
        />
        <Input
          type="tel"
          placeholder="Search City"
          h="3rem"
          value={text}
          borderRadius={"10px"}
          boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
          onChange={handleChangeText}
        />
        <InputRightElement
          // pointerEvents="none"
          h="3rem"
          children={<GrSearch color="gray.300" fontSize="18px" />}
          onClick={handleSearch}
          cursor="pointer"
        />
      </InputGroup>
      <Box  position="absolute" top="20"  w='94%' zIndex='100'  boxShadow=' rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' borderRadius='10px' overflow='hidden'>
        {city?.map((el,i)=>{
         return <CitySearch searchText={searchText} setText={setText} key={++i} el={el}/>
        })}

      </Box>
    </Box>
  );
};

export default SearchBar;
