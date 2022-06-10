import React from 'react';
import { format } from 'date-fns';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  // Textarea,
  Select
  // Input
} from '@chakra-ui/core';
type Props = {
  startTime: number;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
};

export default function EventModal(props: Props) {
  const { startTime, isOpen, onClose, onSubmit } = props;
  // console.log('startTime', new Date(startTime), startTime);
  const startDateStr = format(startTime, 'yyyy-MM-dd');
  const [selectedDateValue, setSelectedDateValue] = React.useState(startDateStr);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState('');

  const onClickSubmit = () => {
    let tpMp = new Map([
      ['😄', '3'],
      ['😕', '2'],
      ['😨', '1'],
      ['🤧', '-1'],
      ['😭', '-2'],
      ['😤', '-3']
    ]);
    if (!title) {
      return;
    }
    const event = {
      title: title || 'New Event',
      date: selectedDateValue,
      type: parseInt(tpMp.get(title) || '1')
    };
    console.log('event', event);
    onSubmit && onSubmit(event);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>定义时间</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Input
              placeholder="Date"
              type="date"
              defaultValue={startDateStr}
              onChange={(ev: any) => setSelectedDateValue(ev.target.value)}
            /> */}
            {/* <Input placeholder="Title" mt={2} onChange={(ev: any) => setTitle(ev.target.value)} /> */}
            <Select placeholder="选择心情" mt={2} onChange={(ev: any) => setTitle(ev.target.value)}>
              <option value="😄">😄 - 贼开心</option>
              <option value="😙">😙 - 小确幸</option>
              <option value="😕">😕 - 一般般</option>
              <option value="😨">😨 - 又躺平</option>
              <option value="🤧">🤧 - 生病啦</option>
              <option value="😭">😭 - 桑心了</option>
              <option value="😤">😤 - 气死了</option>
            </Select>
            {/* <Textarea
              placeholder="Description"
              mt={2}
              rows={4}
              onChange={(ev: any) => setDescription(ev.target.value)}
            />
            <Input placeholder="Type (-3, -2, -1, 0, 1, 2, or 3)" onChange={(ev: any) => setType(ev.target.value)} /> */}
          </ModalBody>

          <ModalFooter>
            {/* <Button variant="ghost" onClick={onClose}>
              Close
            </Button> */}
            <Button bg="#E16B8C" _hover={{ bg: '#64363C' }} color="#fff" onClick={onClickSubmit}>
              决定了
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
