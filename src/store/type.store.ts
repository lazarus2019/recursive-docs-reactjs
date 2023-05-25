import { Dispatch, ReactNode } from 'react';

import { nodeActionVariant } from './config.store';
import { TNodeItem } from '../types';

export type TNodeState = {
  node: TNodeItem;
  nodeList: TNodeItem[];
};

export type TNodeActionType =
  (typeof nodeActionVariant)[keyof typeof nodeActionVariant];

export type TNodeAction = {
  type: TNodeActionType;
  payload: TNodeItem;
};

export type TNodeContext = {
  state: TNodeState;
  dispatch: Dispatch<TNodeAction>;
};

export type TNodeProviderProps = {
  children: ReactNode;
};
