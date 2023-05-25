import { useReducer } from 'react';

import NodeContext from './context.store';
import nodeReducer, { initialNodeState } from './reducer.store';
import { TNodeProviderProps } from './type.store';

function NodeProvider({ children }: TNodeProviderProps) {
  const [state, dispatch] = useReducer(nodeReducer, initialNodeState);

  return (
    <NodeContext.Provider value={{ state, dispatch }}>
      {children}
    </NodeContext.Provider>
  );
}

export default NodeProvider;
