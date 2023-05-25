import treeData from '../assets/treeData.json';
import { TTreeDataItem } from '../types';

export function getTreeData(): TTreeDataItem[] {
  return treeData.map((item) => ({
    ...item,
    hasChildren: treeData.filter((i) => i.parentId === item.id).length > 0,
  }));
}
