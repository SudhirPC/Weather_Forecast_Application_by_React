import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SunChart from './SunChart'

const SunStatus = ({sunrise,sunset}) => {
  return (
    <Box  >
      <Flex justify='space-between' p='.2rem 0'>
        <Box >
          <Text fontWeight='700'>Sunrise</Text>
          <Text color='#797878' fontWeight='500'>{sunrise} am</Text>
        </Box>
        <Box>
          <Text fontWeight='700'>Sunset</Text>
          <Text color='#797878' fontWeight='500'>{sunset} pm</Text>
        </Box>
      </Flex>
      <Box>
      <SunChart/>
      </Box>
    </Box>
  )
}

export default SunStatus