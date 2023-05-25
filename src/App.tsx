import Tree from './components/Tree';
import { getTreeData } from './utils/getTreeData';

function App() {
  return <Tree treeData={getTreeData()} />;
}

export default App;
