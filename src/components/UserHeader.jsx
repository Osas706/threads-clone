import {  Box, Flex, Link, Menu, Text, VStack, MenuButton, MenuList, MenuItem, Portal, useToast } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import React from 'react';
import { IoMdFootball , IoMdLaptop} from "react-icons/io";
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';

const UserHeader = () => {
    const toast = useToast();

    const copyURL = () => {
       const currentURL = window.location.href;
       navigator.clipboard.writeText(currentURL)
         .then(() => {
            toast({ 
              description: 'Profile link copied',
              title: 'Account Copied',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
         });
    };


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
              size={{ base: 'md', md: 'xl'}}
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
                <Menu>
                    <MenuButton>
                        <CgMoreO size={24} cursor={'pointer'} />
                    </MenuButton>

                    <Portal>
                        <MenuList bg={'gray.dark'}>
                            <MenuItem bg={'gray.dark'} onClick={copyURL}>Copy Link</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
                
            </Box>
        </Flex>
      </Flex>

      <Flex w={'full'}>
         <Flex flex={1} borderBottom={'1.5px solid white'} justifyContent={'center'} pb={'3'} cursor={'pointer'}>
            <Text fontWeight={'bold'}>Threads</Text>
         </Flex>

         <Flex flex={1} borderBottom={'1.5px solid gray'} color={'gray.light'} justifyContent={'center'} pb={'3'} cursor={'pointer'}>
            <Text fontWeight={'bold'}>Replies</Text>
         </Flex>
      </Flex>
    </VStack>
  )
}

export default UserHeader;
