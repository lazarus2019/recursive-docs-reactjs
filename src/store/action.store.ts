import { TNodeItem } from '../types';
import { nodeActionVariant } from './config.store';

export const createTodo = (payload: TNodeItem) => {
  return {
    type: nodeActionVariant.createNode,
    payload,
  } as const;
};

export const deleteTodo = (payload: number) => {
  return {
    type: nodeActionVariant.deleteNode,
    payload,
  } as const;
};
