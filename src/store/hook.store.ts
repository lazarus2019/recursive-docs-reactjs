import { useContext } from 'react';

import NodeContext from './context.store';
import { TNodeContext } from './type.store';

function useNodeStore() {
  const { state, dispatch } = useContext(NodeContext) as TNodeContext;

  return { state, dispatch };
}

export default useNodeStore;
