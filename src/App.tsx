import { Flex } from '@chakra-ui/react';
import Form from './components/Form';
import Tree from './components/Tree';
import { useNodeStore } from './store';

import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';

function App() {
  const { state } = useNodeStore();

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (destination) {
      console.log(source, 'move into', destination);
    }
  };

  return (
    <Flex>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tree-list">
          {(dropProvided) => (
            <>
              <Tree treeData={state.nodeList} dropProvided={dropProvided} />
              {dropProvided.placeholder}
            </>
          )}
        </Droppable>
      </DragDropContext>
      <Form />
    </Flex>
  );
}

export default App;
