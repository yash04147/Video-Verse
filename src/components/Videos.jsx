import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const VideosArr = [
    'https://www.shutterstock.com/shutterstock/videos/1062264007/preview/stock-footage-monochromatic-animation-of-white-grunge-pencil-doodle-lines-on-black-background-low-frame-rate.webm',
    'https://www.shutterstock.com/shutterstock/videos/1051966348/preview/stock-footage-big-data-and-stock-market-business-visualization-in-a-d-space-showing-pie-charts-numbers-and.webm',
    'https://joy1.videvo.net/videvo_files/video/free/2012-09/large_watermarked/hd0616_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2012-09/large_watermarked/hd0777_preview.mp4',
    'https://media.istockphoto.com/id/1304653064/video/asian-male-businessman-signing-a-contract-and-handshake-to-become-a-partnership.mp4?s=mp4-640x640-is&k=20&c=HENemWcjxbgfEoxrXDc55XGXfHRYeMKbPjNK0jwaUio=',
    'https://media.istockphoto.com/id/1251629783/video/rising-stock-market-chart-arrow-rallying-growth-recovery-concept-4k-seamless-loop-motion.mp4?s=mp4-640x640-is&k=20&c=w2BGEvOkK84NumeO2LhqQdd_Qirx_fckRmIJcckWgh8=',
    'https://cdn.videvo.net/videvo_files/video/premium/video0015/large_watermarked/Comp%20175_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2012-09/large_watermarked/hd0620_preview.mp4',
    'https://cdn.videvo.net/videvo_files/video/free/2022-11/large_watermarked/221028_02_Colouring%20Pencils_4k_004_preview.mp4',
    // 'https://joy1.videvo.net/videvo_files/video/free/2012-09/large_watermarked/hd0714_preview.mp4',
  ];
  const [VideoSrc, setVideoSrc] = useState(VideosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={VideoSrc}
          style={{ width: '100%' }}
        ></video>

        <VStack
          alignItems={'flex-start'}
          p={'2'}
          w={'full'}
          overflowY={'auto'}
          // border={'1px solid red'}
        >
          <Heading>Sample video 1</Heading>
          <Text>
            this is the description. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Exercitationem, magnam ullam provident obcaecati
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
        // border={'1px solid red'}
      >
        {VideosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
