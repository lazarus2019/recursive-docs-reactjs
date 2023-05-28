import { Flex } from '@chakra-ui/react';
import Tree from './components/Tree';
import { useNodeStore } from './store';
import Form from './components/Form';

function App() {
  const { state } = useNodeStore();

  return (
    <Flex>
      <Tree treeData={state.nodeList} />
      <Form />
    </Flex>
  );
}

export default App;
