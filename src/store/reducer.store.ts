import { getTreeData } from '../utils/getTreeData';
import { nodeActionVariant } from './config.store';
import { TNodeAction, TNodeState } from './type.store';

export const initialNodeState = (): TNodeState => {
  if (localStorage.getItem('tree-data')) {
    return JSON.parse(localStorage.getItem('tree-data') as string);
  }

  return {
    node: {
      id: 0,
      title: '',
      parentId: 0,
      hasChildren: false,
    },
    nodeList: getTreeData(),
  };
};

function nodeReducer(state: TNodeState, action: TNodeAction) {
  switch (action.type) {
    case nodeActionVariant.addNode: {
      const currentNode = {
        ...state,
        nodeList: [...state.nodeList, action.payload],
      };

      state.nodeList.map((node) => {
        if (node.id === action.payload.parentId) {
          console.log('in', node.hasChildren);
          console.log('in', node.id);
          node.hasChildren = true;
        }
      });

      localStorage.setItem('tree-data', JSON.stringify(currentNode));

      return currentNode;
    }

    default:
      throw new Error('invalid action');
  }
}

export default nodeReducer;
