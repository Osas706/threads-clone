import {  Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import React from 'react';
import { IoMdFootball , IoMdLaptop} from "react-icons/io";
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={'start'}>
      <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
            <Text fontSize={'2xl'} fontWeight={'bold'}>Winn Omo</Text>

            <Flex gap={2} alignItems={'center'}>
                <Text fontSize={'sm'}>winn_omo</Text>
                <Text fontSize={'xs'} bg={'gray.dark'} color={'gray.light'} p={1} borderRadius={'full'}>
                    threads.next
                </Text>
            </Flex>
        </Box>

        <Box>
            <Avatar 
               name='Winn Omo'
               src='/mee.jpg'
               size={'xl'}
            />
        </Box>
      </Flex>

      <Text display={'flex'} alignItems={'center'} gap={1}>Software developer <IoMdLaptop /> '' Real Madrid  <IoMdFootball /></Text>

      <Flex w={'full'} justifyContent={'space-between'}>
        <Flex gap={2} alignItems={'center'}>
            <Text color={'gray.light'}>3.2K followers</Text>
            <Box w={'1'} h={'1'} bg={'gray.light'} borderRadius={'full'}></Box>
            <Link color={'gray.light'}>instagram.com</Link>
        </Flex>

        <Flex>
            <Box className='icon-container'>
                <BsInstagram size={24} cursor={'pointer'}/>
            </Box>
            <Box className='icon-container'>
                <CgMoreO size={24} cursor={'pointer'} />
            </Box>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default UserHeader;
