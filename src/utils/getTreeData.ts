import treeData from '../assets/treeData.json';
import { TNodeItem } from '../types';

export function getTreeData(): TNodeItem[] {
  return treeData.map((item) => ({
    ...item,
    hasChildren:
      treeData.filter((item) => item.parentId === item.id).length > 0,
  }));
}
