import { Flex } from '@chakra-ui/react';

import { TTreeProps } from '../types';
import Node from './Node';

function Tree({ treeData, parentId = 0, level = 0 }: TTreeProps) {
  const items = treeData
    .filter((item) => item.parentId === parentId)
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  if (!items.length) return null;

  return (
    <Flex flexDirection='column'>
      {items.map((item) => (
        <Node key={item.id} item={item} level={level}>
          <Tree treeData={treeData} parentId={item.id} level={level + 1} />
        </Node>
      ))}
    </Flex>
  );
}

export default Tree;
