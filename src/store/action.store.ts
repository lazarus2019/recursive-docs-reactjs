import { TNodeItem } from '../types';
import { nodeActionVariant } from './config.store';

export const addNode = (payload: TNodeItem) => {
  return {
    type: nodeActionVariant.addNode,
    payload,
  } as const;
};

export const toggleHasChildren = (payload: TNodeItem) => {
  return {
    type: nodeActionVariant.toggleHasChildren,
    payload,
  } as const;
};

export const removeNode = (payload: number) => {
  return {
    type: nodeActionVariant.removeNode,
    payload,
  } as const;
};
