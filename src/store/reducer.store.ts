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

function nodeReducer(state: TNodeState, action: TNodeAction): TNodeState {
  switch (action.type) {
    case nodeActionVariant.addNode: {
      const currentNodeList = [...state.nodeList, action.payload];

      const currentNode = {
        ...state,
        nodeList: currentNodeList,
      };

      state.nodeList.map((node) => {
        if (node.id === action.payload.parentId) {
          node.hasChildren = true;
        }
      });

      localStorage.setItem('tree-data', JSON.stringify(currentNode));

      return currentNode;
    }

    case nodeActionVariant.removeNode: {
      const newNodeList = [...state.nodeList];

      const currentNodeList = newNodeList.filter(
        (node) => node.id != action.payload
      );

      const currentNode = {
        ...state,
        nodeList: currentNodeList,
      };

      localStorage.setItem('tree-data', JSON.stringify(currentNode));

      return currentNode;
    }

    default:
      throw new Error('invalid action');
  }
}

export default nodeReducer;
