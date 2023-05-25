import { nodeActionVariant } from './config.store';
import { TNodeAction, TNodeState } from './type.store';

export const initialNodeState: TNodeState = {
  node: {
    id: 0,
    title: '',
    parentId: 0,
    hasChildren: false,
  },
  nodeList: [],
};

function nodeReducer(state: TNodeState, action: TNodeAction) {
  switch (action.type) {
    case nodeActionVariant.addNode:
      return {
        ...state,
        nodeList: [...state.nodeList, action.payload],
      };
    case nodeActionVariant.removeNode:
      return {
        ...state,
        nodeList: [...state.nodeList, action.payload],
      };
    default:
      throw new Error('invalid action');
  }
}

export default nodeReducer;
