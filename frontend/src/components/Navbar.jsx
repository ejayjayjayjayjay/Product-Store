import { Link } from 'react-router-dom'

import { Container, HStack, Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Container maxW="1140px" px={4}>
        <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDir={{
                base: 'column',
                sm: 'row',
            }}
        >
            <Text
                bgGradient={'linear(to-r, cyan.400, blue.500)'}
                bgClip={'text'}
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={'bold'}
                textAlign={'center'}
                textTransform={'uppercase'}
            >
                <Link to="/">Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to="/create">
                    <Button>
                        <PlusSquareIcon fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'dark' ? <SunIcon fontSize={20} color="yellow.400" /> : <MoonIcon fontSize={20} />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
