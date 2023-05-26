import Tree from './components/Tree';
import { useNodeStore } from './store';

function App() {
  const { state } = useNodeStore();

  return <Tree treeData={state.nodeList} />;
}

export default App;
