import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  MdChevronRight,
  MdDescription,
  MdFolder,
  MdFolderOpen,
  MdOutlineAddCircle,
  MdOutlineRemoveCircle,
} from 'react-icons/md';

import { addNode, removeNode, useNodeStore } from '../store';
import { TNodeProps } from '../types';

function Node({ item, level, children }: TNodeProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { dispatch } = useNodeStore();

  const entityIcon = item.hasChildren ? (
    isCollapsed ? (
      <Icon as={MdFolder} boxSize='6' color={'purple.600'} />
    ) : (
      <Icon as={MdFolderOpen} boxSize='6' color={'purple.600'} />
    )
  ) : (
    <Icon as={MdDescription} ml='24px' boxSize='6' color={'blue.500'} />
  );

  const handleAddNode = () => {
    dispatch(
      addNode({
        id: new Date().getTime() + Math.random(),
        title: 'dev-test',
        parentId: item.id,
        hasChildren: false,
      })
    );
  };

  const handleRemoveNode = () => {
    dispatch(removeNode(item.id));
  };

  return (
    <Flex
      key={item.id}
      flexDirection='column'
      marginLeft='24px'
      cursor='pointer'
    >
      <Flex flexDirection='row' alignItems='center'>
        <HStack spacing='2px' onClick={() => setIsCollapsed(!isCollapsed)}>
          {!item.hasChildren ? null : (
            <Icon
              as={MdChevronRight}
              boxSize='6'
              sx={{
                transition: 'transform 0.2s linear',
                transform: !isCollapsed && 'rotate(90deg)',
              }}
            />
          )}
          {entityIcon}
          <Text fontSize='md' marginLeft='8px'>
            {item.title}
          </Text>
        </HStack>

        <ButtonGroup>
          <IconButton
            aria-label='add one node'
            icon={<MdOutlineAddCircle />}
            background='none'
            color='green.500'
            onClick={handleAddNode}
          />
          <IconButton
            aria-label='remove one node'
            icon={<MdOutlineRemoveCircle />}
            background='none'
            color='red.500'
            onClick={handleRemoveNode}
          />
        </ButtonGroup>
      </Flex>
      <Box
        sx={{
          overflow: 'hidden',
          transition: 'height 0.2s ease-in',
          height: isCollapsed && '0',
        }}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default Node;
