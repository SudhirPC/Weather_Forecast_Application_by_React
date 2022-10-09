import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CitySearch = ({el,searchText,setText}) => {

  const handleSearchCities=()=>{
    searchText(el?.city)
    setText(`${el?.city}, ${el?.state}`)
  }
  let weatherIcon={
    Clear: '01d',
    minor: '10d'
  }

  return (
    <Flex onClick={handleSearchCities}   bg='white' borderBottom='1.5px solid #dfdfdf' h='4rem' cursor='pointer' justify="space-between" align="center" p='0 1.5rem'>
      <Box>
        <Text fontWeight='700'>{el?.city}, <span style={{fontWeight:'500'}}>{el?.state}</span></Text>
      </Box>
      <Flex h='100%' align='center' justify="space-between" >
        <Box>
          <Text>{el?.temp} ºC</Text>
          <Text>{el?.condition}</Text>
        </Box>
        {el?.condition!=='' &&
        <Center  h='100%' w='80%'>
        <Image h='100%' src={`http://openweathermap.org/img/wn/${weatherIcon[el?.condition]}@2x.png`} />
        </Center>
        }
      </Flex>
    </Flex>
  )
}

export default CitySearch