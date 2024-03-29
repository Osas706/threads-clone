import { Avatar, Flex , Text, Image, Box, Divider, Button} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsHandIndexFill, BsThreeDots } from 'react-icons/bs';
import Actions from '../components/Actions';
import Comment from '../components/Comment';

const PostPage = () => {
    const [liked, setLiked] = useState(false);

  return (
    <>
       <Flex>
           <Flex w={'full'} alignItems={'center'} gap={3}>
              <Avatar src='/public/mee.jpg' size={'md'} name='winn' />

              <Flex>
                <Text fontSize={'sm'} fontWeight={'bold'}>winn_omo</Text>
                <Image src='/public/verified.png' w={'4'} h={4} ml={4}/>
              </Flex>
           </Flex>

           <Flex gap={4} alignItems={'center'}>
               <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
               <BsThreeDots />
           </Flex> 
       </Flex>

       <Text my={3}>Xup</Text>

       <Box borderRadius={6} overflow={'hidden'} border={'1px solid '} borderColor={'gray.light'}>
            <Image src='/public/post1.jpg' w={'full'}/>
        </Box>

        <Flex gap={3} my={3}>
            <Actions liked={liked} setLiked={setLiked} />
        </Flex>

        <Flex gap={2} alignItems={'center'}>
            <Text color={'gray.light'} fontSize={'sm'}>238 replies</Text>
            <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
            <Text color={'gray.light'} fontSize={'sm'}>
                {156 + (liked ? 1 : 0)} likes
            </Text>
        </Flex>

        <Divider my={4} />

        <Flex justifyContent={'space-between'}>
            <Flex gap={2} alignItems={'center'}>
                <Text fontSize={'2xl'}><BsHandIndexFill /></Text>
                <Text color={'gray.light'}>Get the app to like, reply and post</Text>
            </Flex>

            <Button>Get</Button>
        </Flex>

        <Divider my={4} />

        <Comment 
          comment='looks really good' 
          createdAt='1d' 
          likes={100}
          username='winn'
          userAvatar='/public/mee.jpg'
        />

        <Comment 
          comment='looks good' 
          createdAt='1d' 
          likes={90}
          username='will'
          userAvatar='/public/meeee.jpg'
        />

        <Comment 
          comment='really good' 
          createdAt='2d' 
          likes={114}
          username='winnie'
          userAvatar='/public/meee.jpeg'
        />
    </>
  )
};

export default PostPage;
