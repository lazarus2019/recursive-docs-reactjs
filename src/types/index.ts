import { DroppableProvided } from '@hello-pangea/dnd';
import { ReactNode } from 'react';

export type TNodeItem = {
  id: number;
  title: string;
  parentId: number;
  hasChildren: boolean;
};

export type TTreeProps = {
  treeData: TNodeItem[];
  parentId?: number;
  level?: number;
  dropProvided: DroppableProvided;
};

export type TNodeProps = {
  item: TNodeItem;
  level: number;
  children: ReactNode;
};
