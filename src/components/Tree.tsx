import { TTreeProps } from '../types';
import Row from './Node';

function Tree({ treeData, parentId = 0, level = 0 }: TTreeProps) {
  const items = treeData
    .filter((item) => item.parentId === parentId)
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  if (!items.length) return null;

  return (
    <>
      {items.map((item) => (
        <Row key={item.id} item={item} level={level}>
          <Tree treeData={treeData} parentId={item.id} level={level + 1} />
        </Row>
      ))}
    </>
  );
}

export default Tree;
