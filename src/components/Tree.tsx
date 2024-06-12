import { Flex } from '@chakra-ui/react';

import { Draggable } from '@hello-pangea/dnd';
import { TTreeProps } from '../types';
import Node from './Node';

function Tree({ treeData, parentId = 0, level = 0, dropProvided }: TTreeProps) {
  const items = treeData
    .filter((item) => item.parentId === parentId)
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  if (!items.length) return null;

  return (
    <Flex
      flexDirection="column"
      {...dropProvided.droppableProps}
      ref={dropProvided.innerRef}
    >
      {items.map((item) => (
        <Draggable
          key={item.id}
          draggableId={`item-${item.id}`}
          index={item.id}
        >
          {(dragProvided) => (
            <Node
              key={item.id}
              item={item}
              level={level}
              ref={dragProvided.innerRef}
              {...dragProvided.draggableProps}
              {...dragProvided.dragHandleProps}
            >
              <Tree
                treeData={treeData}
                parentId={item.id}
                level={level + 1}
                dropProvided={dropProvided}
              />
            </Node>
          )}
        </Draggable>
      ))}
    </Flex>
  );
}

export default Tree;
