import React from 'react';
import { useToast, Button, Flex, Box, useDisclosure, Text } from '@chakra-ui/core';
import WeekTimeline from './components/WeekTimeline/WeekTimeline';
// import DataModal from './components/DataModal/DataModal';
// import OptionModal from './components/OptionModal/OptionModal';

// import logo from './logo.svg';
import './App.css';

function App({ dataString }: { dataString: string }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = React.useState(JSON.parse(dataString));

  React.useEffect(() => {
    let visits: number = parseInt(localStorage.getItem('visits') || '0');
    visits++;
    localStorage.setItem('visits', `${visits}`);
    let today = new Date();
    console.log(today.getMonth());
    console.log(today.getDate());
    if (today.getMonth() == 5 && today.getDate() == 11) {
      toast({
        render: () => (
          <Box
            onClick={() => {
              toast.closeAll();
            }}
            color="white"
            p={3}
            m={6}
            bg="#E16B8C"
            borderRadius="sm"
          >
            🎂HAPPY BIRTHDAY！🎂
            <Box>
              <Box as="span" ml="2" color="white" fontSize="sm">
                - 你在被人安稳的爱着，应该有做任何事的勇气，祝你开心不止生日。🥳
              </Box>
            </Box>
          </Box>
        ),
        status: 'info',
        duration: 6000,
        position: 'top',
        isClosable: true
      });
    }
    // onOpen();
    // if (visits === 1) {
    // if (1 === 1) {
    //   toast({
    //     title: '欢迎',
    //     description: `- 每一个格子代表你生命中的一星期`,
    //     status: 'info',
    //     duration: 12000,
    //     isClosable: true
    //   });
    // }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Flex m={2} justifyContent="space-between" w="100%">
          {/* <h1>Life Calendar: Your Life in Weeks </h1> */}
        </Flex>

        <Box>
          <WeekTimeline data={data} />
        </Box>
        {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg="blackAlpha.300" />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}

        {/* {isOpen && (
          <DataModal
            dataString={JSON.stringify(data, null, 4)}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={(dataJson: any) => {
              // console.log('onSubmit - dataJson', dataJson);
              onClose();
              setData(dataJson);
              toast({
                title: 'Updated',
                description: `You have total ${dataJson.events.length} events (boxes) now.`,
                status: 'success',
                duration: 9000,
                isClosable: true
              });
            }}
          />
        )} */}
      </header>
    </div>
  );
}

export default App;
